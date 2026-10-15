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

function getDishesByCategory(category) {
  return dishes.filter(dish => dish.category === category);
}

function renderDishes(container, list) {
  container.innerHTML = list.map(createCardHTML).join('');
}

function setupContainer(container) {
  const category = container.dataset.category;
  const filtered = getDishesByCategory(category);
  renderDishes(container, filtered);
}

const containers = document.querySelectorAll('.selection');
containers.forEach(setupContainer);


