

let checkedPoducts = document.querySelector("#checkedPoducts");


let phones = localStorage.getItem('items');
let strObj = JSON.parse(phones);

console.log(strObj);

// for (let i = 0; i < phones.length; i++) {
//     const phone = phones[i];
//     const phoneInfo = `Brand: ${phone.brand}, 
//     Model: ${phone.model}, RAM: ${phone.ram}GB, 
//     ROM: ${phone.rom}GB, 
//     Camera: ${phone.camera}, 
//     Price: $${phone.price}`;

    // phones.innerHTML += `<p>${phones}</p> <br/>`
    