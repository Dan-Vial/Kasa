import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.sass'

function Header({ header }) {
  let arrSelectedNav = Array(header.nav.length).fill(false)

  for (const [key, navLink] of header.nav.entries()) {
    if (navLink.href === location.pathname) {
      arrSelectedNav[key] = true
      break;
    }
  }

  const [selectedNav, setSelectedNav] = useState(arrSelectedNav);

  function handleClickSelectedNav(index) {
    const nextSelectedNav = [...selectedNav];
    if (!nextSelectedNav[index]) {
      nextSelectedNav[index] = !nextSelectedNav[index];
      setSelectedNav(nextSelectedNav);
    }
  }

  return (
    <>
      <header className='header'>
        <img className='header-img'
          src={header.logo.src}
          alt={header.logo.alt}
        />
        <nav className='header-nav'>
          {header.nav.map((route, index) =>
            <Link key={index} to={route.href} onClick={() => handleClickSelectedNav(index)} className={`header-nav-a ${selectedNav[index] ? 'header-nav-a__active' : ''}`}>{route.text}</Link>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header
