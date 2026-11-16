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

loadDishes()
  .then(() => containers.forEach(setupContainer))
  .catch(error => console.error(error));

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('filterButton')) return;

  const button    = event.target;
  const filters   = button.closest('.filters');
  const category  = filters.dataset.category;
  const container = document.querySelector(`.selection[data-category="${category}"]`);
  const wasActive = button.classList.contains('active');

  filters.querySelectorAll('.filterButton').forEach(b => b.classList.remove('active'));

  if (wasActive) {
    renderDishes(container, getDishesByCategory(category));
    return;
  }

  button.classList.add('active');

  const filtered = getDishesByCategory(category).filter(dish => dish.kind === button.dataset.kind);
  renderDishes(container, filtered);
});

