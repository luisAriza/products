export default class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.className = "card text-center mb-3";
    element.innerHTML = `
			<div class="card-body">
				<ul class="list-group mb-3">
					<li class="list-group-item text-capitalize">
						${product.name}
					</li>
					<li class="list-group-item">
						$ ${product.price}
					</li>
					<li class="list-group-item">
						${product.year}
					</li>
				</ul>
				<a href="/" class="btn btn-danger" name="remove">
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
      this.showMessage("Product Removed Successfully", "danger");
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
