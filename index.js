const apiUrl = "https://randomuser.me/api/?results=10";

function data(character) {
    const { name, gender, location, email, dob, picture } = character;
    const cardsContainer = document.querySelector('.cards-container');

    // Create card elements
    const title = document.createElement("h5");
    title.textContent = `${name.first} ${name.last}`;

    const characterGender = document.createElement("p");
    characterGender.textContent = `Gender: ${gender}`;

    const characterCountry = document.createElement("p");
    characterCountry.textContent = `Country: ${location.country}`;

    const characterEmail = document.createElement("p");
    characterEmail.textContent = `Email: ${email}`;

    const characterDate = document.createElement("p");
    characterDate.textContent = `Date of Birth: ${dob.date.split('T')[0]}`;

    // Create character image
    const characterPicture = document.createElement('img');
    characterPicture.src = picture.large;
    characterPicture.width = 280;

    // Create card container
    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(title);
    card.appendChild(characterPicture);
    card.appendChild(characterGender);
    card.appendChild(characterCountry);
    card.appendChild(characterEmail);
    card.appendChild(characterDate);

    // Append card to cards container
    cardsContainer.appendChild(card);
}

async function getCharacters() {
    try {
        const response = await fetch(apiUrl);
        const { results } = await response.json();
        results.forEach(data);
        console.log(results);
    } catch (error) {
        console.error("Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.", error);
    }
}

getCharacters();