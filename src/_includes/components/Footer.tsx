export default ({ title, children }) => (
  <div>
    <span class="copyright">Copyright © {(new Date).getFullYear()} {title}</span>
  </div>
);
