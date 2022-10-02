import React from 'react'

const FilterList = ({ Listdata, setSearchList }) => {

    const handleClick = id => setSearchList(id)

    return (
        <main className='List'>
            <ul className='List_filter'>
                {
                    Listdata?.map(location => (
                        <li onClick={() => handleClick(location.id)} key={location.id} className='List_filter_li'>{location.name}</li>
                    ))
                }
            </ul>
        </main>
    )
}

export default FilterList