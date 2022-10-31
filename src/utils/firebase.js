// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, collection, addDoc, getFirestore, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import Swal from "sweetalert2";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34755-tobiaspalumbo.firebaseapp.com",
  projectId: "react-34755-tobiaspalumbo",
  storageBucket: "react-34755-tobiaspalumbo.appspot.com",
  messagingSenderId: "493820487161",
  appId: "1:493820487161:web:4d595112a2ef73d5c04928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore()
const cargarBDD = async () =>{
  const promise = await fetch("../json/stock.json")
  const productos = await promise.json()
  console.log(productos)
  productos.forEach( async (data) => {
    await addDoc(collection(db,"productos"),
    {
        idCategoria: data.idCategoria,
        modelo: data.modelo,
        marca: data.marca,
        precio: data.precio,
        talle: data.talle,
        cantidad: data.cantidad,
        logo: data.logo,
        imagen: data.imagen
    })
  }) 
}
const getProductos = async () => {
  const productos = await getDocs(collection(db,"productos"))
  let item = productos.docs.map(prod => [prod.id, prod.data()])
 
  console.log(productos.docs.map(prod => prod))
  return item
}

const getProductById = async (id) => {
  const producto = await getDoc(doc(db, "productos", id));
  const prod = [producto.id, producto.data()];
  return prod;
};

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

const deleteProducto = async (id) => {
 const estado = await deleteDoc(doc(db, "productos"))
 return estado
}

const createProducto = async (data) => {
  const estado = await addDoc(collection(db, "productos"), {
    idCategoria: data.idCategoria,
    modelo: data.modelo,
    marca: data.marca,
    precio: data.precio,
    talle: data.talle,
    cantidad: data.cantidad,
    logo: data.logo,
    imagen: data.imagen
  })
  return estado
}

const crearOrdenDeCompra = async (nombre, apellido, email, dni, direccion, precioTotal) => {
  const ordenDeCompra =  await addDoc(collection(db, "ordenCompra"), {
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion: direccion,
    precioTotal: precioTotal
  })
  return ordenDeCompra  
}

const getOrdenDeCompra = async (id) => {
  const ordenDeCompra = await getDoc(doc(db, "ordenCompra", id))
  console.log(ordenDeCompra)
  return ordenDeCompra
}

const  getOrdenDeCompras = async () => {
  const productos = await getDocs(collection(db, "ordenCompra"))
  console.log(productos)
  let item = productos.docs.map(prod => [prod.id, prod.data()]) 
  console.log(item)
  return item
}

const crearConsulta = async (nombre, email, mensaje ) => {

  
    const consulta = await addDoc(collection(db, "consulta"),{
      nombre : nombre,
      email : email, 
      mensaje : mensaje
    })
    Swal.fire({
      icon: 'success',
      title: `Your message was sent!`,
      text: "We will answer you soon"
    })
    return mensaje

}
export {cargarBDD, getProductos, getProductById, updateProducto, deleteProducto, createProducto, crearOrdenDeCompra, getOrdenDeCompra, getOrdenDeCompras, crearConsulta}