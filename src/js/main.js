window.onload = function() {
  alert('The is not an actual e-commerce site. This is just a prototype created for skill improving purposeThis site is a demo created solely for testing and improving web development skills. It is not an actual e-commerce site and is not intended for real transactions or purchases. All content is for demonstration purposes only.');
};




// Initialize an empty cart
let cart = [];

// Function to add an item to the cart
function addToCart(productId, productName, productPrice) {
  // Check if the item already exists in the cart
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    // If the item exists, increase its quantity
    existingItem.quantity += 1;
  } else {
    // If the item does not exist, add it to the cart
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1
    });
  }

  // Display a prompt to the user
  alert(`${productName} has been added to your cart!`);
  
  // Update the cart items in the DOM
  updateCartDisplay();
}

// Function to update the cart display in the overlay
function updateCartDisplay() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = ''; // Clear previous items

  // Loop through each item in the cart and display it
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <div class="cart-item-details">
        <img src="https://via.placeholder.com/80" alt="Product Image" class="cart-item-image" />
        <div class="cart-item-info">
          <p class="cart-item-title">${item.name}</p>
          <p class="cart-item-description">Quantity: ${item.quantity}</p>
        </div>
      </div>
      <div class="cart-item-quantity-price">
        <p class="cart-item-price">$${item.price * item.quantity}</p>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Update total price
  updateCartTotal();
}

// Function to calculate and update the total price
function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelector('.cart-total p:nth-child(2)').textContent = `$${total.toFixed(2)}`;
}

// Event listeners for cart button
document.getElementById('cart-btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById('cart-overlay').style.display = 'flex'; // Show the cart overlay
  updateCartDisplay(); // Update cart display when opening the cart
});

// Event listener to close cart when clicking outside the cart container
window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('cart-overlay')) {
    document.getElementById('cart-overlay').style.display = 'none'; // Hide the cart overlay
  }
});

// Close cart button functionality
document.getElementById('close-cart').addEventListener('click', function () {
  document.getElementById('cart-overlay').style.display = 'none'; // Hide the cart overlay
});

// Event listener for clearing the cart
document.querySelector('.clear-cart').addEventListener('click', function () {
  cart = []; // Clear the cart array
  updateCartDisplay(); // Update cart display
  alert('Your cart has been cleared!');
});
