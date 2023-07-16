import React from 'react';
import style from './aboutpage.module.css'

const AboutPage = () => {
    return (
        <>
        <section className={style.about_section}>
            <div className={style.about_container}>
                <div className={style.about_wrapper}>
                    <div className={style.kristina_info}>
                        <div className={style.kristina_img}>
                            <img src="./images/agata.kristi.jpg" alt="" />
                        </div>
                        <div className={style.kristina_fone}>
                            <img src="./images/Rectangle.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default AboutPage;