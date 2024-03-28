$(document).ready(function() {
$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });

 $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        pass;
    }
 
  $input.val(value);
});
  $('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);

  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve cart items from localStorage
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Get the shopping cart element
  var shoppingCart = document.querySelector('.shopping-cart');

  // Loop through each item in the cart
  cartItems.forEach(function(item) {
      // Create a new item element
      var newItem = document.createElement('div');
      newItem.classList.add('item');

      // Construct HTML for the item
      newItem.innerHTML = `
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

      // Append the new item to the shopping cart
      shoppingCart.appendChild(newItem);
  });
});
