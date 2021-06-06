import React, { useState } from "react";

function Form() {
  const [dishName, setDishName] = useState("");
  const [preparationTime, setPreparationTime] = useState("12:00:00");
  const [dish, setDish] = useState("");

  const [numberSlices, setNumberSlices] = useState("");
  const [pizzaDiametr, setPizzaDiametr] = useState("");
  const [soupSpiceness, setSoupSpiceness] = useState("");
  const [breadSlices, setBreadSlices] = useState("");

  return (
    <form>
      <input
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
        placeholder="Dish name"
        type="text"
        name="dishName"
        required
      />
      <input
        value={preparationTime}
        onChange={(e) => setPreparationTime(e.target.value)}
        placeholder="Preparation time"
        type="time"
        step="50"
        name="preparationTime"
        required
      />
      <select
        onChange={(e) => setDish(e.target.value)}
        value={dish}
        name="cars"
        id="cars"
        required
      >
        <option value="" selected disabled hidden>
          Choose dish
        </option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
      <div className="optionMenu">
        {dish === "pizza" ? (
          <div>
            <input
              value={numberSlices}
              onChange={(e) => setNumberSlices(e.target.value)}
              placeholder="Number of slices"
              type="number"
              name="numberSlices"
              required
            />
            <input
              value={pizzaDiametr}
              onChange={(e) => setPizzaDiametr(e.target.value)}
              placeholder="Diameter"
              type="number"
              step="0.1"
              name="pizzaDiametr"
              required
            />
          </div>
        ) : (
          ""
        )}
        {dish === "soup" ? (
          <input
            value={soupSpiceness}
            onChange={(e) => setSoupSpiceness(e.target.value)}
            placeholder="Spiceness"
            type="text"
            step="50"
            name="soupSpiceness"
            required
          />
        ) : (
          ""
        )}
        {dish === "sandwich" ? (
          <input
            value={breadSlices}
            onChange={(e) => setBreadSlices(e.target.value)}
            placeholder="Slices of bread"
            type="text"
            step="50"
            name="breadSlices"
            required
          />
        ) : (
          ""
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
