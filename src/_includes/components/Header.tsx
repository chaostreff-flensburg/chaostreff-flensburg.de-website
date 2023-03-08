const pages = [
  { href: "/blog", title: "Blog" },
  { href: "/about", title: "About" },
];

export default ({ title, description }) => (
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
        pages.map((nav) => (
          <a href={nav.href} class="btn btn-outline-dark btn-shadow mx-2">{nav.title}</a>
        ))
      }
    </div>
  </nav>
);