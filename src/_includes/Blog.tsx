import Base from "./Base.tsx";
import SideBar from "./components/SideBar.tsx";

export default ({ title, children, ...props }) => (
  <Base title={title} {...props} >
    <div class="container">
      <div class="row my-4 mx-2">
        <div v-else class="col-xl-8">
          {children}
        </div>
        <div class="col-xl-4 p-4">
          <SideBar />
        </div>
      </div>
    </div>
  </Base>
);
