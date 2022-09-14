<template>
  <ul>
    <li
      v-for="page of $site.pages
        .filter((page) => page.regularPath.match(/\/blog\/./))
        .slice(0, limit)"
      :key="page.regularPath"
    >
      <router-link :to="page.regularPath">{{ page.title }}</router-link>
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
