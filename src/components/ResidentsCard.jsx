import React from 'react'
import useConnectToApi from '../Hooks/useConnectToApi';
import colorStatus from '../js/colorStatus';
import ErrorPage from './ErrorPage';


const ResidentsCard = ({ url }) => {

    const { response } = useConnectToApi(url);
    const { dead, alive, unknown } = colorStatus

    return (
        <main className='ResidentsCard'>
            {
                <section className="resident">

                    <article className="resident_img">
                        <img src={response?.image} alt={response?.name} />
                    </article>

                    <article className="resident_info">

                        <h3>{response?.name}</h3>

                        <div className='resident_info_status'>
                            <div className="circle"
                                style={response?.status === 'Alive' ? alive : response?.status === 'Dead' ? dead : unknown}></div>

                            <h4>{response?.status} - {response?.species}</h4>
                        </div>

                        <ul className='resident_info_details'>
                            <li className='resident_info_details_li'><span>Origin:</span> {response?.origin.name}</li>
                            <li className='resident_info_details_li'><span>Episodes: </span>{response?.episode.length}</li>
                        </ul>

                    </article>

                </section>
            }
        </main>
    )
}

export default ResidentsCard