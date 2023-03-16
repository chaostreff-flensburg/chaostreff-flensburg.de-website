import { promises, writeFileSync } from "fs";
const { writeFile, mkdir } = promises;
import fetch from "node-fetch";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const basePath = "../src/";
const blogPath = "./blog/";
const mediaPath = "./media/blog/";

const matchPath = /(?<path>|.+)\/(?<filename>[-_\w]+)(?<filetype>|\/|\.\w+)$/;
const matchSrc =
  /src="(?<src>[-_+=:\.\\\/\w]+\/(?<filename>[-_\w]+)(?<filetype>|\/|\.\w+))"/g;
const matchImg =
  /<img [ -_+=:"\.\\\/\w]+ src="(?<src>[-_+=:\.\\\/\w]+\/(?<filename>[-_\w]+)(?<filetype>|\/|\.\w+))" [ -_+=:"\.\\\/\w]+ \/>/g;

const getTextFromHtml = (html) =>
  new JSDOM(html).window.document.body.textContent
    .replaceAll("\n", "")
    .replaceAll("'", "\\'")
    .trim();

const posts = await await fetch(
  "https://chaostreff-flensburg.de/wp-json/wp/v2/posts?per_page=100"
).then((data) => data.json());

await mkdir(`${basePath}${blogPath}`, { recursive: true });
await mkdir(`${basePath}${mediaPath}/uploads/`, { recursive: true });

//console.log(posts);
await writeFileSync("./download.json", JSON.stringify(posts));
const postsMedia = await Promise.all(
  posts.map(async ({ _links, ...post }) => {
    if (!_links?.["wp:featuredmedia"]?.[0]?.href) return { ...post, _links };

    const imgUrl = await (
      await await fetch(_links["wp:featuredmedia"][0].href).then((data) =>
        data.json()
      )
    )?.source_url;

    const img = imgUrl?.match(matchPath)?.groups;
    if (!imgUrl || !img?.filename || !img?.filetype) {
      return { ...post, _links };
    }
    const path = `${basePath}${mediaPath}${img?.filename}${img?.filetype}`;
    const buffer = await fetch(imgUrl).then((data) => data.arrayBuffer());
    await writeFile(path, Buffer.from(buffer));

    const imgMatches = [...post.content.rendered.matchAll(matchImg)].map(
      ({ groups }) => groups
    );

    const downloadedMedia = await Promise.all(
      imgMatches.map(async (match) => {
        if (!match?.src || !match?.filename || !match?.filetype) return "";
        try {
          const buffer = await fetch(match.src).then((data) =>
            data.arrayBuffer()
          );
          const path = `${basePath}${mediaPath}uploads/${match.filename}${match.filetype}`;
          await writeFile(path, Buffer.from(buffer));
          console.log(`replaced media ${path}`);
          return path;
        } catch (e) {
          return null;
        }
      })
    );

    const content = post.content.rendered.replaceAll(
      matchImg,
      (match, i, original) => {
        const groups = [...match.matchAll(matchSrc)][0]?.groups;
        console.log(groups);
        return `<img decoding="async" loading="lazy" src="/${mediaPath}uploads/${groups.filename}${groups.filetype}" />`;
      }
    );

    return {
      ...post,
      _links,
      content: { rendered: content },
      imgUrl: `/${mediaPath}${img.filename}${img.filetype}`,
    };
  })
);

const postsRendered = [...postsMedia].map(
  ({ date, title, content, excerpt, slug, imgUrl }) => ({
    path: `${date.substring(0, 4)}`,
    filename: `${slug}.md`,
    content: `---
layout: Default.tsx
tags:
  - blog
title: '${getTextFromHtml(title.rendered)}'
excerpt: '${getTextFromHtml(excerpt.rendered)}'
date: "${new Date(date).toISOString()}"${imgUrl ? `\nimgUrl: ${imgUrl}` : ""}
---

# ${title.rendered}

${content.rendered}
`,
  })
);

await Promise.all(
  [...postsRendered].map(async ({ path, filename, content }) => {
    await mkdir(`${basePath}${blogPath}${path}`, { recursive: true });
    await writeFile(`${basePath}${blogPath}${path}/${filename}`, content);
  })
);

console.log("finished");
