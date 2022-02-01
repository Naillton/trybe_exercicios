// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const text = document.querySelector('#jokeContainer');

const fetchJoke = async () => {
  try {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = await fetch(API_URL, myObject);
  return joke.json();
} catch (error) {
    console.log(`erro inesperado: ${error}`);
}
};

const jokersKK = async () => {
    const { joke } = await fetchJoke();
    text.innerHTML = joke;
}

window.onload = () => jokersKK();