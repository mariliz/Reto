# Reto
random user



**Estructura de Proyecto**
index.html
index.js
styles.css

**Cada tarjeta incluye:**
Nombre completo
Género
País
Correo electrónico
Fecha de nacimiento
Foto de perfil

**API**: const apiUrl = "https://randomuser.me/api/?results=10"

**Código Principal**

Index.js
const apiUrl = "https://randomuser.me/api/?results=10";

async function getCharacters() {
    try {
        const response = await fetch(apiUrl);
        const { results } = await response.json();
        results.forEach(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getCharacters();
