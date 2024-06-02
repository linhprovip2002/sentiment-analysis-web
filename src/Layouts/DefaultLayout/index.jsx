import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div>
      <Header></Header>
      <div className={cx("content")}>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}
export default DefaultLayout;
