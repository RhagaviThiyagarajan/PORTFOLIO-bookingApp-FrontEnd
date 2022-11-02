import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Featured.css";

function Featured() {
  
 const {data,load,error}=useFetch("https://booking-app-node.herokuapp.com/api/hotels/countByCity?cities=india,russia,switzerland")


  return (
    <div className="featured">
      {load? ("loading please wait") :(
      <>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>India</h1>
          <h3>{data[0]} properties</h3>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>Russia</h1>
          <h3>{data[1]} Properties</h3>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="  alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>switzerland</h1>
          <h3>{data[2]} Properties</h3>
        </div>
      </div></>)}
    </div>
  );
}

export default Featured;
