// import gallery from './gallery-item.js';
// // console.log('gallery :',gallery);

// const ul = document.querySelector('.gallery');
// const lightbox = document.querySelector('.lightbox')
// const material = document.querySelector('.lightbox__button')
// gallery.forEach(el => {
//   ul.insertAdjacentHTML('afterbegin', 
//   `<li class="gallery__item">
//    <a class="gallery__link">
//       <img class="gallery__image" src="${el.preview}" data-source="${el.original}" 
//       alt="${el.description}"/>
//       <span class="gallery__icon">
//       <i class="material-icons">zoom_out_map</i>
//     </span>
//    </a>
//    </li>`)
// });

// ul.addEventListener('click', e => {
//   console.log('e', e);
//   console.log('e.currentTarget', e.currentTarget);
  
//   if(e.target.nodeName === "IMG"){
//     lightbox.classList.add('is-open')
//     const img = document.querySelector('.lightbox__image');
//     img.src = e.target.dataset.source;
//   }
// })


// material.addEventListener('click', (e) => {
//   if(
//     e.currentTarget === e.target ||
//     e.target.dataset.action === 'CLOSE'
//   ) {
//     lightbox.classList.remove('is-open');
//   } 
// });

// console.log('material', material)

import gallery from './gallery-item.js';

const ul = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const material = document.querySelector('.material-icons')
gallery.forEach(el =>{
ul.insertAdjacentHTML('afterbegin',
`<li class="gallery__item">
<a class="gallery__link">
<img class="gallery__image" src="${el.preview}" data-source="${el.original}"
alt="${el.description}"/>
<span class="gallery__icon">
     <i class="material-icons">zoom_out_map</i>
   </span>
 </a>
</li>`)
});
ul.addEventListener('click', e =>{
 if(e.target.nodeName === "IMG"){
   lightbox.classList.add('is-open')
   const img = document.querySelector('.lightbox___image');
   img.src = e.target.dataset.source;
   img.setAttribute("alt", e.target.getAttribute("alt"));
    // img.src = e.target.setAttribute(data-source);
 }
})

lightbox.addEventListener('click', e => {
  if(
    e.target.nodeName !== 'IMG'
  ) {
    lightbox.classList.remove('is-open');
  } 
});

window.addEventListener('keydown', function(e) {
  // console.log('e.keyCode', e.keyCode);
  // console.log('e.keyData', e.key);
  if(
    e.keyCode === 27 
    && lightbox.classList.contains('is-open')
  ) {
    lightbox.classList.remove('is-open');
  }
})


