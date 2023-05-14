import React from "react";
import { NavLink } from "react-router-dom";
import s from './CardAwards.module.scss'

export const CardAwards = (props) => {
    const {data} = props;
    return (
        <div className={s.wrapper}>
            {data.map((el) => (<NavLink to={`/award/${el.id}`} className={s.wrapcard} key={el.id}>
                <img src={el.imgAward} />
                <div>{el.nameAward}</div>
            </NavLink>))}
        </div>
    )
}
