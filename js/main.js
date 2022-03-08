const products = [
    {id: 1, title: 'Notebook', price: 2000, image: 'img/product.jpg'},
    {id: 2, title: 'Mouse', price: 20, image: 'img/product.jpg'},
    {id: 3, title: 'Keyboard', price: 200, image: 'img/product.jpg'},
    {id: 4, title: 'Gamepad', price: 50, image: 'img/product.jpg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product) => {
    return `<div class="product-item">
                <h3>${product.title}</h3>
                <img src="${product.image}" alt="продукт">
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);