const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


// <!DOCTYPE html>

// <head>
//     <title>Grocery List</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <h1>Grocery List</h1>
//     <form action="/nowhere">
//         <label for="item">Enter A Product</label>
//         <input type="text" id="product" name="product">
//         <label for="item">Enter A Quantity</label>
//         <input type="number" id="qty" name="qty">
//         <button>Submit</button>
//     </form>

//     <ul id="list"></ul>
// </body>

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

const prodContainer = document.querySelector('ul');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const quantInput = form.elements.qty;
    const prodInput = form.elements.product;
    addProduct(quantInput.value, prodInput.value);
    quantInput.value = '';
    prodInput.value = '';
})

const addProduct = (quant, prod) => {
    const newProduct = document.createElement('li');
    newProduct.append(quant);
    newProduct.append(` ${prod}`);
    prodContainer.append(newProduct);
}