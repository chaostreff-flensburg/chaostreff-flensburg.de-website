<template>
  <div>
    <b><strong>Kontakt und Social Media</strong></b>
    <ul>
    <br>
      <li><a href="mailto:mail@chaostreff-flensburg.de">mail@chaostreff-flensburg.de</a></li><br>
      <li><a href="https://twitter.com/chaos_fl">Twitter</a></li><br>
      <li><a href="https://www.facebook.com/chaos.flensburg">Facebook</a></li><br>
      <li><a href="https://www.instagram.com/chaos_fl/">Instagram</a></li><br>
      <li><a href="https://www.flickr.com/photos/157585171@N05/">Flickr</a></li><br>
      <li><a href="https://github.com/chaostreff-flensburg">Github</a></li><br>
    </ul>
    <b><strong>Letzte Blog Einträge:</strong></b>
    <RecentBlogPosts />
    <b><strong>Rechtliches</strong></b>
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
  border: 3px solid;
  border-radius: 7px;
  padding: 5px;
  
}

a {
  color: #303030;
  text-decoration: none;
  border: 2px solid;
  padding: 10px;
  box-shadow: 3px 5px;
  transition: box-shadow 0.2s ease-in-out;
}

a:hover {
  color: black;
  box-shadow: 7px 10px;
}

ul{
  list-style-type: none;
  font-size: 20px;
}
</style>