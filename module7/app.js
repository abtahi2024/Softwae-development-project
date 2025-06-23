// const tar= document.getElementsByClassName('title')
const tar=document.getElementById("title");
tar.style.backgroundColor="cyan";

tar.style.color='black'

const allbox=document.getElementsByClassName('box');

for (let i = 0; i < allbox.length; i++) {
    const element = allbox[i];
    element.style.backgroundColor='cyan';

    if(element.innerText=='box-4')
    { element.style.backgroundColor='red';}
}

// document.getElementById("handleAdd").addEventListener("click", () => {
//   const inputValue = document.getElementById("search-box").value;

//   const container = document.getElementById("comment-container");

//   const p = document.createElement("p");
//   p.classList.add("child");
//   p.innerText = inputValue;

//   container.appendChild(p);

//   document.getElementById("search-box").value = "";

//   const allcomment=document.getElementsByClassName("child");

// //   for of loop
// for(const element of allcomment)
//     {
//         element.addEventListener("click",(event)=>
//         {
//             event.target.parentNode.removeChild(element);
//         });
//     }

// });

const handleAdd=(e)=>{
    const inputValue = document.getElementById("search-box").value;

  const container = document.getElementById("comment-container");

  const p = document.createElement("p");
  p.classList.add("child");
  p.innerText = inputValue;

  container.appendChild(p);

  document.getElementById("search-box").value = "";

  const allcomment=document.getElementsByClassName("child");

//   for of loop
for(const element of allcomment)
    {
        element.addEventListener("click",(event)=>
        {
            event.target.parentNode.removeChild(element);
        });
    }
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
    displayData(data);
})
.catch(err=>{
    console.log(err);
});

const displayData = (userData) => {
  const container = document.getElementById("userData-Container");

  userData.forEach((user) => {
    const div = document.createElement("div");
    div.classList.add("user");

    div.innerHTML = `
        <h4>title</h4>
        <p>Description</p>
        <button >Details</button>
        
        `;
    container.appendChild(div);
  });
};