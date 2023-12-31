import React, { useEffect, useState } from 'react';
import style from "./shoppage.module.css"
import axios from 'axios';

const ShopPage = () => {
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([])
    const [basket, setBasket] = useState([])
    const [book, setBook] = useState([])
    console.log(basket);

    useEffect(() => {
        axios.get('http://localhost:3005/books')
            .then(res => setBooks(res.data))
    }, [])

    const filterdBooks = books.filter(book => {
        return book.title.toLowerCase().includes(search.toLowerCase().trim())
    })
    const addToBasket = (id) => {

        console.log(id)

        axios.get(`http://localhost:3005/books/${id}`)
            .then(res => setBook(res.data))

        const chosen = {
            
            title: book.title,
            price: book.price
        }    
        axios.post('http://localhost:3005/basket', chosen )
            .then(res => console.log(res.data))
    }
    



    return (
        <section className={style.container}>
            <div className=' wow animate__animated animate__backInUp'>
                <div className={style.row}>
                    <div className={style.search_div}>
                        <input
                            type="text"
                            placeholder='Book Search...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className={style.search}><ion-icon name="search-outline"></ion-icon></button>
                    </div>
                    <hr />
                    <div className={style.books}>

                        {filterdBooks.map(book => {
                            return (
                                <div className={style.product}>
                                    <div className={style.image}>
                                        <img src={book.img} alt="" />
                                    </div>
                                    <div className={style.info}>
                                        <h3>{book.title}</h3>
                                        <ul className={style.rathing}>
                                            <li><ion-icon name={book.reating}></ion-icon></li>
                                            <li><ion-icon name={book.reating}></ion-icon></li>
                                            <li><ion-icon name={book.reating}></ion-icon></li>
                                            <li><ion-icon name={book.reating_1}></ion-icon></li>
                                            <li><ion-icon name={book.reating_2}></ion-icon></li>
                                        </ul>
                                        <div className={style.info_price}>
                                            <span className={style.price}>{book.price}<small>$</small></span>
                                            <button onClick={() => addToBasket(book.id)} className={style.add_to_cart}><ion-icon name="cart"></ion-icon></button>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPage;