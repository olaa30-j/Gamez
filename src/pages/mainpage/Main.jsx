import React, { useState, useEffect, useContext } from 'react'
import './main.css'
import SideMenu from '../../components/sidemenu/SideMenu';
import Header from '../../components/header/Header';
import Home from '../../components/home/Home';
import Categries from '../../components/categories/Categries';
import { UserContext } from '../../App';
import Library from '../../components/libaray/Library';
import Cart from '../../components/cart/Cart';

const Main = () => {
  const  [active, setActive] = useState(false);
  const  [allGames, setAllGames] = useState([]);
  const [currentComponent, setCurrentComponent] = useState('home'); 
  const {library, cart}= useContext(UserContext)

  const handleToggaleActive = () =>{
    setActive(!active);
  }

  const fetchData = ()=>{
    fetch('http://localhost:3000/api/gamesData.json')
      .then((res) => res.json())
      .then((data)=>{
        setAllGames(data);
        console.log(data)
      })
      .catch((err)=>console.error(err.message))
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const switchComponent = (componentName) => {
    setCurrentComponent(componentName);
  }

  return (
    <div className='main'>
        <SideMenu active={active} switchComponent={switchComponent}/>
        <div className={`banner ${active ? "active" : undefined}`}>
            <div className="headerConatiner">
              <Header toggleActive={handleToggaleActive}/>
            </div>
  
            {currentComponent === 'home' && (
          <div className={`container-fluid ${currentComponent && 'currentSection'}`}>
          <Home games={allGames} />
          </div>
        )}

        {currentComponent === 'categories' && (
          <div className={`container-fluid ${currentComponent && 'currentSection'}`}>
            <Categries games={allGames} />
          </div>
        )}

        {currentComponent === 'library' && (
          <div className={`container-fluid ${currentComponent && 'currentSection'}`}>
          <Library games={library} />
          </div>
        )}

        {currentComponent === 'bag' && (
          <div className={`container-fluid ${currentComponent && 'currentSection'}`}>
          <Cart games={cart} />
          </div>
        )}

        </div>
    </div>
  )
}

export default Main;