/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './home.css'
import GamesSwiper from '../gamesswiper/GamesSwiper'
import GamesCard from '../gamesswiper/gamescard/GamesCard'

const Home = ({ games }) => {
  return (
    <section id='home' className='home'>
      <div className="container-fluid">
        <div className="row">
          <GamesSwiper games={games} />
        </div>

        <div className="row second-header mb-4 mt-4">
          <div className="col-lg-6">
            <h2 className="sectionTitle">
              Games on promotion
            </h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#" className="videoMore">
              view more games
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="row">
          {
            games.slice(0, 4).map((game, index) => (
              <GamesCard key={game.id} game={game} index={index} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Home