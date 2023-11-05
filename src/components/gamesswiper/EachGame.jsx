/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const EachGame = ({ game, active, toggleVideos }) => {
    return (
            <div className="gameSlider">
                <img src={game.img} alt="" className='gameImage' />
                <div className={`video ${active ? "active" : undefined}`}>
                    <iframe
                        width='1000'
                        height='520'
                        src={game.trailer}
                        title={game.title}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen
                    >

                    </iframe>
                </div>
                <div className="content">
                    <h2>{game.title}</h2>
                    <p>{game.description}</p>
                    <div className="buttons">
                        <a href="#" className="orderBtn">
                            Order Now
                        </a>

                        <a href="#" className={`playBtn ${active ? "active" : undefined}`} onClick={toggleVideos}>
                            <span className="pause">
                                <i class="bi bi-pause-circle"></i>
                            </span>
                            <span className="play">
                                <i className="bi bi-play-fill"></i>
                            </span>
                        </a>

                    </div>
                </div>
            </div>
    )
}

export default EachGame