import React from 'react';
import style from "./demopage.module.css"
import { Link } from 'react-router-dom';

const DemoPage = () => {
    return (
        <section className={style.section_1}>
            <div className={style.container}>
                <div className={style.search_wrapper}>
                    <div className={style.books}>
                        <div className={style.book_1}>
                            <img src="./images/reid.jpg" alt="" />
                            <div className={style.book_info}>
                                <div className={style.info_h2}>
                                <h2>Title:</h2>
                                <h2>Author:</h2>
                                <h2>Genre:</h2>
                                <h2>Rating:</h2>
                                <h2>Description:</h2>
                                </div>
                                <div className={style.info_p}>
                                <p>The Headless Horseman (Monsters)</p>  
                                <p>Mayne Reid</p>
                                <p>Western, Adventure </p> 
                                <ul className={style.rating}>
                                    <li><ion-icon name="star"></ion-icon></li>
                                    <li><ion-icon name="star"></ion-icon></li>
                                    <li><ion-icon name="star"></ion-icon></li>
                                    <li><ion-icon name="star"></ion-icon></li>
                                    <li><ion-icon name="star"></ion-icon></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoPage;