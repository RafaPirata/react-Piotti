const ListaAutos = [
  {
    id: 1,
    modelo: "MDX",
    categoryId: "1",
    marca: "Acura",
    precio: 58981.34,
    stock: 2,
    anio: 2017,
    imagen: "https://qesot.com/img_dir/cars/32166-acura-mdx-iii-2017-1.jpeg",
    detalle:
      "El motor V-6 de 290 caballos de fuerza81 combinado con una transmisión automática de 10 velocidades con cambios rápidos proporciona una potencia y aceleración imponentes. Cambie de marcha a toda velocidad con los mandos de transmisión para disfrutar de un andar más deportivo. Con una capacidad de remolque de hasta 3,500 libras,91 la MDX 2023 emprende cualquier aventura con ambición.",
  },
  {
    id: 2,
    modelo: "Fiat",
    categoryId: "2",
    marca: "Cronos",
    precio: 58981.34,
    stock: 5,
    anio: 2020,
    imagen:
      "https://1.bp.blogspot.com/-agCovB3uit8/XUL_-xAZQWI/AAAAAAAAeuw/1l6hxLKC1YI1m2JEMicAs7MyhcgetNZGQCLcBGAs/s1600/Fiat-Cronos-2020-%25283%2529.jpg",
    detalle:
      "El Fiat Cronos está equipado con __dos motores nafteros de 1.3 y 1.8 litros__. El motor 1.3 rinde hasta 99 cv y está disponible en las versiones Attractive y Drive. El motor 1.8 entrega hasta 130 cv y es exclusivo de las versiones Precision manual y automática.",
  },
  {
    id: 3,
    modelo: "A1",
    categoryId: "2",
    marca: "Audi",
    precio: 58981.34,
    stock: 2,
    anio: 2019,
    imagen:
      "https://img.remediosdigitales.com/27d240/audi-a1-2019_2/1366_2000.jpg",
    detalle:
      "El propulsor de acceso es el 1.0 TFSI de tres cilindros y turbocompresor, con dos niveles de potencia: 95 y 115 CV. Por encima está el 1.5 TFSI de 150 CV con desconexión de cilindros, situándose como opción más potente el también conocido 2.0 TFSI de 200 CV.",
  },
  {
    id: 4,
    modelo: "kicks",
    categoryId: "1",
    marca: "Nissan",
    precio: 88981.34,
    stock: 3,
    anio: 2019,
    imagen:
      "https://img.autosblogmexico.com/2019/05/11/jy4ZkaKS/screenshot-2019-05-10-at-13-51-39-2e98.png",
    detalle:
      "La Nissan Kicks está equipada con un motor de gasolina HR16DE 1.6L I4 de la misma marca Nissan, compartido con el Versa. Este motor genera 125 hp y 115 lb-ft/155 Nm de par.",
  },
  {
    id: 5,
    modelo: "Cruze",
    categoryId: "2",
    marca: "Chevrolet",
    precio: 78981.34,
    stock: 4,
    anio: 2021,
    imagen:
      "https://www.karvi.com.ar/blog/wp-content/uploads/2021/01/Cruze.jpg",
    detalle:
      "Cuenta con un nuevo motor de la familia ECOTEC con 1.4 L Turbo que desarrolla 153 hp y 240 Nm de torque. Provee un balance perfecto entre desempeño, eficiencia y refinamiento.",
  },
  {
    id: 6,
    modelo: "Focus",
    categoryId: "2",
    marca: "Ford",
    precio: 68981.34,
    stock: 5,
    anio: 2020,
    imagen:
      "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2019/03/ford-focus-2020.jpg",
    detalle: "El único motor es un motor gasolina de 2.3 litros y 140 CV.",
  },
  {
    id: 7,
    modelo: "X6",
    categoryId: "1",
    marca: "BMW",
    precio: 98981.34,
    stock: 1,
    anio: 2020,
    imagen:
      "https://www.elcarrocolombiano.com/wp-content/uploads/2019/07/20190703-BMW-X6-2020-01.jpg",
    detalle:
      "El BMW X6 M de la segunda generación instaló un motor 4.4 V8 Twin-Turbo de 575 CV capaz de llevar a este SUV hasta los 250 Km/h de velocidad máxima y conseguir hacer el 0-100 Km/h en 4,2 segundos.",
  },
  {
    id: 8,
    modelo: "X1",
    categoryId: "1",
    marca: "BMW",
    precio: 98981.34,
    stock: 2,
    anio: 2021,
    imagen:
      "https://www.diariomotor.com/imagenes/2012/10/bmw-x1-exterior-2022-4-62be94ed71493.jpg",
    detalle:
      "Actualmente, el BMW X1 se encuentra disponible con cuatro propulsores diésel (16d con 116 CV, 18d con 150 CV, 20d con 190 CV y 25d con 231 CV), y dos de gasolina (18i con 140 CV y 20i con 192 CV) pudiendo elegir entre motores de tres o cuatro cilindros.",
  },
  {
    id: 9,
    modelo: "C-220",
    categoryId: "2",
    marca: "Mercedez Benz",
    precio: 198981,
    stock: 2,
    anio: 2022,
    imagen:
      "https://autotest.com.ar/wp-content/uploads/2021/02/MERCEDES-BENZ-CLASE-C-2022.jpg",
    detalle:
      "En gasolina, el Mercedes Clase C usa motores M254 de familia modular con microhibridación EQ Boost (reciben por tanto la etiqueta ECO de la DGT) con potencias que van desde los 170 CV (C 180) hasta los 258 CV del C 300.",
  },
  {
    id: 10,
    modelo: "GLS",
    categoryId: "1",
    marca: "Mercedez Benz",
    precio: 198981,
    stock: 2,
    anio: 2020,
    imagen:
      "https://cdn.motor1.com/images/mgl/PEvQr/s3/lanzamiento-mercedes-benz-clase-gls.jpg",
    detalle:
      "El Mercedes-Benz Clase GLS, anteriormente llamado Clase GL, es un automóvil todoterreno de lujo del segmento F producido por el fabricante alemán Mercedes-Benz desde el año 2006 para la demanda del mercado americano",
  },
];

export default ListaAutos;

// const firestoreFetch = async () => {
//             const querySnapshot = await getDocs(collection(db, "products"));
//             const dataFromFirestore = querySnapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data()
//             }))
//             return dataFromFirestore
//         }
//         firestoreFetch()
//             .then(result => setDatos(result))
//             .catch(err => console.log(err))
