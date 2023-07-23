import React from 'react';
import style from "./demopage.module.css"

const DemoPage = () => {
    return (
        <section className={style.section_1}>
            <div className={style.container}>
                <div className={style.search_wrapper}>
                    <div className={style.search_div}>
                        <input id="elastic" type="text" placeholder='Book Search...'/>
                        <button className={style.search}><ion-icon name="search-outline"></ion-icon></button>
                    </div>
                    <div className={style.basa}>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoPage;