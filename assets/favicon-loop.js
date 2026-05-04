(function(){
  const icons = [
    'assets/favicons/favicon-1.svg',
    'assets/favicons/favicon-2.svg',
    'assets/favicons/favicon-3.svg'
  ];
  let i = 0;
  const link = document.querySelector('link[rel="icon"]');
  if (!link) return;
  setInterval(() => {
    i = (i + 1) % icons.length;
    link.href = icons[i];
  }, 800);
})();
