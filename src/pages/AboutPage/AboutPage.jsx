import React from 'react';
import style from './aboutpage.module.css'

const AboutPage = () => {
    return (
        <>
        <section className={style.about_section}>
            <div className={style.about_container}>
                <div className={style.about_wrapper}>
                    <div className='alihan wow animate__animated animate__backInLeft'>
                        <div className={style.kristina_img}>
                            <img src="./images/agata.kristi.jpg" alt="" />
                        </div>
                    </div>
                        <div className='alihan wow animate__animated animate__backInRight'>                      
                        <div className={style.info}>
                            <div className={style.info_1}>
                                <h1>About The Author A.Ch<br /> <hr /></h1>
                            </div>
                            <div className={style.info_2}>
                                <p>Agatha Christie, in full Dame Agatha Mary Clarissa Christie, née Miller, (born September 15, 1890, Torquay, Devon, England—died January 12, 1976, Wallingford, Oxfordshire), English detective novelist and playwright whose books have sold more than 4.4 billion copies and have been translated into some 100 languages</p>
                            </div>
                            <div className={style.kr_reviews}>
                                <div className={style.info_3}>
                                    <h1>85</h1>
                                    <p>Novels Published</p>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.info_3}>
                                    <h1>4.4</h1>
                                    <p>Billion Copies</p>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.info_3}>
                                    <img src="./images/2x.png" alt="" />
                                    <p>(Lady is  Order  of the British Empire)<br/> Awards </p>
                                </div>
                            </div>
                            <div className={style.ssylka}>
                                <img src="./images/agatha.png" alt="" />
                                <div className={style.ssylka_info}>
                                    <h1>Agatha Christie, M.Cl</h1>
                                    <p>1890-1976 <br /> https://en.wikipedia.org/wiki/Agatha_Christie</p>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
        <section className={style.about_section}>
            <div className={style.about_container}>
                <div className={style.about_wrapper}>
                        <div className='alihan wow animate__animated animate__backInRight'>                      
                        <div className={style.info}>
                            <div className={style.info_1}>
                                <h1>About The Author J. K. Rowling<br /> <hr /></h1>
                            </div>
                            <div className={style.info_2}>
                                <p>Joanne Rowling CH OBE FRSL (born 31 July 1965), best known by her pen name J. K. Rowling, is a British author and philanthropist. She wrote Harry Potter, a seven-volume children's fantasy series published from 1997 to 2007. She writes Cormoran Strike, an ongoing crime fiction series, under the alias Robert Galbraith.</p>
                            </div>
                            <div className={style.kr_reviews}>
                                <div className={style.info_3}>
                                    <h1>135</h1>
                                    <p>Novels Published</p>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.info_3}>
                                    <h1>184</h1>
                                    <p>Million Copies</p>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.info_3}>
                                    <h1>06</h1>
                                    <p> Awards </p>
                                </div>
                            </div>
                            <div className={style.ssylka}>
                                <img src="./images/qr_code.png" alt="" />
                                <div className={style.ssylka_info}>
                                    <h1>Joanne Rowling</h1>
                                    <p>born : 1965 (age 57)<br /> https://en.wikipedia.org/wiki/J._K._Rowling</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className={style.kristina_img}>
                            <img src="./images/JKRowling.jpg" alt="" />
                        </div>
                </div>
            </div>
        </section>
        <section className={style.about_section_1}>
            <div className={style.about_container}>
                <div className={style.about_wrapper}>
                <div className={style.reid_img}>
                            <img src="./images/Mayne_Reid.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <div className={style.info_01}>
                                <h1>About The Author M.R <br /> <hr /></h1>
                            </div>
                            <div className={style.info_2}>
                                <p>Thomas Mayne Reid (4 April 1818 – 22 October 1883) was an Irish-American novelist who fought in the Mexican–American War (1846–1848). His many works on American life describe colonial policy in the American colonies, the horrors of slave labour and the lives of American Indians.</p>
                            </div>
                            <div className={style.kr_reviews}>
                                <div className={style.info_03}>
                                    <h1>60</h1>
                                    <p>Novels Published</p>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.info_03}>
                                    <h1>10</h1>
                                    <p>Million Copies</p>
                                </div>
                                <div className={style.line}></div>
                                <div className={style.info_03}>
                                    <h1>06</h1>
                                    <p>Awards</p>
                                </div>
                            </div>
                            <div className={style.ssylka_0}>
                                <img src="./images/mayne.png" alt="" />
                                <div className={style.ssylka_info_0}>
                                    <h1>Mayne Reid, C.M</h1>
                                    <p>1818-1883 <br /> https://en.wikipedia.org/wiki/Thomas_Mayne_Reid</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        <section className={style.page_section}>
            <div className={style.page_container}>
                <div className={style.page_wrapper_1}>
                    <div className={style.bk_1}>
                        <h1>What Will You Learn? <br /> <hr /></h1>
                    </div>
                    <div className={style.page_end}>
                    <div className={style.bk_2}>
                        <div className={style.tk}>
                            <div className={style.tk_0}>
                                <div className={style.round}><h2>01</h2></div>
                                <p>Reading broadens one's horizons.</p>
                            </div>
                            <div className={style.tk_0}>
                            <div className={style.round}><h2>02</h2></div>
                                <p>Teaches associative thinking.</p>
                            </div> 
                        </div>
                        <div className={style.tk_1}>
                            <div className={style.tk_0}>
                                <div className={style.round}><h2>03</h2></div>
                                <p>Develops memory.</p>
                            </div>
                            <div className={style.tk_0}>
                                <div className={style.round}><h2>04</h2></div>
                                <p>Changes the view of the world.</p>
                            </div>
                            </div>
                    </div>
                    <div className={style.fone}>
                        <div className={style.fone_img}> 
                            <img src="./images/polza_ch.jpg" alt="" />
                        </div>
                    </div>
                    </div>                    
                </div>
            </div>
        </section>
        <section className={style.about_section_2}>
            <div className={style.about_container_1}>
                <div className={style.about_wrapper_1}>
                    <div className={style.about_info_1}>
                        <h1>Words From Our <br /> Readers <br /> <hr /></h1>
                        <p>We believe that bookstores are essential <br /> for a healthy culture. This is the place where <br /> we find new books as well as our <br />favorite classics, where children enjoy <br />reading that can last a lifetime.</p>
                        <div className={style.about_order}>
                            <img src="./images/order_image.png" alt="" />
                            <h1>(4.8/5)</h1>
                        </div>
                        <h3>Overall Customer Ratings</h3>
                    </div>
                    <div className={style.card}>
                        <div className={style.card_1}>
                            <div className={style.user_1}>
                                <img src="./images/user_1.png" alt="" />
                                <div className={style.user_01}>
                                    <h1>James Williams</h1>
                                    <img src="./images/order_image.png" alt="" />
                                </div>
                            </div>
                            <h3>" Miss Marple Collection "</h3>
                            <p>I was searching this book for <br /> many years and I was happy that I <br /> could find it here.</p>
                        </div>
                        <div className={style.card_1}>
                            <div className={style.user_1}>
                                <img src="./images/user_2.png" alt="" />
                                <div className={style.user_01}>
                                    <h1>Chris Adams</h1>
                                    <img src="./images/order_image_2.png" alt="" />
                                </div>
                            </div>
                            <h3>" Best Author M.Reid "</h3>
                            <p>Mine Reed is one of my favorite <br />authors. Too bad I can't meet him <br /> live.</p>
                        </div>                        
                    </div>
                    <div className={style.card_2}>
                    <div className={style.card_1}>
                            <div className={style.user_1}>
                                <img src="./images/user_3.png" alt="" />
                                <div className={style.user_01}>
                                    <h1>Angeline Flora</h1>
                                    <img src="./images/order_image.png" alt="" />
                                </div>
                            </div>
                        <h3>" Super Comfortable Site "</h3>
                        <p>it is very convenient to buy books <br /> here, I received my order very quickly,<br /> a very comfortable site.</p>
                    </div>   
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default AboutPage;