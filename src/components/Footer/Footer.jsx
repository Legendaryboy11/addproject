import React from 'react';
import style from "./footer.module.css"

const Footer = () => {
    return (
        <>
        <footer className={style.footer}>
            <div className={style.footer_container}>
                    <div className={style.footer_div}>
                        <div className={style.footer_div1}>
                            <img src="./images/page_1.png" alt="" />
                        </div>
                        <div className={style.footer_div2}>
                            <a target="_blank" href="https://ru-ru.facebook.com"><img src="./images/Facebook.png" alt="" /></a>
                            <a target="_blank" href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dru"><img src="./images/Twitter.png" alt="" /></a>
                            <a target="_blank" href="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"><img src="./images/In.png" alt="" /></a>
                            <a target="_blank" href="https://www.instagram.com"><img src="./images/Instagram.png" alt="" /></a>
                        </div>
                    </div>
                <div className={style.footer_wrapper}>
                    <div className={style.footer_nav_1}>
                        <h2>Explore</h2>
                        <div className={style.footer_div_1}>
                            <a href="http://localhost:3000"><div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>Home</p></div> </a>
                            <a href="http://localhost:3000/about"><div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>About</p></div></a>
                            <a href=""><div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>Articles</p></div></a>
                            <a href=""><div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>Our Store</p></div></a>
                            <a href=""><div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>Contact Us</p></div></a>
                        </div>
                    </div>
                    <div className={style.footer_nav_1}>
                        <h2>Utility Pages</h2>
                        <div className={style.footer_div_1}>
                            <a target="_blank" href="https://code.visualstudio.com"><div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>Style Guide</p></div></a>
                            <a target="_blank" href="https://www.ionos.com/digitalguide/websites/website-creation/what-does-the-404-not-found-error-mean/"><div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>404 Not Found</p></div></a>
                            <a target="_blank" href="https://www.ptsecurity.com/ww-en/"><div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>Password Protected</p></div></a>
                            <a target="_blank" href="https://www.sec.gov/Archives/edgar/data/1145328/000101041211000534/equityagmtacnev8k.htm"><div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>Licenses</p></div></a>
                            <div className={style.div_01}><h1>&bull;&bull;&bull;</h1><p>Changelog</p></div>
                        </div>
                    </div>
                    <div className={style.footer_nav_1}>
                        <h2>Keep in Touch</h2>
                        <div className={style.footer_div_1}>
                            <div className={style.f_1}>
                                <h3>Adress:</h3>
                                <p>Centenary Sq, Birmingham <br /> B1 2EA, Great Britain</p>
                            </div>
                            <div className={style.f_1}>
                                <h3>Mail:</h3>
                                <p>boxoffice@bl.uk</p>
                            </div>
                            <div className={style.f_1}>
                                <h3>Phone:</h3>
                                <p>+44 121 242 4242</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className={style.footer_1}>
            <div className={style.footer__h1}>
                <h1>© Drafted by</h1>
                <h2>R.Alihan</h2>
                <h1>- Powered by</h1>
                <h2>IT-run kids.</h2>
            </div>
        </div>
        </>
    );
};

export default Footer;