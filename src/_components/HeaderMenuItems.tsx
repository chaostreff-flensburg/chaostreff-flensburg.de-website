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
    {[
      ...pages,
      ...search.pages("header"),
    ]
    .map((page) => {
      if(page?.data && page?.data?.slug){
        const subpages = search.pages(`header(${page.data.slug})`, "date=desc");
        if (subpages.length > 0) {
          return (
            <li class="category dropdown">
              <div
                class="btn btn-outline-dark btn-shadow m-2 dropdown-label"
                tabindex="0"
              >
                {page.data.title}
              </div>
              <div class="block dropdown-menu btn-outline-dark p-0 mx-2">
                {subpages.map((subpage) => (
                  <a class="block dropdown-item" href={subpage.data.url}>
                    {subpage.data.title}
                  </a>
                ))}
              </div>
            </li>
          );
        }
      } else {
        return (
          <li>
            <a href={page.data?.url || page.url}>
              <div class="btn btn-outline-dark btn-shadow m-2">
                {page.data?.title}
                {page.title}
              </div>
            </a>
          </li>
        );
      }
    })}
  </>
);
