const carrito = {
    productos: [{
      nombre: 'papel higienico',
      unidades: 4,
      precio: 5
    },
    {
      nombre: 'chocolate',
      unidades: 2,
      precio: 1.5
    }],
    
    get precioTotal() {
      let precioTotal = 0; 
      for (let i = 0; i < this.productos.length; i++) { 
        const producto = this.productos[i];
        precioTotal += producto.precio * producto.unidades; 
      }
      return precioTotal; 
    }
  };



const nuevoProducto = {
    nombre: 'jabón',
    unidades: 3,
    precio: 2
  };
  
  carrito.productos.push(nuevoProducto);
  