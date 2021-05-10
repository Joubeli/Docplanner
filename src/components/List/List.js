import React from "react";
import "./List.css";

const List = () => {
  let clients = [
    {
      image: "https://www.docplanner.com/icons/icon-patients.svg",
      title: "For patients",
      description:
        "Find a doctor, book a visit and solve any health-related doubt",
      country: ["Tunis", "France", "Italy"],
      color: "#00ccb1",
    },
    {
      image: "https://www.docplanner.com/icons/icon-doctors.svg",
      title: "For doctors",
      description: "Save time managing visits and cut no-shows by half",
      country: ["Tunis", "France", "Italy"],
      color: "#3d83df",
    },
    {
      image: "https://www.docplanner.com/icons/icon-clinics.svg",
      title: "For clinics",
      description: "Deliver an exceptional patient experience in your clinic",
      country: ["Tunis", "France", "Italy"],
      specialist: ["Tunis", "France", "Italy"],
      color: "#1b2734",
    },
  ];

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
