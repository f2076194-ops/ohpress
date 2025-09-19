// Datos de productos actualizados
const products = [
  { id: 1, name: "Vestido color vino", category: "Vestidos", price: 22, img: "https://i.postimg.cc/15cP7Y8q/IMG-20250918-WA0062.jpg", desc: "Vestido elegante color vino.", sizes: "M", featured: true },
  { id: 2, name: "Vestido color negro", category: "Vestidos", price: 22, img: "https://i.postimg.cc/m2GBwGg4/IMG-20250918-WA0065.jpg", desc: "Vestido clásico color negro.", sizes: "M", featured: true },
  { id: 3, name: "Vestido color rojo", category: "Vestidos", price: 20, img: "https://i.postimg.cc/J7XRZhmK/IMG-20250919-WA0005.jpg", desc: "Vestido llamativo color rojo.", sizes: "M", featured: false },
  { id: 4, name: "Vestido color blanco", category: "Vestidos", price: 22, img: "https://i.postimg.cc/jjTf01cY/IMG-20250918-WA0059.jpg", desc: "Vestido fresco color blanco.", sizes: "L", featured: false },
  { id: 5, name: "Top color marrón", category: "Tops", price: 13, img: "https://i.postimg.cc/LsV1HVQY/IMG-20250918-WA0067.jpg", desc: "Top versátil color marrón.", sizes: "M", featured: true }
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