<template>
  <nav class="navbar px-2">
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
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
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
         
.dropdown-menu{
  position: absolute;
  display: none;
  transform-origin: top center;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

/*.btn.link {
  position: relative;
  color: #000;
  text-decoration: none;
}

.btn.link:hover {
  color: #000;
}

.btn.link::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.btn.link:hover::before {
  transform: scaleX(1);
}*/
</style>
