const API_URL = 'https://amd.dedyn.io:15243/labs/api/dishes';

let dishes = [];

async function loadDishes() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`Ошибка загрузки блюд: ${response.status}`);
    }

    dishes = await response.json();
}
