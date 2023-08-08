    async function fetchPokemonData(id) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        try {
          const response = await fetch(url);
          
          if (!response.ok) {
            console.error('Failed to fetch data');
          }
          const data = await response.json();
          return data;

        } catch (error) {
          console.error('An error occured fetching Pokémon data');
        }
      }

 export default fetchPokemonData;
