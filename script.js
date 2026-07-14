const welcome=document.getElementById('welcome');
window.addEventListener('load',()=>setTimeout(()=>welcome.classList.add('hide'),1500));
document.getElementById('year').textContent=new Date().getFullYear();
const box=document.getElementById('lightbox'), boxImg=box.querySelector('img');
document.querySelectorAll('.menu-item').forEach(item=>item.addEventListener('click',()=>{boxImg.src=item.dataset.full;box.classList.add('open');document.body.style.overflow='hidden'}));
function closeBox(){box.classList.remove('open');document.body.style.overflow='';boxImg.src=''}
box.querySelector('.lightbox-close').addEventListener('click',closeBox);
box.addEventListener('click',e=>{if(e.target===box)closeBox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
