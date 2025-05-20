import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
//import minify_html from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sass from "lume/plugins/sass.ts";
import feed from "lume/plugins/feed.ts";

const site = lume({
  src: "./src",
  location: new URL("https://chaostreff-flensburg.de/"),
});

site
  .use(jsx_preact())
  .use(mdx())
  .use(pagefind())
  .use(sass())
  .use(tailwindcss())
  .use(postcss())
  //.use(minify_html())
  .use(
    feed({
      title: "Chaos Computer Club Flensburg",
      output: ["/feed.rss", "/feed.json"],
      query: "blog",
      sort: "date=desc",
      info: {
        title: "=site.title",
        description: "=site.description",
      },
      items: {
        title: "=title",
        description: "=excerpt",
      },
    }),
  )
  .copy("media")
  .copy("assets", ".")
  .copy("main.js")
  .remoteFile(
    "./code.css",
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github.min.css",
  );

export default site;
