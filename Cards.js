const IMAGE_URL = "https://placehold.co/200";

function creatUSERn(user) {
   //card
    const card= document.createElement("div")
    card.classList.add("card-container");
    //img
    const cardImgContainer= document.createElement("div");
    cardImgContainer.classList.add("card-img-container");

    const imageElement= document.createElement("img");
    imageElement.src= IMAGE_URL; 
    imageElement.alt="User profile photo";

    //title
    const cardTitleElement= document.createElement("h3");
    cardTitleElement.classList.add("card-title");

    //info users
    const cardAgeElement= document.createElement("p");
    const cardDescElement= document.createElement("p");
    const cardFavElement= document.createElement("p");

    //poblar
    imageElement.src = IMAGE_URL;
    cardTitleElement.textContent = user.username;
    cardAgeElement.textContent = `Age: ${user.age}`;
    cardDescElement.textContent = `Description: ${user.description}`;
    cardFavElement.textContent = `Favorite Bands: ${user.fav_music.bands.join(", ")}`;
    
    //renderizar
    cardImgContainer.appendChild(imageElement);
    card.append(cardImgContainer, cardTitleElement, cardAgeElement, cardDescElement, cardFavElement);
    
    return card;
};
    const users = [
        {
            id: 1,
            username: "User 1 ",
            description: "lorem ipsum",
            age: "46",
            fav_music: {
                bands: [
                    "Band 1", "Band 2", "Band 3", "Band 4" ]
            }
        },
        {
            id: 2,
            username: "User LastName",
            description: "Lorem lorem lorem",
            age: "23",
            fav_music: {
                bands: [ "Band 1", "Band 2", "Band 3", "Band 4"]
            }
        }
    ];
    const cardContainer = document.getElementById("card-container");
    users. forEach(user => {
        const userScard = creatUSERn(user);
        cardContainer.appendChild(userScard)
    });



