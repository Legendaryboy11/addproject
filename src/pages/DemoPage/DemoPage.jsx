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
                                    <li><ion-icon name="star-half"></ion-icon></li>
                                </ul>
                                </div>
                                <div className={style.descr}>
                                    <p>The Headless Horseman is a story about an Irish adventurer and hero in the War with Mexico. First Lt. Reid, writing as "Captain Reid," penned a series of popular novels and attributed his Headless Horseman idea to a south Texas folk tale.
                                    The story takes place in Texas soon after the Mexican–American War (1846-1848).Calhoun plots to eliminate his rival when tragedy strikes: Louise's brother, the young Henry Poindexter, is murdered. All clues point to Maurice Gerald as the assassin. At the same time, a headless rider is spotted in the environs of the Poindexter plantation. 
                                    </p>
                                </div>
                                <Link to="/horseman"><button className={style.reading}>start reading</button></Link>
                            </div>
                        </div>                     
                    </div>
                    <div className={style.books}>
                        <div className={style.book_1}>
                            <img src="./images/kristi.jpg" alt="" />
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
                                    <li><ion-icon name="star-outline"></ion-icon></li>
                                </ul>
                                </div>
                                <div className={style.descr}>
                                    <p>The Headless Horseman is a story about an Irish adventurer and hero in the War with Mexico. First Lt. Reid, writing as "Captain Reid," penned a series of popular novels and attributed his Headless Horseman idea to a south Texas folk tale.
                                    The story takes place in Texas soon after the Mexican–American War (1846-1848).Calhoun plots to eliminate his rival when tragedy strikes: Louise's brother, the young Henry Poindexter, is murdered. All clues point to Maurice Gerald as the assassin. At the same time, a headless rider is spotted in the environs of the Poindexter plantation. 
                                    </p>
                                </div>
                                <Link to="/horseman"><button className={style.reading}>start reading</button></Link>
                            </div>
                        </div>                        
                    </div>
                    <div className={style.books}>
                        <div className={style.book_1}>
                            <img src="./images/kristi_2.jpg" alt="" />
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
                                <div className={style.descr}>
                                    <p>The Headless Horseman is a story about an Irish adventurer and hero in the War with Mexico. First Lt. Reid, writing as "Captain Reid," penned a series of popular novels and attributed his Headless Horseman idea to a south Texas folk tale.
                                    The story takes place in Texas soon after the Mexican–American War (1846-1848).Calhoun plots to eliminate his rival when tragedy strikes: Louise's brother, the young Henry Poindexter, is murdered. All clues point to Maurice Gerald as the assassin. At the same time, a headless rider is spotted in the environs of the Poindexter plantation. 
                                    </p>
                                </div>
                                <Link to="/horseman"><button className={style.reading}>start reading</button></Link>
                            </div>
                        </div>                        
                    </div>
                    <div className={style.books}>
                        <div className={style.book_1}>
                            <img src="./images/reid_2.jpg" alt="" />
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
                                <div className={style.descr}>
                                    <p>The Headless Horseman is a story about an Irish adventurer and hero in the War with Mexico. First Lt. Reid, writing as "Captain Reid," penned a series of popular novels and attributed his Headless Horseman idea to a south Texas folk tale.
                                    The story takes place in Texas soon after the Mexican–American War (1846-1848).Calhoun plots to eliminate his rival when tragedy strikes: Louise's brother, the young Henry Poindexter, is murdered. All clues point to Maurice Gerald as the assassin. At the same time, a headless rider is spotted in the environs of the Poindexter plantation. 
                                    </p>
                                </div>
                                <Link to="/horseman"><button className={style.reading}>start reading</button></Link>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoPage;