export default ({ title, description, search }) => (
  <nav class="container navbar px-2">
    <a class="btn d-flex" href="/">
      <img src="/logo.png" alt="logo" class="mx-3 header-img" />
      <div class="d-none d-sm-flex header-title flex-column justify-content-center">
        <b>Chaostreff Flensburg e.V</b>
        <div>Hackerspace & Makerplace</div>
      </div>
    </a>
    <div class="row align-items-center">
      {
        search.pages("header").map((page) => (
          <a href={ page.data.url } class="btn btn-outline-dark btn-shadow mx-2">{ page.data.title }</a>
        ))
      }
    </div>
  </nav>
);
