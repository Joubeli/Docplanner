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
      color: "#1b2734",
    },
  ];

  return (
    <div className="list">
      {clients.map((el) => (
        <div className="card" style={{ backgroundColor: el.color }}>
          <img src={el.image} />
          <h3>{el.title}</h3>
          <p>{el.description}</p>

          {el.country && (
            <select>
              {el.country.map((count) => (
                <option>{count}</option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;
