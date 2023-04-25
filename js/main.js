let btnDescuento = document.querySelector('.btn');
let circulo = document.querySelector('.circulo');
let barra = document.querySelector('.linea');


btnDescuento.addEventListener('click', ()=>
    btnDescuento.classList.toggle('btn-activo')
    
    )



circulo.addEventListener('mousemove', ()=>{
    console.log('hola')
    rango();
})


function rango(){
   
    barra.style.width = '10% ' ;
}