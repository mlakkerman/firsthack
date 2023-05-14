import React from 'react'
import s from './AllAwards.module.scss'
import { CardAwards } from '../../CardAwards/CardAwards';
import SearchableList from '../../SearchList/SearchList';

const AllAwards = (props) => {
    const {data} = props;
    return (
        <div className={s.wrapper}>
            <SearchableList data={data}/>
            <CardAwards data={data}/>
        </div>
    );
}
export default AllAwards;