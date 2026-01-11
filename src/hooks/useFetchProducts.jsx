// hooks/useFetchProductos.js
import { useEffect, useState } from "react";

const useFetchProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://api.sheetbest.com/sheets/7af2078e-45ca-4f95-ac01-6ab2b2026202")
      .then(res => res.json())
      .then(data => {
        const formateados = data.map((item, index) => ({
          id: index + 1, // si no hay un ID real en la sheet
          nombre: item.nombre,
          precio: (item.precio),
          descripcion: item.descripcion,
          imagen: item.imagen,
          imagenes: [item.imagenUno, item.imagenDos],
          filtro: item.filtro,
          tipo:item.tipo,
    
          piedra: item.piedra,
        }));
        setProductos(formateados);
      })
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  return productos;
};

export default useFetchProductos;
