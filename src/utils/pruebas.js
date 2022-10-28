import { createProducto, deleteProducto, updateProducto, getProductById } from "./firebase";

const producto = { 
  "idCategoria":1, 
  "cantidad":200,
  "marca":"Nike", 
  "modelo":"Blazer",
  "precio":100, 
  "imagen":"https://firebasestorage.googleapis.com/v0/b/react-34755-tobiaspalumbo.appspot.com/o/imagenes%2F166-blazerwang.webp?alt=media&token=9ce87f81-6ba2-4689-9505-daf4e02bcb6c", 
  "logo":"./image/Logo_NIKE.svg", 
  "talle":[35,36,37,38,39,40,41] 
}

// createProducto(producto).then(estado => console.log(estado))

getProductById("pogQcB7oNChY9kFWBiYd").then(producto => console.log(producto))