let checkedPoducts = document.querySelector("#checkedPoducts");

// Retrieve items from local storage
let phones = localStorage.getItem('items');

// Check if there are items in local storage
let strObj = phones ? JSON.parse(phones) : [];

console.log(strObj);

// Function to render the products based on the current state in local storage
function renderProducts() {
  checkedPoducts.innerHTML = ""; // Clear the existing content

  for (let i = 0; i < strObj.length; i++) {
    const product = strObj[i];

    let quantity1 = product.quantity;
    checkedPoducts.innerHTML += `
      <div class="checkoutedCart">

        <img class="renderedImage" src="${product.image}" alt="${product.title}" style="max-width: 100px; max-height: 100px;">
        <p class="text">
          Model: ${product.title},<br>
          Quantity: ${product.quantity},<br>
          Price: $${product.price.toFixed(2)}
          <button onclick="incrementQuantity(${i})">+</button>
          <button onclick="decrementQuantity(${i})">-</button>
          <button onclick="deleteCart(${i})">Delete</button>
        </p>
      </div>
    `;
  }
}

// Function to increment the quantity and update the price
function incrementQuantity(i) {
  strObj[i].quantity++;
  strObj[i].price = strObj[i].price + strObj[i].price; // Double the price

  // Update the local storage with the modified array
  localStorage.setItem('items', JSON.stringify(strObj));

  // Update the displayed products by re-rendering the list
  renderProducts();
}

// Function to decrement the quantity and update the price
function decrementQuantity(i) {
  if (strObj[i].quantity > 1) {
    strObj[i].quantity--;
    strObj[i].price = strObj[i].price - strObj[i].price; // Halve the price

    // Update the local storage with the modified array
    localStorage.setItem('items', JSON.stringify(strObj));

    // Update the displayed products by re-rendering the list
    renderProducts();
  }
}

// Function to delete a product
function deleteCart(i) {
  // Remove the product from the array
  strObj.splice(i, 1);

  // Update the local storage with the modified array
  localStorage.setItem('items', JSON.stringify(strObj));

  // Update the displayed products by re-rendering the list
  renderProducts();
}

// Initial rendering when the page loads
renderProducts();