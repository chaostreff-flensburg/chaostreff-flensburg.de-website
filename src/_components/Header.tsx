const pages = [
  {
    data: {
      url: "/blog/page/1/",
      title: "Blog",
    },
  },
];

export default ({ search }) => (
  <nav class="container navbar px-2 d-flex flex-nowrap">
    <a class="btn d-flex flex-nowrap align-items-center" href="/">
      <img src="/logo.png" alt="logo" class="mx-3 header-img logo" />
      <div class="d-none d-sm-flex header-title flex-column justify-content-center">
        <b>Chaostreff Flensburg e.V</b>
        <div>Hackspace & Makeplace</div>
      </div>
    </a>
    <div class="d-flex flex-wrap align-items-center">
      {
        [
          ...pages,
          ...search.pages("header"),
        ].map((page) => {
          const subpages = search.pages(`header(${page.data.slug})`, "date=desc");
          if (subpages.length > 0) {
            return (
              <div class="category dropdown bg-white">
                <div class="btn btn-outline-dark btn-shadow m-2 dropdown-label" tabindex="0">
                  {page.data.title}
                </div>
                <div class="d-block dropdown-menu btn-outline-dark p-0 mx-2 bg-white">
                  {subpages.map((subpage) => <a class="dropdown-item" href={subpage.data.url}>{subpage.data.title}</a>)}
                </div>
              </div>
            );
          } else {
            return (<a href={page.data.url} class="btn btn-outline-dark btn-shadow m-2">{page.data.title}</a>)
          }
        })
      }
    </div>
  </nav>
);
