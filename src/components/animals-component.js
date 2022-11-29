import { animals } from "../Data/animals-data";

const images = [];
for (let animal in animals) {
  images.push(
    <img
      key={animal}
      src={animals[animal].image}
      alt={animal}
      onClick={displayFact}
      className="animals"
      role="button"
    />
  );
}

function displayFact(e) {
  const selectedAnimal = e.target.alt; //Animal name
  const animalInfo = animals[selectedAnimal]; //Object with animal image and facts
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length); // Index Number

  const funFact = animalInfo.facts[optionIndex]; //One indexed fact from facts array
  document.getElementById("fact").innerHTML = funFact;
}

export const AnimalsComponent = () => {
  return (
    <div className="animal-wrapper">
      <h1 className="app-title">Sea Animals Facts!</h1>
      <p id="fact"></p>
      <div>{images}</div>
    </div>
  );
};
