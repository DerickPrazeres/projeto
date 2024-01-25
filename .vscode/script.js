function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector('#profile img')

 // if(html.classList.contains('light')) {
    //html.classList.remove('light')
  //} else {
   // html.classList.add('light')
   
   if(html.classList.contains('light')) {
// quando estiver em light mode, add a imagem light
    img.setAttribute("src", "./assets/derick-light.png")
   } else {
// quando não em light mode, manter a img normal
    img.setAttribute("src", "./assets/derick.png")
   }

  }
  
