<template>
  <div>
    <b>Kontakt und Social Media</b>
    <ul>
      <li><a href="mailto:mail@chaostreff-flensburg.de">mail@chaostreff-flensburg.de</a></li>
    </ul>
    <b>Letzte Blog Einträge:</b>
    <RecentBlogPosts />
  </div>
</template>

<script>
import RecentBlogPosts from "../components/RecentBlogPosts.vue";

export default {
  name: "SideBanner",
  components: { RecentBlogPosts },
};
</script>
