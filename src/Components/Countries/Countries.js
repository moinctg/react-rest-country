
import './Countries.css';
import React from 'react';

const Countries = (props) => {
    const { flag, name, capital,region} = props;
    console.log(props)
    return (
        <div className="counntry">
            {/* <h3>This is stored singel country</h3> */}
               <h2>  <img src={ flag } alt=""/> </h2>
                  <h1> Name: { name } </h1>
                 <h5> Capital: { capital }</h5> 
                 <h5> region: { region }</h5> 
         
            

        </div>
    );
};

export default Countries;