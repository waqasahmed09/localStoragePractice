

let checkedPoducts = document.querySelector("#checkedPoducts");


let phones = localStorage.getItem('items');
let strObj = JSON.parse(phones);
git
console.log(strObj);

for (let i = 0; i < strObj.length; i++) {
  const phone = strObj[i];

  checkedPoducts.innerHTML += ` <img src="${phone.image}" alt="${phone.title}" style="max-width: 100px; max-height: 100px;">
    <p>
      Model: ${phone.title},<br>
      Price: $${phone.price.toFixed(2)}
      <button onclick="deleteCart(${i})">Delete</button>
    </p>`;
}

function deleteCart(i) {
  strObj.splice(i, 1);
  let waqasli = localStorage.setItem('items', JSON.stringify(phones))
  console.log(waqasli);
  
}





// let getItems = localStorage.getItem("items");
// let parseItems = JSON.parse(getItems);
// console.log(parseItems);



// let cart = document.querySelector(".cart");
    
// function deleted(){
    
// if(parseItems.length>0){
    
//     cart.innerHTML = ''
//     for(let i = 0; i < parseItems.length; i++){
        
//         console.log(parseItems[i]);
//         cart.innerHTML += `
//         <h1>${parseItems[i].brand}</h1>
//         <h3>${parseItems[i].model}</h3>
//         <h3>${parseItems[i].ram}</h3>
//         <h3>${parseItems[i].rom}</h3>
//         <h3>${parseItems[i].camera}</h3>
//         <h3>${parseItems[i].price}</h3>
//         <br/>
//         <button onclick="deleteItem(${i})">Remove Cart</button>
//         <br/><br/><br/><br/>
//         `
//     }
// }else{
//     cart.innerHTML = `items not found`
// }
    

// }
// deleted();

// function deleteItem(i){

    
//     parseItems.splice(i, 1);

    
//     deleted();
    
//     localStorage.setItem("items", JSON.stringify(parseItems));
//     console.log(parseItems);




// }