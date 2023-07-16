import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className={styles.vector_div1}>
                <div className={styles.vector_wrapper}>
                    <div className={styles.vector_1}>
                        <img src="./images/Vector.png" alt="" />
                        <h2>Pages</h2>
                    </div>
                    <div className={styles.vector_2}>
                        <a target="_blank" href="https://ru-ru.facebook.com"><img src="./images/Frame.png" alt="" /></a>
                        <a target="_blank" href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dru"><img src="./images/Frame_1.png" alt="" /></a>
                        <a target="_blank" href="https://www.instagram.com"><img src="./images/Frame_2.png" alt="" /></a>
                    </div>
                    <div className={styles.head_wrapper}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/pages">Pages</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <img src="./images/Frame_3.png" alt="" />
                        </li>
                    </div>
                    <button>Order Today</button>
                </div>
            </div>
        </header>
    );
};

export default Header;