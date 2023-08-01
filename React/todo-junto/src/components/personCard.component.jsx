import React from "react";
import { useState } from "react";


const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  const [currentAge, setCurrentAge] = useState(age);

  const increaseAge = () => {
    setCurrentAge(currentAge + 1);
  }

  return (
    <div>
      <h2>{lastName}, {firstName}</h2> 
      <p>Age: {currentAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={increaseAge}>Cumpleaños</button>
    </div>
  );
};

export default PersonCard;