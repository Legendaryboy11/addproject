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
                    </div>    

                        <div className={styles.mayne_buttons}>
                            <a href="http://localhost:3000/shop"><button className={styles.mayne_buttons_1}> To buy a book</button></a>
                            <button className={styles.mayne_buttons_2}> <a href="http://localhost:3000/demo">Read Free Demo<hr /></a></button>
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
                    <div className='alihan wow animate__animated animate__backInRight'>
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
        <section className={styles.section_order}>
            <div className={styles.container}>
                <div className={styles.order_wrapper}>
                    <div className='wow animate__animated animate__flipInX'>
                    <div className={styles.order_h1}>
                        <h1>The Best Authors' Books<br /> <hr /> </h1>
                    </div>
                    </div>
                    <div className={styles.order}>
                    <div className={styles.order_left}>
                        <div className={styles.info_left}>
                            <img src="./images/komplect_img.jpg" alt="" />
                            <div className={styles.order_info}>
                            <div className={styles.order_info_1}>
                                <h1>Harry Potter <br />450 Million Copies</h1>
                                <p>$69.99 USD</p>
                            </div>
                            <div className={styles.order_info_2}>
                                <p>The novels chronicle the lives of a <br /> young wizard, Harry Potter, and his <br /> friends Hermione Granger and Ron <br /> Weasley, all of whom are students at <br /> Hogwarts School of Witchcraft and Wizardry. </p>
                            </div> 
                            <div className={styles.order_info_0}><h1>&bull;</h1> <h2>Books available</h2></div>
                            <button className={styles.order_button}>Order Now</button> 
                            </div>                    
                        </div>
                    </div>
                    <div className={styles.order_right}>
                            <img src="./images/collection_2.jpg" alt="" />
                            <div className={styles.order_info}>
                                <div className={styles.order_info_1}>
                                    <h1>And Then There Were None.<br /> 100 Million Copies</h1>
                                    <p>$33.99 USD</p>
                                </div>
                                <div className={styles.order_info_2}>
                                    <p>And Then There Were None is a <br />mystery novel by the English writer Agatha <br /> Christie, described by her as the most <br /> difficult of her books to write. Successive <br /> American reprints and adaptations use that title.</p>
                                </div>
                                <div className={styles.order_info_0}><h1>&bull;</h1> <h2>Books available</h2></div>
                                <button className={styles.order_button}>Order Now</button>
                            </div>
                    </div>
                    </div> 
                    </div>
            </div>
        </section>
        <section className={styles.section_2}>
            <div className={styles.art_container}>
                <div className={styles.art_wrapper}>
                    <div className={styles.wr_h1}>
                        <h1>Articles & Resources <hr /></h1>
                    </div>
                    <div className={styles.f_3}>
                        <div className={styles.f}>
                            <img src="./images/res_1.png" alt="" />
                            <h2>Significant reading has more info number</h2>
                            <p>Override the digital divide with <br /> additional clickthroughs from DevOps <br /> for real-time schemas.</p>
                            <h4>October 6, 2023</h4>
                        </div>
                        <div className={styles.f}>
                            <img src="./images/res_2.png" alt="" />
                            <h2>Many variations of pass <br /> majority have suffered</h2>
                            <p>Capitalize on low-hanging fruit to <br /> identify a ballpark value-added activity <br /> to beta test.</p>
                            <h4>October 6, 2023</h4>
                        </div>
                        <div className={styles.f}>
                            <img src="./images/res_3.png" alt="" />
                            <h2>Words which don’t look even slightly believable</h2>
                            <p>Podcasting operational change <br /> management inside of workflows <br /> to establish a framework.</p>
                            <h4>October 6, 2023</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.section_1}>
            <div className={styles.container_1}>
                <div className={styles.wrapper_1}>
                    <div className={styles.wr_h1}>
                        <h1>Trusted By The Best <hr /></h1>
                    </div>
                    <div className={styles.m_4}>
                        <div className={styles.m_1}>
                            <img src="./images/frame_01.png" alt="" />
                            <h2>Amazen Corp.</h2>
                            <p>They has been helping readers, music lovers, and videophiles find quality material.</p>
                        </div>
                        <div className={styles.m_1}>
                            <img src="./images/frame_02.png" alt="" />
                            <h2>Megan Books</h2>
                            <p>We help physical bookstores manage their overstock to the book inventory.</p>
                        </div>
                        <div className={styles.m_1}>
                            <img src="./images/frame_14.png" alt="" />
                            <h2>Megank</h2>
                            <p>Bookstore serving up the full spectrum of Black literature and wine black books.</p>
                        </div>
                        <div className={styles.m_1}>
                            <img src="./images/frame_04.png" alt="" />
                            <h2>Urban Store</h2>
                            <p>We also carry the latest records, issues of all of your favorite comic books.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
};

export default HomePage;