// Footer.js
import style from "./footer.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(style);

function Footer() {
    return (
        <div className={cx("wrap-footer")}> 
            <div className={cx("container-footer")}>
                <div className={cx("footer-content")}>
                    <ul className={cx("footer-list")}>
                        <li className={cx("footer-item")}>About Us</li>
                        <li className={cx("footer-item")}>Contact</li>
                        <li className={cx("footer-item")}>Privacy Policy</li>
                        <li className={cx("footer-item")}>Terms of Service</li>
                        {/* Add more items related to LSTM, BiLSTM, RNN */}
                        <li className={cx("footer-item")}>LSTM</li>
                        <li className={cx("footer-item")}>BiLSTM</li>
                        <li className={cx("footer-item")}>RNN</li>
                    </ul>
                </div>
                <div className={cx("footer-social-icons")}>
                    {/* Place your social media icons or links here */}
                </div>
            </div>
        </div>
    );
}

export default Footer;
