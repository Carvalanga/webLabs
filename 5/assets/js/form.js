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
  document.getElementById('input-soup').value    = order.soup    ? order.soup.keyword    : '';
  document.getElementById('input-main').value    = order.main    ? order.main.keyword    : '';
  document.getElementById('input-salad').value   = order.salad   ? order.salad.keyword   : '';
  document.getElementById('input-drink').value   = order.drink   ? order.drink.keyword   : '';
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

document.querySelector('form').addEventListener('submit', (e) => {
  if (!order.soup || !order.main || !order.drink) {
    e.preventDefault();

    const missing = [];
    if (!order.soup)  missing.push('суп');
    if (!order.main)  missing.push('главное блюдо');
    if (!order.drink) missing.push('напиток');

    alert('Выберите: ' + missing.join(', '));
    return;
  }
});
