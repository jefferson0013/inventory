// function Products(price, units) {
//   const Uni = price / units;
//   const Units = Uni * (15 / 100);
//   const Bulto = price * (15 / 100);
//   const GananciaU = Units + Units;
//   const GananciaB = Bulto + price;

//   console.log("Price = " + price);
//   console.log("Price Units = " + Uni);

//   console.log("GANACIAS");

//   console.log("Price 15% = " + GananciaB + " - Ganacia " + Bulto);
//   console.log("Units 15% = " + GananciaU + " - Ganacia " + Units);
// }

// Products(90000, 24);

// console.log(562.5*24)

const Products = document.getElementById("products");
const Precios = document.getElementById("precios");
const Total = document.getElementById("Total");

fetch("Products.json")
  .then((response) => response.json())
  .then((data) => {
    let totalPrecios = data.productos.reduce((total, p) => total + p.precio, 0);
    data.productos.forEach((p) => {
      const productoHTML = "<div>" + p.nombre + "</div>";
      const pricesHTML = "<div>" + " $" + p.precio + "</div>";
      Products.innerHTML += productoHTML;
      Precios.innerHTML += pricesHTML;
    });
    Total.innerHTML = "$" + totalPrecios;
  });

