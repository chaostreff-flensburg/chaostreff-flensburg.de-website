import { $XML, parse, stringify } from "https://deno.land/x/xml@2.1.1/mod.ts";

const test = parse(`<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/" version="2.0">
  <channel>
    <title>My RSS Feed</title>
    <link>http://127.0.0.1:3000</link>
    <atom:link href="http://127.0.0.1:3000/feed.rss" rel="self" type="application/rss+xml"/>
    <description></description>
    <lastBuildDate>Tue, 18 Apr 2023 16:54:49 GMT</lastBuildDate>
    <language>en</language>
    <generator>https://lume.land</generator>
    <item>
      <title>09.09. bis 11.09.22  #HacksOnTheBeach</title>
      <link>http://127.0.0.1:3000/blog/2022/09-09-11-09-22-hacksonthebeach/</link>
      <guid isPermaLink="false">http://127.0.0.1:3000/blog/2022/09-09-11-09-22-hacksonthebeach/</guid>
      <content:encoded><![CDATA[hello <world>]]></content:encoded>
    </item>
    <item>
      <title>09.09. bis 11.09.22  #HacksOnTheBeach</title>
      <link>http://127.0.0.1:3000/blog/2022/09-09-11-09-22-hacksonthebeach/</link>
      <guid isPermaLink="false">http://127.0.0.1:3000/blog/2022/09-09-11-09-22-hacksonthebeach/</guid>
      <content:encoded><![CDATA[hello <world>]]></content:encoded>
    </item>
  </channel>
</rss>`);

console.log(test);
console.log(test[$XML]);
