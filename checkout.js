

let checkedPoducts = document.querySelector("#checkedPoducts");


let phones = localStorage.getItem('items');
let strObj = JSON.parse(phones);

console.log(strObj);

for (let i = 0; i < strObj.length; i++) {
    const phone = strObj[i];
    
    checkedPoducts.innerHTML += `Brand: ${phone.brand}, 
    Model: ${phone.model}, RAM: ${phone.ram}GB, 
    ROM: ${phone.rom}GB, 
    Camera: ${phone.camera}, 
    Price: $${phone.price} <br> <br>`;

    // checkedPoducts.innerHTML += `<p>${phones}</p> <br/>`
}