import React from 'react'
import './FeaturedProperties.css';

import useFetch from "../../hooks/useFetch";
import Footer from '../footer/Footer';


function FeaturedProperties()
{
      const {data,load,error}=useFetch("https://booking-app-node.herokuapp.com/api/hotels?featured=true&limit=10");
return (
      <div className="fp">
        {load ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
              <div className="fpItem" key={item._id}>
                <img
                  src={item.photos[0]}
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                {item.rating && <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>}
           
              </div>
            ))}
          </>
        )}
     
      </div>
     
    );
  };
  



export default FeaturedProperties