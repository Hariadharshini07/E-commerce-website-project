// Script for navigation bar
const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    }

    )
}
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    }

    )
}

<script>
  // List of products (must match your shop products)
  const products = [
    { id: 0, title: "Cartoon Astronaut T-shirt", price: 56, image: "img/products/f1.jpg" },
    { id: 1, title: "Leafy edgy T-shirt", price: 78, image: "img/products/f2.jpg" },
    { id: 2, title: "Flory magic T-shirt", price: 60, image: "img/products/f3.jpg" },
    { id: 3, title: "Blue star T-shirt", price: 84, image: "img/products/f5.jpg" },
    { id: 4, title: "Pinky prince T-shirt", price: 87, image: "img/products/f4.jpg" },
    { id: 5, title: "Jacky T-shirt", price: 90, image: "img/products/f6.jpg" },
    { id: 6, title: "Palazzo", price: 76, image: "img/products/f7.jpg" },
    { id: 7, title: "Saggy tops", price: 86, image: "img/products/f8.jpg" },
    { id: 8, title: "Paley gill shirt", price: 56, image: "img/products/n1.jpg" },
    { id: 9, title: "Stripped shirt", price: 78, image: "img/products/n2.jpg" },
    { id: 10, title: "Green packy shirt", price: 60, image: "img/products/n4.jpg" },
    { id: 11, title: "Blue star shirt", price: 84, image: "img/products/n5.jpg" },
    { id: 12, title: "Packy prince shirt", price: 87, image: "img/products/n4.jpg" },
    { id: 13, title: "Jacky Trousser", price: 99, image: "img/products/n6.jpg" },
    { id: 14, title: "Blaky shirt", price: 76, image: "img/products/n7.jpg" },
    { id: 15, title: "Stripped shirt", price: 69, image: "img/products/n8.jpg" }
  ];

  // Add to cart function
  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === id);

    // Check if product already exists in cart
    let existing = cart.find(p => p.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product.title + " added to cart!");
  }
</script>

