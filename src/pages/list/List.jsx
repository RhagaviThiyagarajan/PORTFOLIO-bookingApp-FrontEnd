import "./List.css";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";

function List() {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, load, error, reFetch } = useFetch(
    `https://booking-app-node.herokuapp.com/api/hotels?city=${destination}&min=${min||0}&max=${max||5000}`);

  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>

              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="listItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="listoptionItem">
                  <span className="listOptionText">
                    Min Price <small>per Night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="listOptionInput"
                  />
                </div>

                <div className="listoptionItem">
                  <span className="listOptionText">
                    Max Price <small>per Night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="listOptionInput"
                  ></input>
                </div>

                <div className="listoptionItem">
                  <span className="listOptionText">
                  Adult
                  </span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.adult}
                    className="listOptionInput"
                  ></input>
                </div>

                <div className="listoptionItem">
                  <span className="listOptionText">
            Children
                  </span>
                  <input
                    type="number"
                    min={0}
                    placeholder={options.children}
                    className="listOptionInput"
                  ></input>{" "}
                </div>

                <div className="listoptionItem">
                  <span className="listOptionText">
                    <small>Room</small>
                  </span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.room}
                    className="listOptionInput"
                  ></input>
                </div>
              </div>
            </div>
            <button onClick={handleClick} className="listSearchButton">
              Search
            </button>
          </div>
          <div className="listResult">
            {load ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
