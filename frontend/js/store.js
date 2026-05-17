const productGrid = document.getElementById("productGrid");

const loadProducts = async () => {

    try {

        const response = await fetch(`${API_URL}/products`);

        const products = await response.json();

        productGrid.innerHTML = "";

        products.forEach(product => {

            productGrid.innerHTML += `

            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>$${product.price}</p>

                <button class="btn" onclick="addToCart('${product._id}')">
                    Add to Cart
                </button>

            </div>

            `;

        });

    } catch (error) {

        console.log(error);

    }

};

loadProducts();