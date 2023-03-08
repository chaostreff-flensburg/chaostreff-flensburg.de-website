<template>
  <section class="layout">
    <header>
      <div class="bg-light shadow">
        <site-header class="container" />
      </div>
    </header>

    <main class="content">
      <div class="container">
        <div class="row my-4 mx-2">
          <div v-if="$page.frontmatter.card == false" class="col-xl-8">
            <Content />
          </div>
          <div v-else class="card col-xl-8 p-4">
            <Content />
          </div>
          <div class="col-xl-4 p-4">
            <SideBar class="sticky-sidebar" />
          </div>
        </div>
      </div>
    </main>

    <footer class="footer my-3">
      <site-footer class="container" />
    </footer>
  </section>
</template>

<script>
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SideBar from "../components/SideBar";

import "bootstrap-icons/font/bootstrap-icons.scss";
import "../layout.scss";

export default {
  components: {SiteFooter, SiteHeader}
}
</script>

<style scoped lang="scss">
header {
  position: sticky;
  z-index: 10;
  width: 100%;
  font-size: 1.2rem;
}
main {
  .sticky-sidebar {
    position: sticky;
    top: 8rem;
  }
}
</style>
