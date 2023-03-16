export default ({ title, children, date, ...props }) => (
  <props.comp.Base title={title} {...props} >
    <div class="container">
      <div class="row my-4 mx-2">
        <div v-else class="card col-xl-8 p-4">
          <span>
            {new Date(date).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <section class="markdown">
            {children}
          </section>
        </div>
        <div class="d-none d-xl-block col-4 px-4">
          <space-status />
          <props.comp.InfoMenu {...props} />
        </div>
      </div>
    </div>
  </props.comp.Base>
);
