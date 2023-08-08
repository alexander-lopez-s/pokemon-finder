const createPokemonCard = (pokemonData) => {
  const card = document.createElement('div');
  card.classList.add('pokemon-card');

  const mainData = document.createElement('div');
  mainData.classList.add('main-data');

  const name = document.createElement('h2');
  name.innerText = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

  const image = document.createElement('img');
  image.src = pokemonData.sprites.front_default;
  image.alt = pokemonData.name;

  const abilities = document.createElement('div');
  abilities.classList.add('abilities');

  const abilitiesHeading = document.createElement('h2');
  abilitiesHeading.innerText = 'Abilities';

  const abilitiesList = document.createElement('div');
  abilitiesList.classList.add('abilities-list');

  // Loop through abilities
  for (const ability of pokemonData.abilities) {
      const abilityName = document.createElement('h3');
      abilityName.innerText = `✔ ${ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}`;
      abilitiesList.append(abilityName);
  }

  abilities.append(abilitiesHeading, abilitiesList);

  const abilitiesRow = document.createElement('div');
  abilitiesRow.classList.add('abilities-row');
  abilitiesRow.append(abilities);

  

  const statsList = document.createElement('div');
  statsList.classList.add('stats-list'); // Added class for styling

  const statsHeading = document.createElement('h2'); // Added Stats heading
  statsHeading.innerText = 'Stats';

  const experience = document.createElement('h3'); // Changed from h2 to h3
  experience.innerText = `Experience: ${pokemonData.base_experience}`;

  const type = document.createElement('h3'); // Changed from h2 to h3
  type.innerText = `Type: ${pokemonData.types[0].type.name}`;

  const height = document.createElement('h3'); // Changed from h2 to h3
  height.innerText = `Height: ${pokemonData.height}`;

  const weight = document.createElement('h3'); // Changed from h2 to h3
  weight.innerText = `Weight: ${pokemonData.weight}`;

  statsList.append(statsHeading, experience, type, height, weight);

  mainData.append(name, image, abilitiesRow); // Moved abilitiesRow here

  card.append(mainData, statsList); // Moved statsHeading and statsList here
  return card;
}

export default createPokemonCard;
