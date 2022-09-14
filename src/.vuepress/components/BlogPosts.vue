<template>
  <div>
    <div
      v-for="page of $site.pages
        .filter((page) => page.regularPath.match(/\/blog\/./))
        .slice(0, limit)
      "
      :key="page.regularPath"
      class="card my-2"
    >
      <div class="card-header">
        <router-link :to="page.regularPath">{{ page.title }}</router-link>
      </div>
      <div class="card-body">
        <router-link :to="page.regularPath">
          <img :src="page.frontmatter?.imgUrl" :alt="page.title" class="card-img">
        </router-link>
        <p class="mt-3">{{ page.frontmatter?.excerpt  }}</p>
      </div>
    </div>
    <div
      v-if="$site.pages
        .filter((page) => page.regularPath.match(/\/blog\/./))
        .length > limit
      "
      @click="limit += 4"
      class="btn btn-primary"
    >
      mehr Posts anzeigen
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPosts.vue",
  data: () => ({
    limit: 8,
  }),
};
</script>
