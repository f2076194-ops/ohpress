// Datos de productos actualizados
const products = [
  { id: 1, name: "Vestido corto color vino", category: "Vestidos", price: 22.00, img: "https://i.postimg.cc/15cP7Y8q/IMG-20250918-WA0062.jpg", desc: "Vestido elegante color vino.", sizes: "M", featured: true },
  { id: 2, name: "Vestido corto color negro", category: "Vestidos", price: 22.00, img: "https://i.postimg.cc/m2GBwGg4/IMG-20250918-WA0065.jpg", desc: "Vestido clásico color negro.", sizes: "M", featured: true },
  { id: 3, name: "Vestido corto color rojo", category: "Vestidos", price: 20.00, img: "https://i.postimg.cc/J7XRZhmK/IMG-20250919-WA0005.jpg", desc: "Vestido llamativo color rojo.", sizes: "L", featured: false },
  { id: 4, name: "Vestido corto color blanco", category: "Vestidos", price: 22.00, img: "https://i.postimg.cc/jjTf01cY/IMG-20250918-WA0059.jpg", desc: "Vestido fresco color blanco.", sizes: "L", featured: false },
  { id: 5, name: "Top color marrón", category: "Tops", price: 13, img: "https://i.postimg.cc/LsV1HVQY/IMG-20250918-WA0067.jpg", desc: "Top versátil color marrón.", sizes: "M", featured: true },
  { id: 6, name: "Enterizo color negro", category: "Enterizos", price: 26.00, img: "https://i.postimg.cc/zDKrfRS6/IMG-4366.jpg", desc: "Enterizo elegante color negro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 7, name: "Vestido largo color rosado", category: "Vestidos", price: 25, img: "https://i.postimg.cc/bNPjSNmJ/IMG-4368.jpg", desc: "Vestido largo de color rosado con un estilo cute y acabado de flores.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 8, name: "Vestido largo color rojo", category: "Vestidos", price: 23, img: "https://i.postimg.cc/Hst1wDNt/IMG-4371.jpg", desc: "Vestido fresco y atrevido color rojo.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 9, name: "Vestido corto color negro", category: "Vestidos", price: 23, img: "https://i.postimg.cc/0y2RZXR1/IMG-4374.jpg", desc: "Vestido elegante con mangas color negro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 10, name: "Vestidos cortos de colores", category: "Vestidos", price: 25, img: "https://i.postimg.cc/RZsrY146/IMG-4377.jpg", desc: "Vestidos cortos con lindos acabados. Escoge entre color negro, beige y rojo.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 11, name: "Enterizo color verde", category: "Enterizos", price: 25, img: "https://i.postimg.cc/7L5vrCZB/IMG-4378.jpg", desc: "Enterizo elegante color verde con avabado en V.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 12, name: "Conjunto color negro", category: "Conjuntos", price: 25, img: "https://i.postimg.cc/HxMfjf5X/IMG-4380.jpg", desc: "Conjunto sofisticado color negro. Incluye pieza en falta y camisa.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 13, name: "Vestido corto color café  claro", category: "Vestidos", price: 25, img: "https://i.postimg.cc/rp3BV8dq/IMG-4381.jpg", desc: "Vestido corto versátil color café  claro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 14, name: "Vestidos cortos de colores", category: "Vestidos", price: 25, img: "https://i.postimg.cc/4yTjcBbM/IMG-4383.jpg", desc: "Vestidos cortos con lindos acabados. Escoge entre negro y morado pastel.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 15, name: "Enterizo color negro", category: "Enterizos", price: 26, img: "https://i.postimg.cc/ZYrGmzJh/IMG-4384.jpg", desc: "Enterizo casula color negro. Incluye hermoso detalle color blanco.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 16, name: "Top color beige", category: "Tops", price: 15, img: "https://i.postimg.cc/fyjpfm8b/IMG-4385.jpg", desc: "Top beige con hermosos detalles de flores.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 17, name: "Enterizo corto color rojo", category: "Enterizos", price: 24, img: "https://i.postimg.cc/J4M94YhH/IMG-4386.jpg", desc: "Enterizo corto versátil color rojo. Incluye detalle en falda.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 18, name: "Vestido corto color negro", category: "Vestidos", price: 25, img: "https://i.postimg.cc/zX74LwLt/IMG-4388.jpg", desc: "Vestido a la moda corto color negro. Incluye acabados en paletones.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 19, name: "Vestidos cortos color café  claro", category: "Vestidos", price: 23, img: "https://i.postimg.cc/K8YwtKBZ/IMG-4389.jpg", desc: "Vestidos cortos color café  claro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 20, name: "Top con mangas color negro", category: "Tops", price: 13, img: "https://i.postimg.cc/y8r5jVy0/IMG-4390.jpg", desc: "Top de mangas largas color negro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 21, name: "Conjunto color negro", category: "Conjuntos", price: 26, img: "https://i.postimg.cc/hGzY3H26/IMG-4391.jpg", desc: "Conjunto sofisticado color negro.Incluye pieza en pantalón y camisa", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 22, name: "Vestido largo color negro", category: "Vestidos", price: 23, img: "https://i.postimg.cc/QM2zL0Pt/IMG-4392.jpg", desc: "Vestido largo clásico color negro. Incluye lindo detalle de abertura en pierna y espalda.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 23, name: "Vestido largo color blanco", category: "Vestidos", price: 23, img: "https://i.postimg.cc/QtcyjcGq/IMG-4393.jpg", desc: "Vestido largo color blanco. Incluye elegante abertura en la espalda.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 24, name: "Vestido largo color negro", category: "Vestidos", price: 23, img: "https://i.postimg.cc/qq0ZqgpH/IMG-4395.jpg", desc: "Vestido largo color negro. Incluye atrevido escote en el busto.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 25, name: "Vestido largo color rojo", category: "Vestidos", price: 23, img: "https://i.postimg.cc/PJ4Vwhqp/IMG-4396.jpg", desc: "Vestido largo color rojo. Incluye hermosa avertura en piernas.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 26, name: "Vestido largo color rojo", category: "Vestidos", price: 23, img: "https://i.postimg.cc/66LmSVhW/IMG-4397.jpg", desc: "Vestido largo atrevido color rojo.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 27, name: "Vestido corto color fucsia", category: "Vestidos", price: 23, img: "https://i.postimg.cc/bNyBjG6Q/IMG-4398.jpg", desc: "Vestido corto llamativo color fucsia.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 28, name: "Vestido corto color negro", category: "Vestidos", price: 23, img: "https://i.postimg.cc/280XjzJg/IMG-4399.jpg", desc: "Vestido corto atrevido color negro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 29, name: "Vestidos largos de colores", category: "Vestidos", price: 25, img: "https://i.postimg.cc/wj347CYM/IMG-4402.jpg", desc: "Vestidos largos versátiles. Escoge entre todos estos diseños y colores.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 30, name: "Conjuto color celeste claro", category: "Conjuntos", price: 24, img: "https://i.postimg.cc/XvC2g9J0/IMG-4403.jpg", desc: "Conjunto color celeste claro. Incluye lindos detalles.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 31, name: "Enterizo color marrón", category: "Enterizos", price: 23, img: "https://i.postimg.cc/gJbgtrXL/IMG-4404.jpg", desc: "Enterizo elegante color marrn.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 32, name: "Vestido largo color blanco", category: "Vestidos", price: 23, img: "https://i.postimg.cc/nzK0yZBR/IMG-4405.jpg", desc: "Vestido largo clásico coloór blanco.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 33, name: "Vestido largo color negro", category: "Vestidos", price: 23, img: "https://i.postimg.cc/D0B5zgC1/IMG-4406.jpg", desc: "Vestido largo atrevido color negro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 34, name: "Conjuntos de colores", category: "Conjuntos", price: 25, img: "https://i.postimg.cc/GtcqrNjc/IMG-4408.jpg", desc: "Conjuntos casuales de colores. Incluye pieza en pantalón y camisa.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 35, name: "Tops de colores", category: "Tops", price: 13, img: "https://i.postimg.cc/CMNcJhFd/IMG-4409.jpg", desc: "Tops casuales de colores.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 36, name: "Top color rojo", category: "Tops", price: 13, img: "https://i.postimg.cc/L68NbcXD/IMG-4410.jpg", desc: "Top coqueto estilo corazón.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 37, name: "Top color fucsia", category: "Tops", price: 13, img: "https://i.postimg.cc/6p7z9CCG/IMG-4411.jpg", desc: "Top coqueto con lindo vuelo en color fucsia.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 38, name: "Conjunto pant cafe y camisa blanca", category: "Conjunto", price: 24, img: "https://i.postimg.cc/hjn0bw69/IMG-4412.jpg", desc: "Conjunto cómodo y casual, pantalón color marrón.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 39, name: "Conjunto pant negro y camisa blanca", category: "Conjunto", price: 24, img: "https://i.postimg.cc/Xvd853Hj/IMG-4413.jpg", desc: "Conjunto cómodo y casual, pantalón color negro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 40, name: "Vestido corto color rojo", category: "Vestidos", price: 22, img: "https://i.postimg.cc/B6CBhpfR/IMG-4416.jpg", desc: "Vestido corto versátil color rojo. Incluye detalle de manga caída.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 41, name: "Vestido corto color negro", category: "Vestidos", price: 20, img: "https://i.postimg.cc/prGYvdTZ/IMG-4417.jpg", desc: "Vestido corto de tirantes color negro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 42, name: "Vestido corto color rojo", category: "Vestidos", price: 24, img: "https://i.postimg.cc/brNH4nzr/IMG-4418.jpg", desc: "Vestido corto color rojo. Incluye elegante escoste en hombros y espalda", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 43, name: "Vestido corto color rojo", category: "Vestidos", price: 23, img: "https://i.postimg.cc/4dXzhcHP/IMG-4419.jpg", desc: "Vestido corto seductor color rojo de mangas largas.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 44, name: "Vestido largo color negro", category: "Vestidos", price: 23, img: "https://i.postimg.cc/N066MDFL/IMG-4420.jpg", desc: "Vestido atrevido largo color negro. Incluye lindos cortes que realzan la figura.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 45, name: "Vestido corto color rojo", category: "Vestidos", price: 23, img: "https://i.postimg.cc/QxzknVvN/IMG-4421.jpg", desc: "Vestido corto elegante color rojo.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 46, name: "Vestido corto color negro", category: "Vestidos", price: 22, img: "https://i.postimg.cc/v83vf0zV/IMG-4422.jpg", desc: "Vestido seductor corto color negro de tirantes.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 47, name: "Vestido largo color blanco", category: "Vestidos", price: 24, img: "https://i.postimg.cc/KvjDNtqs/IMG-4423.jpg", desc: "Vestido largo fresco color blanco.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 48, name: "Vestido largo color blanco", category: "Vestidos", price: 23, img: "https://i.postimg.cc/MTt10GyS/IMG-4424.jpg", desc: ".Vestido largo fresco color blanco. perfecto para ir a la playa.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 49, name: "Conjunto color blanco", category: "Conjuntos", price: 23, img: "https://i.postimg.cc/SKFLk3yw/IMG-4425.jpg", desc: "Conjunto tropical color blanco. Incluye pieza de falda lara y top.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 50, name: "Vestido largo color marrón", category: "Vestidos", price: 24, img: "https://i.postimg.cc/Hk74GdCw/IMG-4427.jpg", desc: "Vestido largo versátil color marrón.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 51, name: "Vestido corto color negro", category: "Vestidos", price: 22, img: "https://i.postimg.cc/sxX7TRcZ/IMG-4429.jpg", desc: "Vestido corto hermoso de color negro. Incluye lindos detalles en mangas y falda", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 52, name: "Tops de colores", category: "Tops", price: 17, img: "https://i.postimg.cc/xjxKccfG/IMG-4435.jpg", desc: "Tops versátiles de colores.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 53, name: "Conjunto de color negro", category: "Conjuntos", price: 25, img: "https://i.postimg.cc/Dz6SHMmQ/IMG-4436.jpg", desc: "Conjunto versátil color negro. Incluye pieza de falda larga y top de tirantes.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 54, name: "Vestido corto color rojo", category: "Vestidos", price: 25, img: "https://i.postimg.cc/Z5rBFRSM/IMG-4437.jpg", desc: "Vestido corto elegante color rojo.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 55, name: "Vestido corto color vino", category: "Vestidos", price: 25, img: "https://i.postimg.cc/kgrRbSkS/IMG-4438.jpg", desc: "Vestido corto hermoso y sensual color vino.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 56, name: "Vestido largo color negro", category: "Vestidos", price: 26, img: "https://i.postimg.cc/CKg8W870/IMG-4440.jpg", desc: "Vestido elegante largo color negro. Incluye elegante escote en piernas y espalda.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 57, name: "Vestido largo color vino", category: "Vestidos", price: 26, img: "https://i.postimg.cc/yxk3Fy1m/IMG-4441.jpg", desc: "Vestido elegante largo color vino.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 58, name: "Enterizo color rojo", category: "Enterizos", price: 26, img: "https://i.postimg.cc/Kz9gkH2c/IMG-4442.jpg", desc: "Enterizo elegante color rojo. Incluye lindo detalle en hombros", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 59, name: "Vestido corto color negro", category: "Vestidos", price: 22, img: "https://i.postimg.cc/jjtW8bqd/IMG-4443.jpg", desc: "Vestido casual corto color negro. Incluye hermoso detalle en mangas y busto.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 60, name: "Conjunto color marrón", category: "Conjuntos", price: 23, img: "https://i.postimg.cc/qB53pSwj/IMG-4444.jpg", desc: "Conjunto playero color marrón. Incluye pieza de falda larga y top.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 61, name: "Vestido largo color rojo", category: "Vestidos", price: 23, img: "https://i.postimg.cc/0jBm3HWX/IMG-4445.jpg", desc: "Vestido cute y elegante largo color rojo.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 62, name: "Falda larga color negro", category: "Faldas", price: 15, img: "https://i.postimg.cc/DzPGFzpX/IMG-4447.jpg", desc: "Falda larga atrevida color negro. Incluye un hermoso corte en pierna.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 63, name: "Vestido corto color negro", category: "Vestidos", price: 23, img: "https://i.postimg.cc/2yMbTLyP/IMG-4448.jpg", desc: "Vestido clásico corto de mangas largas color negro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 64, name: "Vestido corto color negro", category: "Vestidos", price: 23, img: "https://i.postimg.cc/DZzSTPb9/IMG-4449.jpg", desc: "Vestido clásico corto de mangas cortas y escote en pierna color negro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 65, name: "Vestido corto color negro", category: "Vestidos", price: 22, img: "https://i.postimg.cc/02KJjnHx/IMG-4451.jpg", desc: "Vestido versátil corto de mangas largas color negro. Incluye lindo acabado en mangas y busto.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 66, name: "Vestido corto color blanco", category: "Vestidos", price: 22, img: "https://i.postimg.cc/65FnfgGy/IMG-4452.jpg", desc: "Vestido versátil corto de mangas largas color blanco. Incluye lindo acabado en mangas y busto.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 67, name: "Enterizo color café  claro", category: "Enterizos", price: 25, img: "https://i.postimg.cc/Hk55ZzQ3/IMG-4453.jpg", desc: "Enterizo atrevido color café  claro.", sizes: "XS ,S ,M  ,L y XL", featured: true },
  { id: 68, name: "Conjunto color café  claro", category: "Conjuntos", price: 23, img: "https://i.postimg.cc/pTVFdt31/IMG-4454.jpg", desc: "Conjunto casual color café  claro. Incluye pieza de falda corta y camisa manga larga.", sizes: "XS ,S ,M  ,L y XL", featured: true },
];

// Renderizar productos
function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center text-pink-300 py-8 text-xl">No se encontraron productos.</div>`;
    return;
  }
  list.forEach(prod => {
    container.innerHTML += `
      <div class="bg-white rounded-2xl shadow hover:shadow-xl transition fade-img group overflow-hidden flex flex-col">
        <img src="${prod.img}" alt="${prod.name}" class="w-full h-56 object-cover rounded-t-2xl transition duration-500 group-hover:scale-105" />
        <div class="p-4 flex-1 flex flex-col justify-between">
          <h3 class="text-lg font-bold mb-2 text-pink-500 group-hover:text-pink-600 transition">${prod.name}</h3>
          <p class="text-sm mb-2 text-gray-500">${prod.desc}</p>
          <p class="text-sm mb-2 text-gray-400">Talla disponible: <span class="font-semibold text-pink-400">${prod.sizes}</span></p>
          <div class="flex items-center justify-between mt-auto">
            <span class="font-semibold text-pink-400 text-lg">$${prod.price}</span>
            <button class="btn-animate px-4 py-2 bg-pink-200 text-white rounded-lg font-semibold shadow hover:bg-pink-400 transition"
              onclick="openModal('${prod.img}')">Ver</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Filtros
function applyFilters() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  const price = document.getElementById('priceFilter').value;
  let filtered = products.filter(p => 
    (p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search))
    && (!category || p.category === category)
    && (
      !price ||
      (price === 'low' && p.price < 15) ||
      (price === 'mid' && p.price >= 15 && p.price <= 22) ||
      (price === 'high' && p.price > 22)
    )
  );
  renderProducts(filtered, 'productGrid');
}

document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('categoryFilter').addEventListener('change', applyFilters);
document.getElementById('priceFilter').addEventListener('change', applyFilters);

// Render inicial
renderProducts(products, 'productGrid');
renderProducts(products.filter(p => p.featured), 'featuredGrid');

// Menú móvil
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});
window.addEventListener('resize', () => {
  if(window.innerWidth >= 768) mobileMenu.classList.add('hidden');
});

// Modal para imágenes
// Agrega este HTML al final del <body> de tu index.html:
// <div id="imgModal" class="fixed inset-0 bg-black bg-opacity-70 hidden items-center justify-center z-50">
//   <span id="closeModal" class="absolute top-5 right-5 text-white text-3xl cursor-pointer">&times;</span>
//   <img id="modalImg" src="" class="max-w-3xl max-h-[90%] rounded-lg shadow-lg" />
// </div>

const imgModal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

function openModal(src){
  modalImg.src = src;
  imgModal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => imgModal.classList.add('hidden'));

// Cerrar modal si se hace click fuera de la imagen
imgModal.addEventListener('click', e => {
  if(e.target === imgModal) imgModal.classList.add('hidden');
});