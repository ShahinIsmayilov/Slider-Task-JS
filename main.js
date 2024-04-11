function getProducts() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
}

function createSlider(products) {
    var slider = document.getElementById('slider');

    products.forEach(function(product) {
        var slide = document.createElement('div');
        var image = document.createElement('img');
        var name = document.createElement('p');

        image.src = product.image;
        name.textContent = product.title;

        slide.appendChild(image);
        slide.appendChild(name);
        slider.appendChild(slide);
    });
    $('.slider').slick();
}
getProducts().then(createSlider);
