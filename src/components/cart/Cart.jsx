import React from 'react'
import './cart.css'
import GamesCard from '../gamesswiper/gamescard/GamesCard';
const Cart = ({games}) => {
  return (
    <section id='bag' className='bag'>
      <div className="container-fluid">
        <div className="row mb-3">
          <h2>Your Bag</h2>
        </div>
      </div>

      <div className="row">
          {
            games.length === 0?(
              <p>No Games in your library yet!</p>
            ):(
              games.map((game, index) => (
                <GamesCard 
                  key={game.id} 
                  game={game} 
                  index={index}
                />
              ))
            )
          }
        </div>
    </section>
  )
}

export default Cart;