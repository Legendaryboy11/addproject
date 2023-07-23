import React from 'react';
import style from "./shoppage.module.css"

const ShopPage = () => {
    return (
        <section className={style.container}>
            <div className=' wow animate__animated animate__backInUp'>
            <div className={style.row}>
                <div className={style.col_md_4}>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./images/kristi.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>Murder on the orient express (Agatha Cristi)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>13.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./images/reid.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>The Headless Horseman (M.Reid)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>23.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./images/kristi_2.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>Dead Man's Folly <br /> (Agatha Cristi)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>39.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./images/reid_2.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>The Death Shot <br />(M.Reid)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>28.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className={style.col_md_4 }>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/ak_3.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>SINISTER SPRING (Agatha Cristi)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>23.44<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/mr_3.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>Osceola the Seminole <br /> (M.Reid)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>21.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/ak_4.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>Sad Cypress <br /> (Agatha Cristi)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>32.88<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/ak_5.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>Dumb Witness <br /> (Agatha Cristi)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>13.34<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={style.col_md_4 }>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/mr_4.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>The Wild Huntress (M.Reid)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>16.18<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/ak_6.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>N or M? <br /> (Agatha Cristi)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>4.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/mr_5.webp" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>The Tiger Hunter <br /> (Mr.Reid)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>22.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/ak_6.webp" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>4.50 From Paddington. <br /> (Agatha Cristi)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>230<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={style.col_md_4 }>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/j.k_1.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>Hogwarts Library <br />(J. K. Rowling)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>159.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./images/komplect_img.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>Harry Potter <br />(J. K. Rowling)
                            </h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>69.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/j.k_2.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>The Christmas Pig <br />(J. K. Rowling)</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>30.33<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.image}>
                            <img src="./book/j.k_3.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <h3>The Harry Potter Wizarding Almanac</h3>
                            <ul className={style.rathing}>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star-half"></ion-icon></li>
                            </ul>
                            <div className={style.info_price}>
                                <span className={style.price}>23.99<small>$</small></span>
                                <button className={style.add_to_cart}><ion-icon name="cart-outline"></ion-icon></button>
                            </div>
                        </div>
                    </div>
                    </div>                    
            </div>
            </div>
        </section>
    );
};

export default ShopPage;