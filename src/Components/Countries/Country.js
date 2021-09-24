import React ,{useState,useEffect} from 'react'
import Countries from './Countries';
import './Country.css';
// import React from 'react';

const Country = () => {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR3_WjvVXytWMkjvC_MDSjggOfhYkcfMOmjuFH4t0zKUex70LGwBOE1dR7M')
        .then(res=>res.json())
        .then(data=>setCountries(data))
        // .then(data=>console.log(data))

    }
        , [])
    return (
        <div>
            <h3>Rest Country API:{countries.length}</h3>
            <div className="container-country">
            {
                countries.map(country=><Countries

                 name={country.name} 
                 capital={country.capital}
                 region={country.region}
                 flag={country.flag} 
                >
                </Countries>)
            }
            </div>
            
        </div>
    );
};

export default Country;