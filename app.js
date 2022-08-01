function start () {
//NAME    
    const pokemonName = "Lugia"
    const pokemonNameMessage = "Pokemon Name: " + pokemonName;
    document.getElementById("name").innerHTML = pokemonNameMessage

//IMAGE

    const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
    document.getElementById("image").src = imageURL;
}
