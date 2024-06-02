import style from "./header.module.scss";
import classNames from "classnames/bind";
import * as React from "react";

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx("wrap-header")}> 
            <div className={cx("container-header")}>
                {/*  menu items  */}
                <div className={cx("Logo")}>
                    <img className={cx("image-logo")} src="images/sentimentsentiment.jpeg" alt="" />
                    <span className={cx("header-title")}>Vietnamese Aspect Sentiment Analysis</span>
                </div>
                <div className={cx("header-content")}>
                    <ul className={cx("header-list")}>
                        <li className={cx("header-item")}>Syntax</li>
                        <li className={cx("header-item")}>Entity Recognition</li>
                        <li className={cx("header-item")}>Text classification </li>
                        <li className={cx("header-item")}>Sentiment </li>
                        <li className={cx("header-item")}>Dictionary</li>
                        <li className={cx("header-item")}>IPA</li>
                    </ul>
                </div>
                <div>
                </div>
                <div className={cx("header-github-logo")}>
                    <a href="https://cdn-icons-png.flaticon.com/512/25/25231.png">
                        {/* <img src="path/to/your/github/logo/image.png" alt="GitHub Logo" /> */}
                        <img className={cx("image-logo")} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
