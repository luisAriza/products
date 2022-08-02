class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.className = "card text-center mb-3";
    element.innerHTML = `
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item">
						${product.name}
					</li>
					<li class="list-group-item">
						$ ${product.price}
					</li>
					<li class="list-group-item mb-3">
						<strong>Product year</strong>: ${product.year}
					</li>
				</ul>
				<a href="/" class="btn btn-warning" name="remove">
					Remove
				</a>
			</div>
		`;
    productList.appendChild(element);
    this.resetForm();
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  removeProduct(element) {
    element.name === "remove" && element.parentElement.parentElement.remove();
  }

  showMessage(msg, cssClass) {}
}

document.getElementById("product-form").addEventListener("submit", (event) => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  const product = new Product(name, price, year);

  const ui = new UI();
  ui.addProduct(product);

  event.preventDefault();
});

document.getElementById("product-list").addEventListener("click", (event) => {
  const ui = new UI();
  ui.removeProduct(event.target);

  event.preventDefault();
});
