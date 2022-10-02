import React from 'react'

const Location = ({ location_info }) => {
    return (
        <main className='Location'>

            <section className="location_render">

                <header className='location_render_tittle'>
                    <h1>{location_info?.name}</h1>
                </header>

                <ul className='location_render_body'>
                    <li className='location_render_body_info'><span>Type: </span>{location_info?.type}</li>
                    <li className='location_render_body_info'><span>Dimension: </span>{location_info?.dimension}</li>
                    <li className='location_render_body_info'><span>Population: </span>{location_info?.residents.length}</li>
                </ul>

            </section>

        </main>
    )
}

export default Location