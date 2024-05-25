const pokemonName = document.getElementById('nome');
const pokemonNumber = document.getElementById('number');
const pokemonHab = document.getElementById('habilidades')

const statisticsHp = document.querySelector('.hp');
const statisticsAtk = document.querySelector('.atk');
const statisticsDef = document.querySelector('.def');
const statisticsSatk = document.querySelector('.satk');
const statisticsSdef = document.querySelector('.sdef');
const statisticsSpd = document.querySelector('.spd');

const pokemonImage = document.getElementById('image');

const altura = document.querySelector('.altura span');
const peso = document.querySelector('.peso span');
const pokemonType = document.querySelector('.tipo span');

const search = document.getElementById('input-pesquisar');
const btnPesquisar = document.getElementById('pesquisar');

const btnPrev = document.getElementById('prev');
const btnProx = document.getElementById('prox');

let idPokemon = 1;

// async function fetchPokemon(id) {
//     await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(response => {
//             if (response.status === 200) {
//                 console.log(response);
//                 return response.json();
//             }
//         })
//         .catch(error => {
//             alert("Erro em buscar o pokemon")
//             console.log(error)
//         });
// }

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
};

async function renderPokemon(pokemon) {
    pokemonName.innerHTML = "Loading...";

    altura.innerHTML = "Loading...";
    peso.innerHTML = "Loading...";
    pokemonType.innerHTML = "Loading...";
    pokemonNumber.innerHTML = " - 0";

    const data = await fetchPokemon(pokemon)
    if (data) {
        const hpPokemon = data.stats[0].base_stat
        const atkPokemon = data.stats[1].base_stat
        const defPokemon = data.stats[2].base_stat
        const satkPokemon = data.stats[3].base_stat
        const sdefPokemon = data.stats[4].base_stat
        const spdPokemon = data.stats[5].base_stat

        pokemonImage.style.display = "block";
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = ` - ${data.id}`;
        if (pokemon >= 650) {
            pokemonImage.src = data["sprites"]["front_default"];
            pokemonImage.style.width = "150px"
            pokemonImage.style.height = "150px"
        } else {
            pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
        }
        pokemonHab.innerHTML = data.abilities.map((ability) => `<li class="hab">${ability.ability.name}</li>`).join('');

        statisticsHp.querySelector('span').innerHTML = hpPokemon
        statisticsHp.querySelector('progress').value = hpPokemon

        statisticsAtk.querySelector('span').innerHTML = atkPokemon
        statisticsAtk.querySelector('progress').value = atkPokemon

        statisticsDef.querySelector('span').innerHTML = defPokemon
        statisticsDef.querySelector('progress').value = defPokemon

        statisticsSatk.querySelector('span').innerHTML = satkPokemon
        statisticsSatk.querySelector('progress').value = satkPokemon

        statisticsSdef.querySelector('span').innerHTML = sdefPokemon
        statisticsSdef.querySelector('progress').value = sdefPokemon

        statisticsSpd.querySelector('span').innerHTML = spdPokemon
        statisticsSpd.querySelector('progress').value = spdPokemon

        peso.innerHTML = `${data.weight / 10}kg`
        altura.innerHTML = `${data.height / 10}m`
        pokemonType.innerHTML = data.types.map((type) => type.type.name).join(', ');


        search.value = "";
        idPokemon = data.id;
    }
    else {
        pokemonImage.style.display = "none";
        pokemonName.innerHTML = "Não encontrado";
        pokemonNumber.innerHTML = "- 0";
    }
}

btnPesquisar.addEventListener('click', (event) => {
    event.preventDefault();
    if (search.value === "") {
        return
    }
    renderPokemon(search.value.toLowerCase());
})

btnPrev.addEventListener('click', () => {
    if (idPokemon > 1) {
        idPokemon -= 1;
        renderPokemon(idPokemon);
    }
});

btnProx.addEventListener('click', () => {
    if (idPokemon < 1025) {
        idPokemon += 1;
        renderPokemon(idPokemon);
    }
});

renderPokemon(idPokemon)