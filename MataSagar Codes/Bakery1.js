document.addEventListener('DOMContentLoaded', () => {
    const specialsContent = document.getElementById('specials-content');
    const productContent = document.getElementById('product-content');
    
    
    const dailySpecials = [

        { day: 'Monday', item: 'Croissant', product: { title: 'Hot Croissant', description: 'Known for their distinctive crescent shape and light, layered texture, they are a beloved breakfast or snack item..', price: '&#8377;90.00', image: '/Users/prahladprakashz/Desktop/MataSagar/Daily Specials/croissant.jpg' }},
        { day: 'Tuesday', item: 'Donuts', product: { title: 'Donuts', description: 'Donuts are a sweet, fried pastry with a delightful combination of flavors and textures.', price: '&#8377;150.00', image:'/Users/prahladprakashz/Desktop/MataSagar/Daily Specials/Donut.jpg' }},
        { day: 'Wednesday', item: 'Cup Cake', product: { title: 'Red Vine Cup Cake', description: 'These mini cakes are versatile, easy to make, and perfect for any occasion.', price: '&#8377;220.00', image: '/Users/prahladprakashz/Desktop/MataSagar/Daily Specials/Red vine cup cake.jpg' }},
        { day: 'Thursday', item: 'Choco chip Cookies', product: { title: 'Choco Chip Cookies', description: 'From chocolate chip to oatmeal raisin, cookies are a versatile and timeless treat.', price: '&#8377;290.00', image:'/Users/prahladprakashz/Desktop/MataSagar/Daily Specials/Choco chip cookies.jpg' }},
        { day: 'Friday', item: 'Cheese Sandwich', product: { title: 'Grilled Cheese Sandwich', description: 'A Sandwich is a versatile and convenient meal made by placing filling between slices of bread.', price: '&#8377;350.00', image:'/Users/prahladprakashz/Desktop/MataSagar/Daily Specials/Grilled cheese sandwich.jpg' }},
        { day: 'Saturday', item: 'Chocolate swiss Roll', product: { title: 'Chocolate Swiss Roll', description: ' It is perfect for special occasions or as a delightful treat with tea or coffee.', price: '&#8377;150.00', image:'/Users/prahladprakashz/Desktop/MataSagar/Daily Specials/Chocolate swiss roll.jpg'}},
        { day: 'Sunday', item: 'Paneer Puff', product: { title: 'Special Paneer Puff', description: 'They can be sweet or savory and are perfect for a wide variety of dishes and desserts.', price: '&#8377;80.00', image:'/Users/prahladprakashz/Desktop/MataSagar/Daily Specials/Special paneer puff.jpg' }},

         ];

   
    const today = new Date().getDay();
    const special = dailySpecials[today - 1] || dailySpecials[6]; 

  
     specialsContent.innerHTML = `<p><strong>${special.day} Special:</strong> ${special.item}</p>`;

   
    const product = special.product;
    productContent.innerHTML = `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h1 class="product-title">${product.title}</h1>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
});