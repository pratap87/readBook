import React, { Component } from 'react'
import PropTypes from 'prop-types'
 import  StarRatings from "react-star-ratings"
class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    render() {

        const { onUpdateShelf, book } = this.props
     
        return (
            <li>
               
                <div className="book">
                    <div className="book-top">
                        {
                            //show thumbnail of book exists. If it doesn't show a gray background
                            book.imageLinks !== undefined ?
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url( ' + book.imageLinks.thumbnail + ')' }}></div>
                                : <div className="book-cover" style={{ width: 128, height: 193, background: 'gray' }}></div>
                        }
                        <div className="book-shelf-changer">

                            <select onChange={(e) => onUpdateShelf(book, e.target.value)} value={book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-bottom">
                        <div className="book-title">{book.title}
                        
                        
                    
                        </div>
                        <div>
                            <StarRatings
                                
                  rating={4}
                  starRatedColor="#FFC850"
                  starHoverColor="#FFC850"
                  changeRating={() => console.log("===")}
                  numberOfStars={5}
                  name="rating"
                  starSpacing="3px"
                  starDimension="15px"
                />
                        </div>
                        
                    <div className="book-authors">
                        {

                            book.authors !== undefined &&
                            book.authors.map((author, i) => (
                                book.authors.length - 1 !== i ? author + ", " : author
                            ))

                        }
                    </div>
                    <div className="book-btn">
                         <a className="glink" href={book.canonicalVolumeLink}><button className="gbtn" >See This Book</button></a>
                    </div>

                    </div>
                    </div>
            </li>
        )

    }

}

export default Book