
// document.addEventListener('DOMContentLoaded', function() {
//     // Retrieve cart items from localStorage
//     var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
//     // Get the shopping cart element
//     var shoppingCart = document.querySelector('.shopping-cart');
  
//     // Loop through each item in the cart
//     cartItems.forEach(function(item) {
//         // Create a new item element
//         var newItem = document.createElement('div');
//         newItem.classList.add('item');
  
//         // Construct HTML for the item
//         newItem.innerHTML = `
//             <div class="buttons">
//                 <span class="delete-btn"></span>
//                 <span class="like-btn"></span>
//             </div>
//             <div class="image">
//                 <img src="${item.image}" alt=""/>
//             </div>
//             <div class="description">
//                 <span>${item.name}</span>
//                 <!-- You can add more details here if needed -->
//             </div>
//             <div class="unit-price">$${item.price}</div>
//             <div class="quantity">
//                 <button class="plus-btn" type="button" name="button">
//                     <img src="../../static/assets/images/plus.svg" alt=""/>
//                 </button>
//                 <input type="text" name="name" value="${item.quantity}">
//                 <button class="minus-btn" type="button" name="button">
//                     <img src="../../static/assets/images/minus.svg" alt=""/>
//                 </button>
//             </div>
//             <div class="total-price">$${item.price * item.quantity}</div>
//         `;
  
//         // Append the new item to the shopping cart
//         shoppingCart.appendChild(newItem);
//     });
//   });
  
  
//   // Add event listener to clear cart button
//   document.getElementById('clear-cart').addEventListener('click', function() {
//       // Clear the cart in localStorage
//       localStorage.removeItem('cart');
      
//       // Optionally, you can provide some feedback to the user (e.g., an alert or a notification)
//       alert('Cart cleared!');
//   });

  
// $(document).ready(function() {
//     $('.like-btn').on('click', function() {
//         $(this).toggleClass('is-active');
//     });

// // Add event listeners to the plus buttons
// const plusButtons = document.querySelectorAll('.plus-btn');
// plusButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const parent = button.parentElement;
//         const input = parent.querySelector('input');
//         const quantity = parseInt(input.value);
//         input.value = quantity + 1;
//         updateTotalPrice(parent);
//         updateLocalStorage(parent, input.value); // Update localStorage
//     });
// });

// // Add event listeners to the minus buttons
// const minusButtons = document.querySelectorAll('.minus-btn');
// minusButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const parent = button.parentElement;
//         const input = parent.querySelector('input');
//         const quantity = parseInt(input.value);
//         if (quantity > 1) {
//             input.value = quantity - 1;
//             updateTotalPrice(parent);
//             updateLocalStorage(parent, input.value); // Update localStorage
//         }
//     });
// });

// // Function to update total price
// function updateTotalPrice(parent) {
//     const unitPrice = parseFloat(parent.parentElement.querySelector('.unit-price').textContent.replace('$', ''));
//     const quantity = parseInt(parent.querySelector('input').value);
//     const totalPrice = unitPrice * quantity;
//     parent.parentElement.querySelector('.total-price').textContent = `$${totalPrice.toFixed(2)}`;
// }

// // You can add event listeners for delete and like buttons here as well if needed
// function updateLocalStorage(parent, quantity) {
//     const itemIndex = Array.from(parent.parentElement.children).indexOf(parent.parentElement.querySelector('.item'));
//     var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     if (cartItems.length > itemIndex) {
//         cartItems[itemIndex].quantity = parseInt(quantity);
//         localStorage.setItem('cart', JSON.stringify(cartItems));
//     }
// }

// });


let listProductHTML = document.querySelector('.products');
let listCartHTML = document.querySelector('.shoppingCart');
let iconCartSpan = document.querySelector('.icons span')
let carts = []

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('add-to-cart')) {
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id)
    }

})

const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if (carts.length <= 0) {
        carts = [{
        product_id: product_id,
        quantity: 1
        }]
    } else if (positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });

    } else {
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1
    }
    addCartToHTML();
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = ""
    if (carts.length > 0) {
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newItem.classList.add('item');
            newCart.innerHTML = `
            <div class="buttons">
                <span class="delete-btn"></span>
                <span class="like-btn"></span>
            </div>
            <div class="image">
                <img src="${item.image}" alt=""/>
            </div>
            <div class="description">
                <span>${item.name}</span>
                <!-- You can add more details here if needed -->
            </div>
            <div class="unit-price">$${item.price}</div>
            <div class="quantity">
                <button class="plus-btn" type="button" name="button">
                    <img src="../../static/assets/images/plus.svg" alt=""/>
                </button>
                <input type="text" name="name" value="${item.quantity}">
                <button class="minus-btn" type="button" name="button">
                    <img src="../../static/assets/images/minus.svg" alt=""/>
                </button>
            </div>
            <div class="total-price">$${item.price * item.quantity}</div>
        `;
        listCartHTML.appendChild(newCart);
        })
    }
}