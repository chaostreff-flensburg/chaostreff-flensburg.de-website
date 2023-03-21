export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props} >
    <div class="container mx-auto">
      <div class="flex m-4">
        <div class="w-full xl:w-3/4 p-4">
          <section>
            {children}
          </section>
        </div>
        <div class="hidden xl:block w-1/4 px-4">
          <space-status />
          <props.comp.InfoMenu />
        </div>
      </div>
    </div>
  </props.comp.Base>
);
