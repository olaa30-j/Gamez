/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import './gamescard.css'
import GameRating from './GameRating'
import {UserContext} from '../../../App'

const GamesCard = ({ game , key}) => {
    const [liked, setLiked] = useState(false);
    const handleLikes = () =>{
        setLiked(!liked)
    }

    const {library, setLibrary, cart, setCart} = useContext(UserContext);

    const handleAddLibrary = () => {
        setLibrary([
            ...library,game
        ])
    }

    const handleRemoveLibrary = (game) => {
        setLibrary(
            library.filter((item)=> item._id !== game._id)
        )
    }

    const handleAddCart = () => {
        setCart([
            ...cart,game
        ])
    }

    const handleRemoveCart = (game) => {
        setLibrary(
            library.filter((item)=> item._id !== game._id)
        )
    }

    return (
        <div className="col-xl-3 col-lg-4 col-md-6" key={key}>
            <div className="gameCard">
                <img src={game.img} alt={game.title} className="img-fluid" />
                <a href='#' onClick={handleLikes} className={`fav ${library.includes(game) && 'active'}`}>
                    <i 
                        className="bi bi-heart-fill" 
                        onClick={library.includes(game)? ()=> handleRemoveLibrary(game) : ()=> handleAddLibrary()}>
                    </i>
                </a>

                <div className="gameFeature">
                    <span className="gameType">
                        {game.level}
                    </span>

                    <GameRating rating={game.rating} />
                </div>

                <div className="gameTitle mt-4 mb-3">{game.title}</div>
                <div className="gamePrice">
                    {
                        game.discount !== 0 && (
                            <>
                                <span className="discount">
                                    <i>{game.discount * 100} %</i>
                                </span>

                                <span className="prevPrice">
                                    {game.price !== undefined ? game.price.toFixed(2) : 'Price not available'}
                                </span>
                            </>
                        )
                    }

                    <span className="currentPrice">
                        ${((1 - game.discount) * game.price)}
                    </span>
                </div>

                <a href="#" className="addCart">
                    <i class="bi bi-basket-fill" onClick={library.includes(game)? ()=> handleRemoveCart(game) : ()=> handleAddCart()}></i>  
                </a>

            </div>
        </div>
    )
}

export default GamesCard