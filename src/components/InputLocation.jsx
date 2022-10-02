import React from 'react'
import { useState, useEffect } from 'react'

const InputLocation = () => {

    const [search, setSearch] = useState()

    const HandleSubmit = event => {
        event.preventDefault();
        setSearch(event.target.idInputLocation.value)
    }

    console.log(search);

    return (
        <section className="InputLocation">
            <form onSubmit={HandleSubmit}>
                <input id='idInputLocation' type="text" />
                <button>Search</button>
            </form>
        </section>
    )
}

export default InputLocation