
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const hash = a.getAttribute('href');
    if(hash.length>1){
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

document.getElementById('downloadBtn').addEventListener('click', ()=>{
  
  window.print();
});


const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-mode');

  const icon = toggle.querySelector('i');
  if(document.body.classList.contains('dark-mode')){
    icon.className = 'bi bi-sun';
  } else {
    icon.className = 'bi bi-moon';
  }
});
