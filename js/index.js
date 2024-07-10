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

// onresize=()=>{
// if(window.screen.width<=768){
//     let homeBanner=document.getElementById('homebanner');
//     homeBanner.attributes.src="./nandrimasalaimages/screensize.webp";
//     alert("hello");
// }
// }
