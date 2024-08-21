addedStocks=JSON.parse(localStorage.getItem('data')) || [];
let label=document.getElementById('label');
let subTotal=document.getElementById('cartSubTotal');

let selectedProducts=document.getElementById('selectedProductsContainer');


let generateCartItems = () =>{
   if(addedStocks.length!=0){
      label.innerHTML="";
     return selectedProducts.innerHTML = addedStocks.map((x) => {
       let {id,item} = x;
       let search = stocks.find((x) => x.id === id) || [];
       let quickSearch=addedStocks.find((x) => x.id === id) || [];
       console.log(quickSearch,'fromquicksearch');
       return`        
<div class="selectedProducts">
             <!-- selected products image container -->
               <div class="selectedImgContainer">
                  <img src="${search.productImg}"/>
               </div>
               <!-- selected products Description container -->
               <div class="descriptionContainer">
                  <div class="row-1">
                     <span class="selectedProductName">${search.productName}</span>
                     <i class="fa-solid fa-x" id="removeProduct" onclick=removeItem(${id});></i>
                  </div>
                  <div class="row-2">
                     <span class="selectedProductsQuantity">${search.quantity} gram</span>
                     <span class="selectedProductsPrice">&#8377; ${search.rate}</span>
                  </div>
                  <div class="row-3">
                     <span class="selectedTotalProductsPrice" id="selectedTotalProductsPrice">Total amount: &#8377; <b>${search.rate*quickSearch.item}</b></span>
                  </div>
                  <!-- increment decrement section -->
                  <div class="row-3 decideQuantity">
                     <i class="fa-solid fa-minus" onclick="decrement('${id}')"></i>
                     <div class="quantities" id=${id}> ${quickSearch===undefined ? 10 : quickSearch.item} </div>
                     <i class="fa-solid fa-plus"  onclick="increment('${id}')"></i>
                  </div>
               </div>
           </div>
             `
     });       
   }
   else{
       label.innerHTML="Cart Is Empty !!!";
       selectedProducts.innerHTML="";
   }
}
generateCartItems();


increment=(id)=>{
   let selectedItem=id;
   let search=addedStocks.find((x) => x.id === selectedItem);

   if(search === undefined){
       addedStocks.push({id:selectedItem,
                         item:1
                       });
   }
   else{
       search.item += 1;
   }
   update(id); 
   cartUpdate();
   generateCartItems();
   localStorage.setItem('data',JSON.stringify(addedStocks));
   
}

// function to decrement the quantity of the product

decrement=(id)=>{
   let selectedItem=id;
   let search=addedStocks.find((x)=>x.id==selectedItem);
   if(search==undefined){
       alert(`you  never added ${selectedItem}`);
   }
   else if(search.item===0) return;
   else{
       search.item-=1;
   }
   update(id);
   addedStocks=addedStocks.filter((x) => x.item!=0);
   
   localStorage.setItem('data',JSON.stringify(addedStocks));
   
   generateCartItems();
   cartUpdate();
}
// function to update increased and decreased quantity of a product
 update=(id)=>{
  let updateqty=document.getElementById(id);
  let search=addedStocks.find((x)=>x.id===id);
  updateqty.innerHTML=search.item;
}

// function to update the total quantity to the main cart logo

 cartUpdate=()=>{
 let totalQty=addedStocks.map((x)=>x.item);
 document.getElementById('badge').innerHTML=totalQty.reduce((x,y)=>x+y,0);
}
cartUpdate();

