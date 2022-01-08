const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

controles.addEventListener('change', hlandleChange )

const handleStyle ={
   Element: btn,
   text(value) {
     this.Element.innerText = value 
   },

   color(value) {
      this.Element.style.color = value
   },
   backgroundColor(value) {
      this.Element.style.backgroundColor = value

   },

   height(value) {
      this.Element.style.height = value +'px'
   },
   width (value){
      this.Element.style.width = value +'px'
   },

   border(value) {
      this.Element.style.border = value
   },

   borderRadius (value) {
      this.Element.style.borderRadius = value +'px'
   },

   fontFamily(value) {
      this.Element.style.fontFamily = value
   },
   fontSize(value) {
      this.Element.style.fontSize = value + 'rem'
   },
   
   length: 9,
}
const dados = {}
function hlandleChange(event) {
   const name = event.target.name
   const value = event.target.value
   handleStyle[name](value)
   saveValues(name,value)
   showCss()

}

function saveValues(name, value) {
   localStorage[name]= value
}

function setValues() {
   const properties = Object.keys(localStorage)
   properties.forEach(propertie=> {
      handleStyle[propertie](localStorage[propertie]);
      controles.elements[propertie].value = localStorage[propertie];
      showCss()
   })
   
   
}

setValues();


function showCss() {
   cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

