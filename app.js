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
				<ul class="list-group mb-3">
					<li class="list-group-item">
						${product.name}
					</li>
					<li class="list-group-item">
						$ ${product.price}
					</li>
					<li class="list-group-item">
						${product.year}
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
    if (element.name === "remove") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Removed Successfully", "warning");
    }
  }

  showMessage(msg, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2 mb-0`;
    div.appendChild(document.createTextNode(msg));

    const containerApp = document.querySelector("main");
    const app = document.getElementById("App");
    containerApp.insertBefore(div, app);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

document.getElementById("product-form").addEventListener("submit", (event) => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  const product = new Product(name, price, year);
  const ui = new UI();

  event.preventDefault();

  if (name && price && year) {
    ui.addProduct(product);
    ui.showMessage("Product Added Successfully", "success");
  } else {
    return ui.showMessage("Upss!! Complete Fields", "info");
  }
});

document.getElementById("product-list").addEventListener("click", (event) => {
  const ui = new UI();
  ui.removeProduct(event.target);

  event.preventDefault();
});
