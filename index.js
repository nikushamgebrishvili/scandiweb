const products = [
  {
    id: 1,
    imgSrc: "/assets/images/Image.svg",
    name: "Running Short",
    price: "$49.99",
    inStock: true,
  },
  {
    id: 2,
    imgSrc: "/assets/images/Image2.svg",
    name: "Running Short",
    price: "$39.99",
    inStock: true,
  },
  {
    id: 3,
    imgSrc: "/assets/images/Image3.svg",
    name: "Running Short",
    price: "$59.99",
    inStock: false,
  },
  {
    id: 4,
    imgSrc: "/assets/images/Image4.svg",
    name: "Running Short",
    price: "$29.99",
    inStock: true,
  },
  {
    id: 5,
    imgSrc: "/assets/images/Image5.svg",
    name: "Running Short",
    price: "$69.99",
    inStock: true,
  },
  {
    id: 6,
    imgSrc: "/assets/images/Image6.svg",
    name: "Running Short",
    price: "$89.99",
    inStock: true,
  },
];

const productsContainer = document.querySelector(".Products");
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  productsContainer.innerHTML += `
    <div class="${
      !product.inStock ? "gan" : ""
    } first-img column medium" key="${product.id}">
        <img class="img-size" src="${product.imgSrc}">
        <p>${product.name}</p>
        <p class="boldlvl6">${product.price}</p>
    </div>
    `;
}
