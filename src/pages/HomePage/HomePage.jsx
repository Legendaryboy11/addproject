import React from 'react';
import styles from './homepage.module.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <section className={styles.mayne_section}>
            <div className={styles.container}>
                <div className={styles.mayne_wrapper}>
                <div className=' wow animate__animated animate__backInLeft'>
                    <div className={styles.mayne_div1}>
                        <div className={styles.mayne_text}>
                            <div className={styles.mayne_text_1}>
                                <hr />
                                <p> Welcome To Pages!!!</p>
                            </div>

                            <h1>Your Books Are From <br />The Best Writers. </h1>

                            <h4>We believe that reading books are essential to a healthy culture. <br />
                            This is the place where you can buy interesting books.</h4>
                        </div>
                        <div className={styles.mayne_info_3}>
                            
                            <p>Click on the picture of the book to learn more about the book</p>
                        </div>

                        <div className={styles.mayne_buttons}>
                            <button className={styles.mayne_buttons_1}>Order Today</button>
                            <button className={styles.mayne_buttons_2}>Read Free Demo <hr /></button>
                        </div>
                        <div className={styles.mayne_info}>
                            <div className={styles.mayne_info_1}><h1>&bull;</h1> <h2>Books:</h2></div>
                            <div className={styles.mayne_info_1}><h1>&bull;</h1> <h2>Length:</h2></div>
                            <div className={styles.mayne_info_1}><h1>&bull;</h1> <h2>Ratings:</h2></div>
                        </div>
                        <div className={styles.mayne_info_2}>
                            <h3>126 books <br /> (/4200 bought)</h3>
                            <h3>2700 Hours</h3>
                            <h2>4.1/5 <br /> (6700 ratings)</h2>
                        </div>
                    </div>
                    </div>
                    <div>
                        <h1>hello</h1>
                    </div>
                    <div className=' wow animate__animated animate__backInRight'>
                        <div  className={styles.mayne_img}>
                            <a target="_blank" href="https://en.wikipedia.org/wiki/The_Headless_Horseman_(novel)"><img className={styles.mayne_reid} src="./images/reid.jpg" alt="" /> </a>                      
                            <a target="_blank" href="https://en.wikipedia.org/wiki/Murder_on_the_Orient_Express"><img className={styles.kristi} src="./images/kristi.jpg" alt="" /> </a> 
                            <br />
                            <a target="_blank" href="https://en.wikipedia.org/wiki/Dead_Man%27s_Folly"><img className={styles.kristi_2} src="./images/kristi_2.jpg" alt="" /> </a> 
                            <a target="_blank" href="https://en.wikipedia.org/wiki/Thomas_Mayne_Reid"><img className={styles.mayne_reid_2 } src="./images/reid_2.jpg" alt="" /> </a> 
                        </div>  
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default HomePage;