import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.scss'

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
            <img src="/logo.png" alt="logo"/>
                <div className={s.menu}>
                    <NavLink to='/'>Главная</NavLink>       
                    <NavLink to='https://tavolga.center/#b6793'>Контакты</NavLink>
                    <NavLink to='/allawards'>Награды</NavLink>
                </div>
            </div>
        </div>
    )
}