import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useFetch from "../hooks/useFetch";
import "./Reserve.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";
export default function Reserve({ setOpen, hotelId }) {
  const { data, load, error } = useFetch(`hotels/room/${hotelId}`);
  const { date } = useContext(SearchContext);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    var dates = new Date(start.getTime());

    var date = [];

    while (dates <= end) {
      date.push(new Date(dates).getTime());
      dates.setDate(dates.getDate() + 1);
    }

    return date;
  };

  const alldates = getDatesInRange(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`https://booking-app-node.herokuapp.com/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="reserveContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="resultItem" key={item._id}>
            <div className="resultItemInfo">
              <div className="resultTitle">{item.title}</div>
              <div className="resultDesc">{item.desc}</div>
              <div className="resultMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="resultPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};
