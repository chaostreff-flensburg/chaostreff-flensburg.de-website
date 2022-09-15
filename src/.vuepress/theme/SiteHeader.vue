<template>
  <nav class="navbar px-4">
    <router-link class="btn d-flex" to="/">
      <img src="../assets/cropped-cropped-Leuchtturmrakete-02-1.png" alt="logo" class="mx-3 header-img" />
      <div class="d-none d-sm-flex header-title flex-column justify-content-center">
        <b>{{ $site.title }}</b>
        <div>{{ $site.description }}</div>
      </div>
    </router-link>
    <div class="row align-items-center">
      <div v-for="nav of $site.themeConfig.nav" class="col-auto d-none d-xl-block">
        <div v-if="nav.children || nav.path" class="category dropdown">
          <router-link :to="nav.link" class="link btn">{{ nav.text }} <i class="bi-chevron-down" /></router-link>
          <div class="dropdown-menu">
            <router-link
              v-for="site of (nav.children ?? [])
                .concat(nav.path
                  ? $site.pages
                    .filter(page => page.regularPath.match(new RegExp(`${nav.path}.`)))
                    .map(page => ({ text: page.title, link: page.regularPath }))
                  : []
                )
              "
              :to="site.link"
              class="dropdown-item"
            >
              {{ site.text }}
            </router-link>
          </div>
        </div>
        <div v-else class="site">
          <router-link :to= "nav.link" class="link btn">{{ nav.text }}</router-link>
        </div>
      </div>
      <SearchBox class="col-auto" />
    </div>
  </nav>
</template>

<script>
import SearchBox from "@vuepress/plugin-search/SearchBox";

export default {
  components: { SearchBox },
};
</script>

<style scoped lang="scss">
.header-title {
  color: black;
}

.header-img {
  height: 3.5rem;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
}

.link {
  color: rgb(27, 29, 29);
}

</style>
