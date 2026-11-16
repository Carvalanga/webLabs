const order = {
    soup:    null,
    main:    null,
    salad:   null,
    drink:   null,
    dessert: null
};

const titles = {
  soup:    'Суп',
  main:    'Главное блюдо',
  salad:   'Салат или стартер',
  drink:   'Напиток',
  dessert: 'Десерт',
};

function isOrderEmpty() {
  return Object.values(order).every(dish => !dish);
}

function updateOrder() {
  const box = document.getElementById('orderList');

  if (isOrderEmpty()) {
    box.innerHTML = 'Ничего не выбрано';
    return;
  }

  box.innerHTML = Object.keys(order).map(category => {
    const dish = order[category];

    if (!dish) {
      return `<p>${titles[category]}: <i>Блюдо не выбрано</i></p>`;
    }

    return `<p>${titles[category]}: ${dish.name} — ${dish.price}р</p>`;
  }).join('');
}

function setTotalPrice() {
    totalBox = document.getElementById("totalPrice");
    if (isOrderEmpty())
        return;

    let total = 0;
    Object.values(order).forEach(dish => {
        if (dish) total += dish.price;
    });

    totalBox.innerHTML = `Итоговая стоимость заказа ${total}р`;

    return total;
}

function syncHiddenInputs() {
  document.getElementById('input-soup').value  = order.soup  ? order.soup.keyword  : '';
  document.getElementById('input-main').value  = order.main  ? order.main.keyword  : '';
  document.getElementById('input-salad').value = order.salad ? order.salad.keyword : '';
  document.getElementById('input-drink').value = order.drink ? order.drink.keyword : '';
  document.getElementById('input-dessert').value = order.dessert ? order.dessert.keyword : '';

    const total = setTotalPrice();

    document.getElementById('input-total').value = total;
}

document.addEventListener('click', (event) => {
    if(!event.target.classList.contains('dishButton')) return;

    const card     = event.target.closest(".dish")
    const keyword  = card.dataset.dish;
    const category = card.dataset.category;

    const dish = dishes.find(d => d.keyword === keyword);

    order[category] = dish;

    updateOrder();
    syncHiddenInputs();
});

function getOrderError() {
  if (isOrderEmpty())
    return 'Ничего не выбрано. Выберите блюда для заказа';

  const hasFood = order.main || (order.soup && order.salad);

  if (hasFood)
    return order.drink ? null : 'Выберите напиток';

  if (order.soup)
    return 'Выберите главное блюдо/салат/стартер';

  if (order.salad)
    return 'Выберите суп или главное блюдо';

  return 'Выберите главное блюдо';
}

function showNotification(text) {
  const overlay = document.createElement('div');
  overlay.className = 'notification';

  overlay.innerHTML = `
    <div class="notificationBox">
      <p>${text}</p>
      <button type="button" class="notificationButton">Окей</button>
    </div>
  `;

  document.body.append(overlay);
}

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('notificationButton')) return;

  event.target.closest('.notification').remove();
});

document.querySelector('form').addEventListener('submit', (e) => {
  const error = getOrderError();

  if (error) {
    e.preventDefault();
    showNotification(error);
  }
});
