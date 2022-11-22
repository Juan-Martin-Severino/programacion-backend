class ProductManager {
  constructor() {
    this.products = [];
  }

  getProductId = () => {
    const amount = this.products.length;
    const productId = amount > 0 ? this.products[amount - 1].id + 1 : 1;
    return productId;
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      id: this.getProductId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    const duplicatedCode = (element) => element.code == product.code;

    if (!this.products.some(duplicatedCode)) {
      this.products.push(product);
    } else {
      console.log("Codigo duplicado. No se puede agregar el producto");
    }
  };

  getProducts = () => {
    return this.products;
  };

  getProductById = (productId) => {
    const productFound = this.products.find((element) => element.id == productId);
    if (productFound) {
      console.log("El producto es: ", productFound.title);
    } else {
      console.log("Producto no encontrado");
    }
  };
}

const product = new ProductManager();

console.log("Primer llamdo", product.getProducts());

product.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin Imagen",
  "abc123",
  25
);

console.log("Segundo llamado", product.getProducts());

product.addProduct(
  "producto prueba2",
  "Este es un producto prueba2",
  200,
  "Sin Imagen",
  "abc123",
  25
);

console.log("Tercer llamado", product.getProducts());

product.addProduct(
  "producto prueba3",
  "Este es un producto prueba3",
  500,
  "Sin Imagen",
  "abc13",
  25
);

console.log("Cuarto llamado", product.getProducts());

product.getProductById(2);

product.getProductById(4);

