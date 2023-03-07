<template>
  <div class="SideBar">
    <b><strong>Kontakt und Social Media:</strong></b>
    <ul>
      <li><a class="btn" href="mailto:mail@chaostreff-flensburg.de">mail@chaostreff-flensburg.de</a></li>
      <li><a class="btn" href="https://twitter.com/chaos_fl">Twitter</a></li>
      <li><a class="btn" href="https://www.facebook.com/chaos.flensburg">Facebook</a></li>
      <li><a class="btn" href="https://www.instagram.com/chaos_fl/">Instagram</a></li>
      <li><a class="btn" href="https://www.flickr.com/photos/157585171@N05/">Flickr</a></li>
      <li><a class="btn" href="https://github.com/chaostreff-flensburg">Github</a></li>
    </ul>
    <b><strong>Letzte Blog Einträge:</strong></b>
    <RecentBlogPosts />
    <b><strong>Rechtliches:</strong></b>
    <ul>
      <li><router-link class="btn" to="/datenschutz">Datenschutz</router-link></li>
      <li><router-link class="btn" to="/impressum">Impressum</router-link></li>
    </ul>
  </div>
</template>

<script>
import RecentBlogPosts from "../components/RecentBlogPosts.vue";

export default {
  name: "SideBanner",
  components: { RecentBlogPosts },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>