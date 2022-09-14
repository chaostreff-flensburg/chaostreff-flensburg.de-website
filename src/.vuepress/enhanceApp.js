const matchPath = /(?<path>|.+)\/(?<filename>[-_\w]+)(?<filetype>|\/|\.html|\.md)$/;

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.beforeEach((to, from, next) => {
    if (!to.name) {
      const { filename } = to.fullPath.match(matchPath).groups;
      next(
        siteData.pages
          .find((page) => page.regularPath.match(matchPath)?.groups?.filename === filename)
          ?.regularPath
      );
    }
    next();
  });
}
