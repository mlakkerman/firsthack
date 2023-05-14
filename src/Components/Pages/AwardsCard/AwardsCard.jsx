import React from 'react'
import s from './AwardsCard.module.scss'
import { useParams } from 'react-router-dom';

const AwardsCard = (props) => {
    const { id } = useParams();
    const { data } = props;
    const award = data.find((el) => el.id === parseInt(id));

    return (
        <div className={s.wrapper}>
            <div>
                <img src={award.imgAward} alt={award.nameAward} />
                <div className={s.title}>{award.nameAward}</div>
                <div className={s.description}>Award {award.id}</div>
            </div>
        </div>
    );
}

export default AwardsCard;