import React from "react";
import "./List.css";

const List = ({clients}) => {
  return (
    <div className="list">
      {clients.map((el) => (

        <div className="card" style={{ backgroundColor: el.color }}>
          <img className="image" src={el.image} />
          <h3>{el.title}</h3>
          <p>{el.description}</p>

          {el.country && (
            <select>
              {el.country.map((count) => (
                <option>{count}</option>
              ))}
            </select>
          )}

          {  el.specialist && (
            <select>
              {el.specialist.map((count2) => (

                <option>{count2}</option>
              ))}

            </select>
          )}
        </div>

      ))}


    </div>
  );
};

export default List;
