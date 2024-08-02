let stockView=document.getElementById('stockView');
let generateStoreRoom = () => {
   return  stockView.innerHTML = stocks.map((x) => {
        let { id, productName, veiety, quantity, rate, productImg } = x;
        return `
            <div class="productCard" id="product-id-${id}">
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
                    <div id="${id}" class="quantities">0</div>
                    <i onclick="increment('${id}')" class="fa-solid fa-plus"></i>
                  </div>
               </div>
           </div>
        `;
    }).join("");
};

generateStoreRoom();

// this is the empty array to push and pop products
let addedStocks=[];
//function to increase the quantity of the product
let increment=(id)=>{
    let selectedItem=id;
    let search=addedStocks.find(x=>x.id===selectedItem);
    if(search==undefined){
        addedStocks.push({id:selectedItem,item:1});
        // console.log(addedStocks);
    }
    else{
        search.item+=1;
        // console.log(addedStocks);
    }
    update(id);
}

// function to decrement the quantity of the product

let decrement=(id)=>{
    let selectedItem=id;
    let search=addedStocks.find(x=>x.id===selectedItem);
    if(search==undefined){
        alert(`you never added ${id}`);
        // console.log(addedStocks);
    }
    else if(search.item==0) return;
    else{
        search.item-=1;
        // console.log(addedStocks);
    }
    update(id);
}

// function to update increased and decreased quantity of a product

let update=(id)=>{
    let search=addedStocks.find(x=>x.id===id);
    console.log(search);
    document.getElementById(id).innerHTML=search.item;
    cartUpdate();
}
// function to update the total quantity to the main cart logo
let cartUpdate=()=>{
    let total=addedStocks.map(x=>x.item);

    document.getElementById('badge').innerHTML=total.reduce((x,y)=>x+y,0);
    // console.log(current);
}