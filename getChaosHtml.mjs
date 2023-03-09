import { writeFileSync, promises } from "fs";
const { writeFile, mkdir } = promises;
import fetch from "node-fetch";

const matchPath = /(?<path>|.+)\/(?<filename>[-_\w]+)(?<filetype>|\/|\.\w+)$/;
const matchSrc = /src="(?<src>[-_+=:\.\\\/\w]+\/(?<filename>[-_\w]+)(?<filetype>|\/|\.\w+))"/g;

(async () => {
  const posts = await(await fetch('https://chaostreff-flensburg.de/wp-json/wp/v2/posts?per_page=100')
    .then(data => data.json()));

  await mkdir(`./src/blog/`, { recursive: true });
  await mkdir(`./src/media/blog/uploads/`, { recursive: true });

  //console.log(posts);
  await writeFileSync('./download.json', JSON.stringify(posts));
  const postsMedia = await Promise.all([...posts].map(async ({ _links, ...post }) => {

    if ( !_links?.['wp:featuredmedia']?.[0]?.href ) return { ...post, _links };

    const imgUrl =
      await (
        await (await fetch(_links['wp:featuredmedia'][0].href)
          .then(data => data.json()))
      )?.source_url;

    const img = imgUrl?.match(matchPath)?.groups;
    if (!imgUrl || !img?.filename || !img?.filetype) return { ...post, _links };
    const path = `./src/media/blog/${img?.filename}${img?.filetype}`;
    const buffer = await fetch(imgUrl).then(data => data.arrayBuffer());
    await writeFile(path, Buffer.from(buffer));

    const srcMatches = [...post.content.rendered.matchAll(matchSrc)].map(({ groups }) => groups);

    const downloadedMedia = await Promise.all([...srcMatches].map(async match => {
      if (!match?.src || !match?.filename || !match?.filetype) return '';
      try{
        const buffer = await fetch(match.src).then(data => data.arrayBuffer());
        const path = `./src/media/blog/uploads/${ match.filename }${ match.filetype }`;
        await writeFile(path, Buffer.from(buffer));
        console.log(`replaced media ${ path }`);
        return path;
      } catch (e) {
        return null;
      }
    }));

    const content = post.content.rendered.replaceAll(matchSrc, (match, i, original) => {
      const groups = [...match.matchAll(matchSrc)][0]?.groups;
      console.log(groups);
      return `src="/media/blog/uploads/${ groups.filename }${ groups.filetype }"`;
    });

    return {
      ...post,
      _links,
      content: { rendered: content },
      imgUrl: `/media/blog/${img.filename}${img.filetype}`,
    };
  }));

  const postsRendered = [...postsMedia].map(({ date, title, content, excerpt, slug, imgUrl }) => ({
    path: `${ date.substring(0, 4) }`,
    filename: `${ slug }.md`,
    content:
`---
layout: Default.tsx
tags:
  - blog
title: '${ title.rendered }'
excerpt: '${ excerpt.rendered.replaceAll('\n', '').replaceAll("'", "\\'").trim() }'
date: "${ (new Date(date)).toISOString() }"${ imgUrl ? `\nimgUrl: ${ imgUrl }` : '' }
---
# ${ title.rendered }

${ content.rendered }
`,
  }));

  await Promise.all([...postsRendered].map(async ({ path, filename, content }) => {
    await mkdir(`./src/blog/${ path }`, { recursive: true });
    await writeFile(`./src/blog/${ path }/${ filename }`, content);
  }
));

  console.log('finished');
})();
