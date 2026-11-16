const dishes = [
    {
        keyword:  'gaspacho',
        name:     'Гаспачо',
        price:    195,
        category: 'soup',
        count:    '350 г',
        image:    'assets/img/soups/gazpacho.jpg',
        kind:     'veg'
    },

    {
        keyword:  'mushroom_soup',
        name:     'Грибной суп',
        price:    200,
        category: 'soup',
        count:    '350 г',
        image:    'assets/img/soups/mushroom_soup.jpg',
        kind:     'veg'
    },

    {
        keyword:  'norwegian_soup',
        name:     'Норвежский суп',
        price:    300,
        category: 'soup',
        count:    '350 г',
        image:    'assets/img/soups/norwegian_soup.jpg',
        kind:     'fish'
    },

    {
        keyword:  'tomyum',
        name:     'Том ям',
        price:    350,
        category: 'soup',
        count:    '350 г',
        image:    'assets/img/soups/tomyum.jpg',
        kind:     'fish'
    },

    {
        keyword:  'chicken',
        name:     'Куриный суп',
        price:    220,
        category: 'soup',
        count:    '350 г',
        image:    'assets/img/soups/chicken.jpg',
        kind:     'meat'
    },

    {
        keyword:  'ramen',
        name:     'Рамен',
        price:    270,
        category: 'soup',
        count:    '350 г',
        image:    'assets/img/soups/ramen.jpg',
        kind:     'meat'
    },

        {
        keyword:  'chickencutletsandmashedpotatoes',
        name:     'Пюре с куриными котлетами',
        price:    250,
        category: 'main',
        count:    '200 г',
        image:    'assets/img/main_course/chickencutletsandmashedpotatoes.jpg',
        kind:     'meat'
    },

        {
        keyword:  'lasagna',
        name:     'Лазанья',
        price:    150,
        category: 'main',
        count:    '210 г',
        image:    'assets/img/main_course/lasagna.jpg',
        kind:     'meat'
    },

    {
        keyword:  'friedpotato',
        name:     'Жареный картофель',
        price:    250,
        category: 'main',
        count:    '300 г',
        image:    'assets/img/main_course/friedpotatoeswithmushrooms1.jpg',
        kind:     'veg'
    },

    {
        keyword:  'pizza',
        name:     'Пицца Маргарита',
        price:    350,
        category: 'main',
        count:    '400 г',
        image:    'assets/img/main_course/pizza.jpg',
        kind:     'veg'
    },

    {
        keyword:  'fishrice',
        name:     'Рыба с рисом',
        price:    350,
        category: 'main',
        count:    '250 г',
        image:    'assets/img/main_course/fishrice.jpg',
        kind:     'fish'
    },

    {
        keyword:  'shrimppasta',
        name:     'Паста с креветками',
        price:    400,
        category: 'main',
        count:    '250 г',
        image:    'assets/img/main_course/shrimppasta.jpg',
        kind:     'fish'
    },

    {
        keyword:  'tunasalad',
        name:     'Салат с тунцом',
        price:    320,
        category: 'salad',
        count:    '200 г',
        image:    'assets/img/salads_starters/tunasalad.jpg',
        kind:     'fish'
    },

    {
        keyword:  'caesar',
        name:     'Цезарь с курицей',
        price:    300,
        category: 'salad',
        count:    '220 г',
        image:    'assets/img/salads_starters/caesar.jpg',
        kind:     'meat'
    },

    {
        keyword:  'caprese',
        name:     'Капрезе',
        price:    260,
        category: 'salad',
        count:    '200 г',
        image:    'assets/img/salads_starters/caprese.jpg',
        kind:     'veg'
    },

    {
        keyword:  'saladwithegg',
        name:     'Салат с яйцом',
        price:    200,
        category: 'salad',
        count:    '200 г',
        image:    'assets/img/salads_starters/saladwithegg.jpg',
        kind:     'veg'
    },

    {
        keyword:  'frenchfries1',
        name:     'Картофель фри',
        price:    150,
        category: 'salad',
        count:    '150 г',
        image:    'assets/img/salads_starters/frenchfries1.jpg',
        kind:     'veg'
    },

    {
        keyword:  'frenchfries2',
        name:     'Картофель фри с соусом',
        price:    170,
        category: 'salad',
        count:    '170 г',
        image:    'assets/img/salads_starters/frenchfries2.jpg',
        kind:     'veg'
    },

    {
        keyword:  'applejuice',
        name:     'Яблочный сок',
        price:    100,
        category: 'drink',
        count:    '300 мл',
        image:    'assets/img/beverages/applejuice.jpg',
        kind:     'cold'
    },

    {
        keyword:  'orangejuice',
        name:     'Апельсиновый сок',
        price:    100,
        category: 'drink',
        count:    '300 мл',
        image:    'assets/img/beverages/orangejuice.jpg',
        kind:     'cold'
    },

    {
        keyword:  'carrotjuice',
        name:     'Морковный сок',
        price:    100,
        category: 'drink',
        count:    '300 мл',
        image:    'assets/img/beverages/carrotjuice.jpg',
        kind:     'cold'
    },

    {
        keyword:  'tea',
        name:     'Черный чай',
        price:    90,
        category: 'drink',
        count:    '300 мл',
        image:    'assets/img/beverages/tea.jpg',
        kind:     'hot'
    },

    {
        keyword:  'greentea',
        name:     'Зеленый чай',
        price:    90,
        category: 'drink',
        count:    '300 мл',
        image:    'assets/img/beverages/greentea.jpg',
        kind:     'hot'
    },

    {
        keyword:  'cappuccino',
        name:     'Капучино',
        price:    150,
        category: 'drink',
        count:    '250 мл',
        image:    'assets/img/beverages/cappuccino.jpg',
        kind:     'hot'
    },

    {
        keyword:  'baklava',
        name:     'Пахлава',
        price:    120,
        category: 'dessert',
        count:    '100 г',
        image:    'assets/img/desserts/baklava.jpg',
        kind:     'small'
    },

    {
        keyword:  'donuts',
        name:     'Пончики',
        price:    90,
        category: 'dessert',
        count:    '80 г',
        image:    'assets/img/desserts/donuts.jpg',
        kind:     'small'
    },

    {
        keyword:  'donuts2',
        name:     'Пончики с глазурью',
        price:    100,
        category: 'dessert',
        count:    '80 г',
        image:    'assets/img/desserts/donuts2.jpg',
        kind:     'small'
    },

    {
        keyword:  'checheesecake',
        name:     'Чизкейк',
        price:    220,
        category: 'dessert',
        count:    '120 г',
        image:    'assets/img/desserts/checheesecake.jpg',
        kind:     'medium'
    },

    {
        keyword:  'chocolatecheesecake',
        name:     'Шоколадный чизкейк',
        price:    240,
        category: 'dessert',
        count:    '120 г',
        image:    'assets/img/desserts/chocolatecheesecake.jpg',
        kind:     'medium'
    },

    {
        keyword:  'chocolatecake',
        name:     'Шоколадный торт',
        price:    350,
        category: 'dessert',
        count:    '250 г',
        image:    'assets/img/desserts/chocolatecake.jpg',
        kind:     'large'
    },
]
