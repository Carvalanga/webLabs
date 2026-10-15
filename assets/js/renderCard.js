// 1. Шаблон одной карточки
function createCardHTML(dish) {
  return `
    <article class="dish" data-dish="${dish.keyword}" data-category="${dish.category}">
      <img src="${dish.image}" alt="${dish.name}">
      <p class="price">${dish.price}р</p>
      <h3 class="dishName">${dish.name}</h3>
      <p class="dishData">${dish.count}</p>
      <button class="dishButton" >Добавить</button>
    </article>
  `;
}

// 2. Отфильтровать блюда по категории
function getDishesByCategory(category) {
  return dishes.filter(dish => dish.category === category);
}

// 3. Отрисовать список блюд в контейнер
function renderDishes(container, list) {
  container.innerHTML = list.map(createCardHTML).join('');
}

// 4. Обработать один контейнер
function setupContainer(container) {
  const category = container.dataset.category;
  const filtered = getDishesByCategory(category);
  renderDishes(container, filtered);
}

// 5. Запуск
const containers = document.querySelectorAll('.selection');
containers.forEach(setupContainer);


