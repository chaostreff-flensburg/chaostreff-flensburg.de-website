export default ({ ...props }) => (
  <div class="bg-white shadow">
    <nav class="container mx-auto py-2">
      <div class="flex mx-4 justify-between items-center">
        <a class="flex items-center" href="/">
          <img src="/logo.png" alt="logo" class="mx-3 h-14" />
          <div class="hidden sm:flex header-title flex-col justify-content-center">
            <b>Chaostreff Flensburg e.V</b>
            <div>Hackspace & Makeplace</div>
          </div>
        </a>
        <ul class="hidden xl:flex flex">
          <props.comp.HeaderMenuItems {...props} />
        </ul>
        <div class="xl:hidden sideMenuWrapper" tabindex="0">
          <button class="btn btn-outline-dark btn-shadow">Menü</button>
          <nav class="sideMenu shadow p-3 overflow-y-auto">
            <section>
              <space-status />
              <b class="text-lg my-2">
                <strong>Menü</strong>
              </b>
              <ul class="flex flex-col">
                <props.comp.HeaderMenuItems {...props} />
              </ul>
              <props.comp.InfoMenu {...props} />
            </section>
          </nav>
        </div>
      </div>
    </nav>
  </div>
);
