let showMenu=document.getElementById('menuTrue');
showMenu.addEventListener('click',(e)=>{
    let mobNav=document.getElementById('mobilenav');
    mobNav.classList.toggle("showMenu");
});
let closeMenu=document.getElementById('closeMenu');
closeMenu.addEventListener('click',(e)=>{
    let mobNav=document.getElementById('mobilenav');
    mobNav.classList.toggle("showMenu");
});


let openCartIcon=document.getElementById('cartLogo');
openCartIcon.addEventListener('click',(e)=>{
    document.getElementById('mainCart').classList.toggle('cartOpen');
    document.getElementById('mainNav').classList.toggle('opacityBackground');
    document.getElementById('stockView').classList.toggle('opacityBackground');     
});

//code to close the cart
let closeCartIcon=document.getElementById('closeCart');
closeCartIcon.style='cursor:pointer';
closeCartIcon.addEventListener('click',(e)=>{
    document.getElementById('mainCart').classList.toggle('cartOpen');
    // when i click the cart button the cart is open whil the background of body or other should be blured
    document.getElementById('mainNav').classList.toggle('opacityBackground');
    document.getElementById('mainCart').classList.add('smooth');
    document.getElementById('stockView').classList.toggle('opacityBackground'); 
});