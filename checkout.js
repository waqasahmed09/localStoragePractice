

let checkedPoducts = document.querySelector("#checkedPoducts");


let phones = localStorage.getItem('items');
let strObj = JSON.parse(phones);

console.log(strObj);

for (let i = 0; i < strObj.length; i++) {
    const phone = strObj[i];

    checkedPoducts.innerHTML += ` <img src="${phone.image}" alt="${phone.title}" style="max-width: 100px; max-height: 100px;">
    <p>
      Brand: ${phone.brand},<br>
      Model: ${phone.title},<br>
      Price: $${phone.price.toFixed(2)}
    </p>`;


}


// checkout.js:14 Uncaught ReferenceError: product is not defined
//     at checkout.js:14:47











// const phones = [
//     {
//         brand: 'Samsung',
//         model: 'S20',
//         ram: 8,
//         rom: 256,
//         camera: '20 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Xiomi',
//         model: 'note10',
//         ram: 4,
//         rom: 64,
//         camera: '10 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Infinix',
//         model: 'z10',
//         ram: 2,
//         rom: 16,
//         camera: '5 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Tecno',
//         model: 'spark10',
//         ram: 12,
//         rom: 512,
//         camera: '25 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Iphone',
//         model: '14',
//         ram: 4,
//         rom: 1024,
//         camera: '30 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Oppo',
//         model: 'F11',
//         ram: 8,
//         rom: 256,
//         camera: '20 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Vivo',
//         model: 'y20',
//         ram: 4,
//         rom: 64,
//         camera: '8 megapixel',
//         price: 15000
//     },
//     {
//         brand: 'Abdullah',
//         model: 's50',
//         ram: 50,
//         rom: 1024,
//         camera: '60 megapixel',
//         price: 300000
//     },

// ]