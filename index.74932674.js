class t{constructor(t,e,n){this.name=t,this.price=e,this.year=n}}class e{addProduct(t){const e=document.getElementById("product-list"),n=document.createElement("div");n.className="card text-center mb-3",n.innerHTML=`\n\t\t\t<div class="card-body">\n\t\t\t\t<ul class="list-group mb-3">\n\t\t\t\t\t<li class="list-group-item text-capitalize">\n\t\t\t\t\t\t${t.name}\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="list-group-item">\n\t\t\t\t\t\t$ ${t.price}\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="list-group-item">\n\t\t\t\t\t\t${t.year}\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<a href="/" class="btn btn-danger" name="remove">\n\t\t\t\t\tRemove\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t`,e.appendChild(n),this.resetForm()}resetForm(){document.getElementById("product-form").reset()}removeProduct(t){"remove"===t.name&&(t.parentElement.parentElement.remove(),this.showMessage("Product Removed Successfully","danger"))}showMessage(t,e){const n=document.createElement("div");n.className=`alert alert-${e} mt-2 mb-0`,n.appendChild(document.createTextNode(t));const s=document.querySelector("main"),r=document.getElementById("App");s.insertBefore(n,r),setTimeout((()=>{document.querySelector(".alert").remove()}),3e3)}}document.getElementById("product-form").addEventListener("submit",(n=>{const s=document.getElementById("name").value,r=document.getElementById("price").value,c=document.getElementById("year").value,d=new t(s,r,c),o=new e;if(n.preventDefault(),!(s&&r&&c))return o.showMessage("Upss!! Complete Fields","info");o.addProduct(d),o.showMessage("Product Added Successfully","success")})),document.getElementById("product-list").addEventListener("click",(t=>{(new e).removeProduct(t.target),t.preventDefault()}));