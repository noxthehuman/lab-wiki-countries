import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CountryDetail from './components/CoutryDetail';
import CountriesList from './components/CountriesList';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState()

  useEffect(()=> {
    const fetchCountries = async ()=> {
      const {data} =  await axios.get('https://ih-countries-api.herokuapp.com/countries')
      setCountries(data)
    }

    fetchCountries()
    
  }, [countries])
  
  
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='countries' element= {<CountriesList /> }> </Route>
          <Route path='/countries/:alpha3Code' element= {<CountryDetail countries={countries} />} > </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
