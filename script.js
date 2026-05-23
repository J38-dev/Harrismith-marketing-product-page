const form = document.getElementById("productForm");
const productsContainer = document.getElementById("productsContainer");

const imageInput = document.getElementById("productImage");
const imagePreviewArea = document.getElementById("imagePreviewArea");
const previewImage = document.getElementById("previewImage");

/* OPEN IMAGE PICKER */

imagePreviewArea.addEventListener("click", () => {
  imageInput.click();
});

/* PREVIEW IMAGE */

imageInput.addEventListener("change", () => {

  const file = imageInput.files[0];

  if(file){

    const reader = new FileReader();

    reader.onload = function(e){

      previewImage.src = e.target.result;

      previewImage.style.width = "100%";
      previewImage.style.height = "100%";
      previewImage.style.objectFit = "cover";

    };

    reader.readAsDataURL(file);

  }

});

/* CREATE PRODUCT */

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name =
  document.getElementById("productName").value;

  const price =
  document.getElementById("productPrice").value;

  const category =
  document.getElementById("productCategory").value;

  const location =
  document.getElementById("productLocation").value;

  const whatsapp =
  document.getElementById("productWhatsapp").value;

  const description =
  document.getElementById("productDescription").value;

  const image =
  previewImage.src;

  const card = document.createElement("div");

  card.classList.add("product-card");

  card.innerHTML = `
  
    <img
      src="${image}"
      class="product-image"
    >

    <div class="product-content">

      <div class="top-row">

        <div>

          <div class="product-title">
            ${name}
          </div>

          <div class="product-price">
            R ${price}
          </div>

        </div>

        <div class="category-badge">
          ${category}
        </div>

      </div>

      <div class="product-description">
        ${description}
      </div>

      <div class="info-row">

        <div class="info-item">
          <i class="fa-solid fa-location-dot"></i>
          ${location}
        </div>

        <div class="info-item">
          <i class="fa-brands fa-whatsapp"></i>
          WhatsApp Seller
        </div>

      </div>

      <a
        href="https://wa.me/${whatsapp}"
        target="_blank"
        class="whatsapp-btn"
      >

        <i class="fa-brands fa-whatsapp"></i>
        Chat Seller

      </a>

    </div>
  
  `;

  productsContainer.prepend(card);

  form.reset();

  previewImage.src =
  "https://cdn-icons-png.flaticon.com/512/847/847969.png";

  previewImage.style.width = "90px";
  previewImage.style.height = "auto";

});