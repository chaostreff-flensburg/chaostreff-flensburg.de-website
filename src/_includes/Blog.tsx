export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props} >
    <div class="container">
      <div class="row my-4 mx-2">
        <div class="col-xl-8">
          {children}
        </div>
        <div class="col-xl-4 p-4">
          <props.comp.SideBar />
        </div>
      </div>
    </div>
  </props.comp.Base>
);
