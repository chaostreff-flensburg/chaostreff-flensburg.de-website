export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props} >
    <div class="container">
      <div class="row my-4 mx-2">
        <div class="col-xl-8">
          <section class="markdown">
            {children}
          </section>
        </div>
        <div class="d-none d-xl-block col-4 px-4">
          <space-status />
          <props.comp.InfoMenu />
        </div>
      </div>
    </div>
  </props.comp.Base>
);
