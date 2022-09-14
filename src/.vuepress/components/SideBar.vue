<template>
  <div>
    <b>Kontakt und Social Media</b>
    <ul>
      <li><a href="mailto:mail@chaostreff-flensburg.de">mail@chaostreff-flensburg.de</a></li>
      <li><a href="https://twitter.com/chaos_fl">Twitter</a></li>
      <li><a href="https://www.facebook.com/chaos.flensburg">Facebook</a></li>
      <li><a href="https://www.instagram.com/chaos_fl/">Instagram</a></li>
      <li><a href="https://www.flickr.com/photos/157585171@N05/">Flickr</a></li>
      <li><a href="https://github.com/chaostreff-flensburg">Github</a></li>
    </ul>
    <b>Letzte Blog Einträge:</b>
    <RecentBlogPosts />
    <b>Rechtliches</b>
    <br>
      <a href="datenschutz.md">Datenschutz</a></br>
      <a href="impressum.md">Impressum</a>
  </div>
</template>

<script>
import RecentBlogPosts from "../components/RecentBlogPosts.vue";

export default {
  name: "SideBanner",
  components: { RecentBlogPosts },
};
</script>
