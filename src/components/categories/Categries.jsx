/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './categories.css';
import GamesCard from '../gamesswiper/gamescard/GamesCard';

const Categries = ({ games }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [search, setSearch] = useState('');

    let gamesCategories = games.map(item => item.category);
    let dataCategories = [];

    for (let i of gamesCategories) {
        if (!dataCategories.includes(i)) {
            dataCategories.push(i);
        }
    }

    let categories = ['All', ...dataCategories];

    const filteredGames = games.filter((game) => {
        const categoryFilter = selectedCategory === 'All' || game.category === selectedCategory;
        const searchFilter = game.title.toLowerCase().includes(search.toLowerCase());
        return categoryFilter && searchFilter;
    });

    const handleSearch =(e) =>{
        setSearch(e.target.value);
    };

    
    return (
        <div className="categoriesContainer">
            <div className="filterHeader">
                <ul className="filtersList">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`filterItem ${category === selectedCategory && 'active'}`}
                        >
                            <a href="#">{category}</a>
                        </li>
                    ))}
                </ul>

                <div className="searchContainer">
                    <i class="bi bi-search "></i>
                    <input type="search" placeholder="Search..." className='searchInput' onChange={(e)=> handleSearch(e)}/>
                </div>
            </div>
            <div className="container-fluid row dataContainer">
                {filteredGames.map((game) => (
                    <GamesCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

export default Categries;
