import Product from "./product.js";
import UI from "./ui.js";

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
