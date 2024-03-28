// Add event listener to all "ADD TO CART" buttons
document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', function(event) {
        // Find the closest container with the class "row"
        var container = event.target.closest('.row');

        // Find the product details within the container
        var productName = container.querySelector('.price h4').textContent;
        var price = container.querySelector('.price p').textContent;
        var imageURL = container.querySelector('img').getAttribute('src');

        // Construct the item object
        var item = {
            name: productName,
            price: parseFloat(price.replace('$', '')), // Remove '$' sign and convert to float
            quantity: 1, // Assuming you always add one item at a time
            image: imageURL // Add the image URL to the item object
        };

        // Check if cart exists in localStorage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the item is already in the cart
        var existingItemIndex = cart.findIndex(function (cartItem) {
            return cartItem.name === item.name;
        });

        // If item already exists, increase quantity
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            // Otherwise, add the item to the cart
            cart.push(item);
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Optionally, you can provide some feedback to the user (e.g., an alert or a notification)
        alert('Item added to cart!');
    });
});
