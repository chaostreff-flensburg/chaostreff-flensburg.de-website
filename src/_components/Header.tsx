export default ({ ...props }) => (
  <div class="container">
    <nav class="navbar mx-2 d-flex flex-nowrap">
      <a class="btn d-flex flex-nowrap align-items-center" href="/">
        <img src="/logo.png" alt="logo" class="mx-3 header-img logo" />
        <div class="d-none d-sm-flex header-title flex-column justify-content-center">
          <b>Chaostreff Flensburg e.V</b>
          <div>Hackspace & Makeplace</div>
        </div>
      </a>
      <ul class="d-none d-xl-flex">
        <props.comp.HeaderMenuItems {...props} />
      </ul>
      <div class="d-xl-none sideMenuWrapper" tabindex="0">
        <button class="btn btn-outline-dark btn-shadow">Menü</button>
        <nav class="sideMenu shadow p-3">
          <section>
            <space-status />
            <b><strong>Blog:</strong></b>
            <ul class="d-flex flex-column">
              <props.comp.HeaderMenuItems {...props} />
            </ul>
            <props.comp.InfoMenu {...props} />
          </section>
        </nav>
      </div>
    </nav>
  </div>
);
