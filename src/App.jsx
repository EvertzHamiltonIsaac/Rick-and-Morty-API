import './App.css'
import Location from './components/Location';
import ResidentsCard from './components/ResidentsCard';
import useConnectToApi from './Hooks/useConnectToApi';
import getRandomNumber from './js/getRamdonNumber';
import { useState } from 'react'
import FilterList from './components/FilterList';
import axios from 'axios';
import ErrorPage from './components/ErrorPage';
import TopPageIMG from './components/TopPageIMG';

function App() {

  const [search, setSearch] = useState()
  const [dataList, setDataList] = useState()
  //const [error_app, setErrorApp] = useState(false)

  let URL = ``

  if (search) {
    URL = `https://rickandmortyapi.com/api/location/${search}`
  } else {
    const number = getRandomNumber()
    URL = `https://rickandmortyapi.com/api/location/${number}`;
  }

  const { response, error } = useConnectToApi(URL, search)

  const HandleSubmit = event => {
    event.preventDefault();
    setSearch(event.target.idInputLocation.value)
  }

  const HandleChange = event => {

    if (event.target.value === '') {

      setDataList()

    } else {
      const url = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

      axios.get(url)
        .then(res => setDataList(res.data.results))
        .catch(err => console.log(err))
    }
  }

  return (
    <main className="App">

      <TopPageIMG />

      <section className="App_input">

        <section className="InputLocation">
          <form onSubmit={HandleSubmit} className="InputLocation_form">

            <input onChange={HandleChange} id='idInputLocation' type="text" placeholder='Search...' />
            <button id='idButtonLocation'><img src="../img/search-alt-regular-24.png" alt="Search" /></button>

            <FilterList Listdata={dataList} setSearchList={setSearch} />
          </form>

        </section>
      </section>

      {
        error ?

          <ErrorPage />

          :
          <>
            <section className='App_Location'>
              <Location location_info={response} />
            </section>

            <section className='App_residents_card'>
              {
                response?.residents.map(url => (
                  <ResidentsCard
                    key={url}
                    url={url}
                  />
                ))
              }
            </section>
          </>
      }
    </main>
  )
}

export default App
