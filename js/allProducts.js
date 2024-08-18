
    let stockView=document.getElementById('stockView');
    // this is the empty array to push and pop products
let addedStocks = JSON.parse(localStorage.getItem('data')) || [];
let generateStoreRoom = () => {
    return stockView.innerHTML = stocks.map((x) => {
        let {id,productName,veiety, quantity,rate,productImg} = x;
        let search = addedStocks.find((x) => x.id === id) || []; //i need more undersatand
        return `
               <div class="productCard" id="product-id-${id}" title="${productName}">
               <div class="cardImgContainer">
                  <img src="${productImg}"  alt="${productName}"/>
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
                    <div id="${id}" class="quantities">${ search.item === undefined ? 0 : search.item}</div>
                    <i onclick="increment('${id}')" class="fa-solid fa-plus"></i>
                   </div> 
               </div>
           </div>
        `
}).join("");
};
generateStoreRoom();

// function to increase the quantity of the product
// let incDecNote=document.getElementById('incDecNote');


let increment=(id)=>{
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
    localStorage.setItem('data',JSON.stringify(addedStocks));
}

// function to decrement the quantity of the product

let decrement=(id)=>{
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
    cartUpdate();
    addedStocks=addedStocks.filter((x) => x.item!=0);
    localStorage.setItem('data',JSON.stringify(addedStocks));
}
// function to update increased and decreased quantity of a product
let update=(id)=>{
   let updateqty=document.getElementById(id);
   let search=addedStocks.find((x)=>x.id===id);
   updateqty.innerHTML=search.item;
}

// function to update the total quantity to the main cart logo

let cartUpdate=()=>{
  let totalQty=addedStocks.map((x)=>x.item);
  document.getElementById('badge').innerHTML=totalQty.reduce((x,y)=>x+y,0);
}
cartUpdate();
