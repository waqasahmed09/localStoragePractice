
let div = document.querySelector("#div");

let cart = []

const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]


for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    const phoneInfo = `Brand: ${phone.brand}, 
    Model: ${phone.model}, RAM: ${phone.ram}GB, 
    ROM: ${phone.rom}GB, 
    Camera: ${phone.camera}, 
    Price: $${phone.price}`;

    div.innerHTML += `<p>${phoneInfo}</p> <br/>
    <button  onclick="addToCart(${i})"> Add to Cart </button>`
}


function addToCart(i) {
    cart.push(phones[i]);
    console.log(cart);   
    Swal.fire({
        title: "Added",
        text: "product added successfully!",
        icon: "success"
      });


}

let checkoutbtn  = document.querySelector("#checkout");

checkoutbtn.addEventListener('click', (event) => {
    event.preventDefault(event);
    console.log(cart);

    localStorage.setItem('items', JSON.stringify(phones));

    window.location = 'checkout.html'




})



