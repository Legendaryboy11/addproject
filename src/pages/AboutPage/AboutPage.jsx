import React from 'react';
import style from './aboutpage.module.css'

const AboutPage = () => {
    return (
        <>
        <section className={style.about_section}>
            <div className={style.about_container}>
                <div className={style.about_wrapper}>
                        <div className={style.kristina_img}>
                            <img src="./images/agata.kristi.jpg" alt="" />
                        </div>
                        <div className={style.info}>
                            <div className={style.info_1}>
                                <h1>About The Author <br /> <hr /></h1>
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
                                <div className={style.info_4}>
                                    <img src="./images/2x.png" alt="" />
                                    <p>(Lady is  Order  of the British Empire)<br/> Awards </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        <section className={style.about_section_1}>
            <div className={style.about_container}>
                <div className={style.about_wrapper}>
                        <div className={style.info}>
                            <div className={style.info_01}>
                                <h1>About The Author <br /> <hr /></h1>
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
                                    <h1>02</h1>
                                    <p>Awards</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.reid_img}>
                            <img src="./images/Mayne_Reid.jpg" alt="" />
                        </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default AboutPage;