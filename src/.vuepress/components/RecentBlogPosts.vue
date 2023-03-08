<template>
  <ul>
    <li
      v-for="page of $site.pages
        .filter((page) => page.regularPath.match(/\/blog\/./))
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        .slice(0, limit)"
      :key="page.regularPath"
    >
      <router-link class="btn btn-outline-dark btn-shadow my-2" :to="page.regularPath" v-html="page.title" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RecentBlogPosts',
  props: {
    limit: {
      type: Number,
      default: 8,
    },
  },
};
</script>
