const IMAGE_URL = "https://placehold.co/200";

let USER = {
    id:3,
    username: "User Name",
    description: "Me gustan los conejos",
    age: "26",
    fav_music: {
        bands: ["Rammstein", "  Interpol", " TOOL", "  Black Sabbath."],
    },
};


//Selectores
const card = document.getElementById("card-container");
const cardImgContainer = document.getElementById("card-img-container");

//Crear elemento img

const imageElement= document.createElement("img");
imageElement.src = IMAGE_URL;
imageElement.alt= "User profile photo";

//Creamos elemento titulo -> card
const cardTitleElement= document.createElement("h3");
cardTitleElement.classList.add("card-title");
const cardAgeElement = document.createElement("p");
const cardDescElement= document.createElement("p");
const cardFavElement= document.createElement("p");

//Poblar
cardTitleElement.textContent= USER.username;
cardAgeElement.textContent= USER.age;
cardDescElement.textContent= USER.description;
cardFavElement.textContent= USER.fav_music.bands;

//Renderizar
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement, cardDescElement, cardFavElement);

