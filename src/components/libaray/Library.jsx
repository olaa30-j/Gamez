import React from 'react'
import './library.css'
import GamesCard from '../gamesswiper/gamescard/GamesCard';
const Library = ({games}) => {
  return (
    <section id='library' className='library'>
      <div className="container-fluid">
        <div className="row mb-3">
          <h2>Your Library</h2>
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
      </div>
    </section>
  )
}

export default Library;