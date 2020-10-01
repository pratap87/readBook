import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import * as BooksAPI from './BooksAPI'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'
import Book from './Book'
import LandingImage from "./download.svg";

class Main extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    render() {

        const { books, onUpdateShelf } = this.props
        console.log(books)
        const currentlyReading = books.filter((book) => (
            book.shelf === "currentlyReading"
        ))
        const wantToRead = books.filter((book) => (
            book.shelf === "wantToRead"
        ))
        const read = books.filter((book) => (
            book.shelf === "read"
        ))

        return (
            <div className="app">
                <div className="list-books">
                    <div className="header">
                        <h1>read<span>Books</span></h1>
                        <Link className="l"
                            to="/search">
                            <h2>Search</h2>
                        </Link>
                    </div>
                    <div className="landing">
                        <div className="landbox">
                            <div>
                                <h1>Dedicated Bookstore </h1>
                                <h1>For Serious Reader</h1>
                                <p>It's better to have your nose in a book ,tham in someone else's buisness</p>
                                <button className="btn">Browse Books -></button>
                                </div>
                        </div>
                        <div className="landimg">
                            <img src={LandingImage}/>
                        </div>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {currentlyReading.length > 0 &&
                                //Display only if there are books on the "currentlyReading" shelf
                                <div className="bookshelf">
                               
                                <div className="bookshelf-books">
                                         <h2 className="bookshelf-title">Currently Reading</h2>
                                        <ol className="books-grid">
                                            {currentlyReading.map((book) => (
                                                <Book
                                                    key={book.id}
                                                    book={book}
                                                    onUpdateShelf={onUpdateShelf}
                                                />
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            }

                            {wantToRead.length > 0 &&
                                //Display only if there are books on the "wantToRead" shelf
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {wantToRead.map((book) => (
                                                <Book
                                                    key={book.id}
                                                    book={book}
                                                    onUpdateShelf={onUpdateShelf}
                                                />
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            }

                            {wantToRead.length > 0 &&
                                //Display only if there are books on the "wantToRead" shelf
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {read.map((book) => (
                                                <Book
                                                    key={book.id}
                                                    book={book}
                                                    onUpdateShelf={onUpdateShelf}
                                                />
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                   
                        
                    
                </div>
            </div>
        )
    }

}

export default Main