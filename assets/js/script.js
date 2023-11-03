document.querySelector('a[href="#categorias"]').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    
    // Rola a página para a seção de categorias com suavidade
    document.querySelector('#categorias').scrollIntoView({ behavior: 'smooth' });
  });
  