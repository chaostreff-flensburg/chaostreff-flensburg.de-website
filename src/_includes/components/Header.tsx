export default ({ title, description, search }) => (
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
        search.pages("header").map((page) => {
          const subpages = search.pages(`header(${page.data.slug})`);
          if (subpages.length > 0) {
            return (
              <div class="category dropdown">
                <label for={page.data.slug} class="btn btn-outline-dark btn-shadow m-2">
                  {page.data.title}
                </label>
                <input type="checkbox" id={page.data.slug} class="visually-hidden" />
                <div class="dropdown-menu m-2 bg-white">
                  {subpages.map((subpage) => <a href={subpage.data.url} class="dropdown-item">{subpage.data.title}</a>)}
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
