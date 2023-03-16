const pages = [
  {
    data: {
      url: "/blog/page/1/",
      title: "Blog",
    },
  },
];

export default ({ search, ...props }) => (
  <>
    {
      [
        ...pages,
        ...search.pages("header"),
      ].map((page) => {
        const subpages = search.pages(`header(${page.data.slug})`, "date=desc");
        if (subpages.length > 0) {
          return (
            <li class="category dropdown dropdown-side">
              <div class="btn btn-outline-dark btn-shadow m-2 dropdown-label" tabindex="0">
                {page.data.title}
              </div>
              <div class="d-block position-relative dropdown-menu btn-outline-dark p-0 mx-2">
                {subpages.map((subpage) => <a class="dropdown-item" href={subpage.data.url}>{subpage.data.title}</a>)}
              </div>
            </li>
          );
        } else {
          return (<li><a href={page.data.url} class="btn btn-outline-dark btn-shadow m-2">{page.data.title}</a></li>)
        }
      })
    }
  </>
)