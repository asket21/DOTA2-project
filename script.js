


let heroes = [];

console.log(heroes.length);
let heroesContainer = document.getElementById("heroesContainer");

// let heroName = "Axe";
// let heroUniverse = "Dota2";

function addHero() {
    
    let nameInput = document.getElementById("heroName");

    let descInput = document.getElementById("description");
    console.log(nameInput.value);
    if (nameInput.value === "" || descInput.value === ""){
        alert("Пустое поле, попробуй снова!")
    
} else {
    let newHero = [nameInput.value, descInput.value];

    heroes.push(newHero);

    displayHeroes();

    nameInput.value = "";
    descInput.value = "";
}

}
// console.log("Goga");

// // let newHeroName = heroNameInput.value;

// // let newDiscription = descriptionInput.value;

// // console.log("Привет")
// let newElement = document.createElement("div");

// let container = document.querySelector("#heroesContainer");

// newElement.innerHTML = `<h3> ${heroName} </h3> <p>${heroUniverse}</p>`;

// container.appendChild(newElement);



function displayHeroes(){
    let heroesContainer = document.getElementById("heroesContainer");
    
    heroesContainer.innerHTML = "";

    for (let i = 0; i < heroes.length; i++) {


        let heroDiv = document.createElement("div");
        heroDiv.className = "card";
        heroDiv.innerHTML = `<img alt="Дота2" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ5EqGS9M-uWz6i8kYOjBKdLpSXrkKSk6QNM-jbWSUnjAa0fMoI-9Jo9UWv4Hhrt7PKl1E8_KhYdxQu-1EEKyXUbalRCjNiUSmVYb7Y3OwGbHb3GCieFJCSGkvxMOMWSIhqWGTQcRRSHSiPgQLQKDXfl03fJ53evbWAIGV2FbKx7UTCAUWvp2MDL9a/s728-rw-ft-e30/dota2.png"><div class=card_info><h3>Имя героя: ${heroes[i][0]}</h3>  <p>Класс: ${heroes[i][1]}</p></div>`;

        heroesContainer.appendChild(heroDiv);
    }

}


document.getElementById("addButton").addEventListener("click", addHero); 
displayHeroes()