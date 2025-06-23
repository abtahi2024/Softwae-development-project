const allProduct=()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        displayProduct(data)
    });
};


const displayProduct=(Products)=>{
    const productContaine=document.getElementById("product-container");

    Products.forEach((product)=>{
        console.log(product);
        const div=document.createElement("div");
        div.classList.add("card");
        div.innerHTML=`
        <img class="img-card" src=${product.image} alt="">
        <h3>${product.title.slice(0,20)}</h3>
        <h5>Price :${product.price}</h5>
        <p>${product.description}</p>
        <button onclick="singleProduct('${product.id}')">details</button>
        <button onclick="handleadd('${product.title}',${product?.price})">
        Add cart</button>
        `
        productContaine.appendChild(div);
    });
};

const handleadd=(nm,pie)=>{
    const cartcount=document.getElementById("count").innerText;
    
    let convartedcount=parseInt(cartcount);
    convartedcount=convartedcount+1;
    document.getElementById("count").innerText=convartedcount;
    console.log(convartedcount);

    const containers=document.getElementById("cart-main-container");
    console.log(nm,pie);
    const div=document.createElement("div");
    div.classList.add("cart-info")
    div.innerHTML=`
    <p>${nm}</p>
    <h3 >price:- <span class="price"> ${pie}</span></h3>
    `;
    containers.appendChild(div);
    updatetotal();
}

const updatetotal=()=>{
    const allprice=document.getElementsByClassName("price");
    
    let count=0;
    for(const element of allprice)
        { 
            count= count+parseFloat(element.innerText); 
            console.log(count);
            console.log(element);
        }
    document.getElementById("total").innerText=count.toFixed(2);
}

const singleProduct = (id) => {
    console.log(id);
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => displayProduct(json));
};

allProduct();