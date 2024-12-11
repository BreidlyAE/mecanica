const products = [
	{
		img: "imagenes/re1.png",
		alt: "Producto 1",
		title: "FILTRO DE ACEITE",
		description:
			"Es el encargado de obstruir todas las impurezas y partículas que puedan desgastar las piezas del motor",
		price: 25,
		category: "mantenimiento",
	},
	{
		img: "imagenes/re2.png",
		alt: "Producto 2",
		title: "BUJIA",
		description:
			"La bujía produce una chispa en la cámara de combustión que inflama la mezcla de combustible y aire, lo que permite que el motor se encienda y funcione.",
		price: 600,
		category: "motor",
	},
	{
		img: "imagenes/re3.png",
		alt: "Producto 3",
		title: "SUSPENSIÓN",
		description: "La suspensión es el sistema que conecta el chasis del vehículo con las ruedas",
		price: 300,
		category: "suspensión",
	},
	{
		img: "imagenes/re4.png",
		alt: "Producto 4",
		title: "DISCO DE FRENO",
		description:
			"Un componente del sistema de frenado que reduce la velocidad de las ruedas y detiene el vehículo",
		price: 70,
		category: "frenos",
	},
	{
		img: "imagenes/re5.jpg",
		alt: "Producto 5",
		title: "ACEITE",
		description:
			"El aceite de motor es un elemento indispensable para el buen funcionamiento de cualquier vehículo motorizado con motor de combustión",
		price: 50,
		category: "lubricantes",
	},
	{
		img: "imagenes/re6.png",
		alt: "Producto 6",
		title: "DESAFLOJADOR",
		description:
			"Tiene una mezcla especial de solventes, tensoactivos, penetrantes y emulsionantes diseñados para aflojar y disolver grasa, aceite y mugre acumulada en motores",
		price: 14,
		category: "químicos",
	},
	{
		img: "imagenes/ti1.png",
		alt: "Producto 7",
		title: "RADIADOR",
		description: "Radiador Motor Para Toyota Corolla 1.3 2e 1991",
		price: 400,
		category: "sistema de enfriamiento",
	},
	{
		img: "imagenes/ti2.png",
		alt: "Producto 8",
		title: "ACEITE",
		description: "Aceite Motor Sintético 5w40 Synthoil High Tech 4lt Liqui Mol",
		price: 60,
		category: "lubricantes",
	},
	{
		img: "imagenes/TI3.png",
		alt: "Producto 9",
		title: "FILTRO DE ACEITE",
		description: "Filtro Aceite Para Hyundai Tucson 2.0 G4na New Dohc 2016",
		price: 15,
		category: "mantenimiento",
	},
	{
		img: "imagenes/TI4.png",
		alt: "Producto 10",
		title: "TAPA",
		description: "Tapa Emblema Logo De Aro Bmw 68mm (juego De 4 Unidades)",
		price: 300,
		category: "accesorios",
	},
	{
		img: "imagenes/TI5.png",
		alt: "Producto 11",
		title: "BOMBA DE GASOLINA",
		description: "Bomba Gasolina Para Toyota Tercel 1.3 2e El40 Sohc 1991",
		price: 250,
		category: "sistema de combustible",
	},
	{
		img: "imagenes/TI6.png",
		alt: "Producto 12",
		title: "VALVULA",
		description: "Buzo Valvula Para Mitsubishi Lancer 2.0 4g63-t Cp9a Evo 1999",
		price: 100,
		category: "motor",
	},
];

const renderProducts = (filteredProducts) => {
	const productGrid = document.getElementById("product-grid");
	productGrid.innerHTML = "";
	filteredProducts.forEach((product) => {
		productGrid.innerHTML += `
      <div class="product">
        <img src="${product.img}" alt="${product.alt}" />
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>S/ ${product.price}</p>
        <button>Agregar al Carro</button>
      </div>`;
	});
};

const applyFilters = () => {
	const category = document.getElementById("category").value;
	const searchTerm = document.getElementById("search").value.toLowerCase();

	let filteredProducts = products;

	if (category !== "all") {
		filteredProducts = filteredProducts.filter(
			(product) => product.category.toLowerCase() === category.toLowerCase(),
		);
	}

	if (searchTerm) {
		filteredProducts = filteredProducts.filter((product) =>
			product.title.toLowerCase().includes(searchTerm),
		);
	}

	renderProducts(filteredProducts);
};

document.getElementById("category").addEventListener("change", applyFilters);
document.getElementById("search").addEventListener("input", applyFilters);

renderProducts(products);
