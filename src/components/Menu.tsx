import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Menu() {
    const activeLink = ({ isActive }: { isActive: boolean }) =>
        (isActive ? 'menu__item menu__item-active' : 'menu__item');

    return (
        <div className='page'>
            <nav className='menu'>
                <NavLink className={activeLink} to='/'>Главная</NavLink>
                <NavLink className={activeLink} to='/drift'>Дрифт-такси</NavLink>
                <NavLink className={activeLink} to='/timeattack'>Time Attack</NavLink>
                <NavLink className={activeLink} to='/forza'>Forza Karting</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
