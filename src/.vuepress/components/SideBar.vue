<template>
  <div>
    <b>Kontakt und Social Media</b>
    <ul>
    <br>
      <li><a href="mailto:mail@chaostreff-flensburg.de">mail@chaostreff-flensburg.de</a></li><br>
      <li><a href="https://twitter.com/chaos_fl">Twitter</a></li><br>
      <li><a href="https://www.facebook.com/chaos.flensburg">Facebook</a></li><br>
      <li><a href="https://www.instagram.com/chaos_fl/">Instagram</a></li><br>
      <li><a href="https://www.flickr.com/photos/157585171@N05/">Flickr</a></li><br>
      <li><a href="https://github.com/chaostreff-flensburg">Github</a></li><br>
    </ul>
    <b>Letzte Blog Einträge:</b>
    <RecentBlogPosts />
    <b>Rechtliches</b>
    <ul>
    <br>
      <li><router-link to="/datenschutz">Datenschutz</router-link></li><br>
      <li><router-link to="/impressum">Impressum</router-link></li><br>
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

<style scoped lang="scss">
b {
  color: black;
  font-size: 23px;
  border: 1px solid;
  padding: 5px;
}

a {
  color: #303030;
  text-decoration: none;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px;
}

a:hover {
  color: black;
}

ul{
  list-style-type: none;
  font-size: 20px;
}
</style>