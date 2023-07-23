import React from 'react';
import style from "./pages.module.css"

const Pages = () => {
    return (
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
    );
};

export default Pages;