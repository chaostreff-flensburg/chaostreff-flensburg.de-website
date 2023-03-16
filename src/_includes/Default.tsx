import Base from "../_components/Base.tsx";
import SideBar from "../_components/SideBar.tsx";

export default ({ title, children, date, ...props }) => (
  <Base title={title} {...props} >
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
          {children}
        </div>
        <div class="col-xl-4 p-4">
          <SideBar />
        </div>
      </div>
    </div>
  </Base>
);
