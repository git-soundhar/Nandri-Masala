let stockView=document.getElementById('stockView');
let generateStoreRoom = () => {
   return  stockView.innerHTML = stocks.map((x) => {
        let { id, productName, veiety, quantity, rate, productImg } = x;
        return `
            <div class="productCard" id="product-id-${id}">
               <div class="cardImgContainer">
                  <img src="${productImg}"  alt="${id}"/>
               </div>
               <div class="productDescription">
                 <p class="productVariety">${veiety}</p> <!-- Corrected 'veiety' to 'variety' -->
                 <h4 class="productName">${productName}</h4>
                 <p class="quantity">${quantity} grams</p>
               </div>
               <div class="purchaseArea">
                  <span class="productRate">&#8377; ${rate}</span>
                  <div class="decideQuantity">
                    <i onclick="decrement('${id}')" class="fa-solid fa-minus"></i>
                    <div id="${id}" class="quantities">0</div>
                    <i onclick="increment('${id}')" class="fa-solid fa-plus"></i>
                  </div>
               </div>
           </div>
        `;
    }).join("");
};

generateStoreRoom();

let addedStocks=[];

//usedto increase the quantity
let increment=(id)=>{
    let selectedItem=id;
    let search=addedStocks.find(x=>x.id===selectedItem);
    console.log(search);
    if(search==undefined){
        addedStocks.push({id:`${id}`,item:1})
        
        console.log(addedStocks);
    }
    else{
        search.item +=1;
        console.log(addedStocks);
    }
    update(selectedItem);
};
// used to decrease the quantity
let decrement=(id)=>{
    let selectedItem=id;
    let search=addedStocks.find(x=>x.id===selectedItem);
    if(search===undefined){
        alert(`you never added ${id}`);
    }
    else if(search.item===0) return;
    else{
        search.item -=1;
        console.log(search);
    }
    // used to show increment of the quantity
    update(selectedItem);
}; 


// used to update the quantity
let update=(id)=>{
   let search=addedStocks.find(x=>x.id===id);
   document.getElementById(id).innerHTML=search.item;
   console.log(addedStocks,"console from update");
   mainCart();
}

let mainCart=()=>{
   let totalProduct=addedStocks.map(x=>x.item);
   let mainCartNotification=document.getElementById('badge');
   mainCartNotification.innerHTML=totalProduct.reduce((x,y)=>x+y,0);
}