import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import minify_html from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const site = lume({
  src: "./src",
});

site.use(code_highlight());
site.use(jsx_preact());
site.use(mdx());
site.use(minify_html());
site.use(pagefind());
site.use(tailwindcss());
site.use(postcss());

site.copy("media");
site.copy("assets", ".");

site.remoteFile(
  "./code.css",
  "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github.min.css",
);
site.remoteFile(
  "./bootstrap.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
);

export default site;
