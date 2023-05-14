import React, { useState } from 'react'
import s from "./SearchList.module.scss"
import { NavLink } from 'react-router-dom'

const SearchableList = ({ data }) => {
    const [query, setQuery] = useState('')
    const filteredData = data.filter((item) =>
        item.nameAward.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className={s.searchcontainer}>
            <input className={s.search} type="text" value={query} placeholder="Введите название награды для поиска..."onChange={(e) => setQuery(e.target.value)} />
            {query !== '' && filteredData.length > 0 ?(
            <div>
                {filteredData.map(({ id, nameAward }) => (
                    <NavLink className={s.searchresult} to={`/award/${id}`}>{nameAward}</NavLink>
                ))}
            </div>): null}
        </div>
    )
}
export default SearchableList