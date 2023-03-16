export default ({ title, children, date, ...props }) => (
  <props.comp.Base title={title} {...props} >
    <div class="container mx-auto">
      <div class="flex my-4 mx-2">
        <div class="card w-full xl:w-3/4 p-4">
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
        <div class="hidden xl:block w-1/4 px-4">
          <space-status />
          <props.comp.InfoMenu {...props} />
        </div>
      </div>
    </div>
  </props.comp.Base>
);
