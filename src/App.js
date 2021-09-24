
import './App.css';
import Country from './Components/Countries/Country.js';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Countries from './Components/Countries/Countries';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Country></Country>
      <Countries></Countries>

      <Footer></Footer>
     
      
    </div>
  );
}







// function RestApi(){
//   const [api,setApi] = useState([]);
//   useEffect(()=>{
//     fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR3_WjvVXytWMkjvC_MDSjggOfhYkcfMOmjuFH4t0zKUex70LGwBOE1dR7M')
//     .then(res=>res.json())
//     .then(data => setApi(data))
//   }
//     ,[])

//   return(
//     <div>
//       <h2>Rest API</h2>
//       <h2>Rest Countries: {api.length}</h2>
//       {
//         api.map(country=> <Country name={country.name} capital={country.capital} region={country.region} flag={country.flag}></Country>)
//       }
//       </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2> Country Name:{props.name}</h2>
//       <h2> Capital Name:{props.capital}</h2>
//       <h2> Region Name:{props.name}</h2>
//       <h2> Country Image:{props.flag}</h2>
//     </div>
//   )
// }


export default App;
