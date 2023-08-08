import pokemonType from "../data.js";

const createPokemonCard = (pokemonData) => {
  const card = document.createElement('div');
  card.classList.add('pokemon-card');

  const mainData = document.createElement('div');
  mainData.classList.add('main-data');

  const name = document.createElement('h2');
  name.innerText = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

  const image = document.createElement('img');
  image.src = pokemonData.sprites.other.dream_world.front_default;
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
  statsList.classList.add('stats-list');

  const statsHeading = document.createElement('h2');
  statsHeading.innerText = 'Stats';

  const experience = document.createElement('h3');
  experience.innerText = `🏆 XP: ${pokemonData.base_experience}`;

  const type = document.createElement('h3');
  for (const typeName in pokemonType) {
    if (typeName === pokemonData.types[0].type.name) {
      type.innerText = `🔖 Type: ${pokemonData.types[0].type.name} ${pokemonType[typeName]}`;
      break; // Exit the loop once the type is found
    }
  }

  const height = document.createElement('h3');
  height.innerText = `📏 Height: ${pokemonData.height}m`;

  const weight = document.createElement('h3');
  weight.innerText = `⚖️ Weight: ${pokemonData.weight}kg`;

  statsList.append(statsHeading, experience, type, height, weight);

  mainData.append(name, image, abilitiesRow);

  card.append(mainData, statsList);
  return card;
};

export default createPokemonCard;
