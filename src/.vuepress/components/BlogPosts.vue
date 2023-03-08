<template>
  <div>
    <div
      v-for="page of $site.pages
        .filter((page) => page.regularPath.match(/\/blog\/./))
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        .slice(0, limit)
      "
      :key="page.regularPath"
      class="card my-4"
    >
      <div class="card-header">
        <router-link :to="page.regularPath">{{ page.title }}</router-link>
        <span v-if="page.frontmatter.date">{{ new Date(page.frontmatter.date).toLocaleDateString() }}</span>
      </div>
      <div class="card-body">
        <router-link v-if="page.frontmatter.imgUrl" :to="page.regularPath">
          <img :src="page.frontmatter.imgUrl" :alt="page.title" class="card-img">
        </router-link>
        <p v-if="page.frontmatter.excerpt" class="mt-3" v-html="page.frontmatter.excerpt" />
      </div>
    </div>
    <div
      v-if="$site.pages
        .filter((page) => page.regularPath.match(/\/blog\/./))
        .length > limit
      "
      @click="limit += 4"
      class="btn btn-primary btn-shadow"
    >
      mehr Posts anzeigen
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPosts.vue",
  data: () => ({
    limit: 6,
  }),
};
</script>
