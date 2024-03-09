import Sidebar from "../DashNavbar/DashNavbar";
import "./Layout.css";
// import "apexcharts";
// import "apexcharts/dist/apexcharts.css";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Sidebar />
      <hr style={{ borderWidth: "2px" }} className="mb"></hr>
      <div id="layoutChild" className="">
        {children}
      </div>
    </div>
  );
};

export default Layout;
