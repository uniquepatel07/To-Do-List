let inp = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");

function addele(){
    let taskList = document.createElement("li");
    taskList.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "x";
    delbtn.classList.add("delete")


    taskList.appendChild(delbtn);
    list.appendChild(taskList);
    inp.value = "";
}

btn.addEventListener("click", function(ev){
    let taskList = document.createElement("li");
    taskList.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "x";
    delbtn.classList.add("delete")


    taskList.appendChild(delbtn);
    list.appendChild(taskList);
    inp.value = "";
});

inp.addEventListener("keypress", function(event){
    if(event.key =="Enter"){
    let taskList = document.createElement("li");
    taskList.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "x";
    delbtn.classList.add("delete")


    taskList.appendChild(delbtn);
    list.appendChild(taskList);
    inp.value = "";
        
    }
})

list.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove();
    }
})



// let deleteBtns = document.querySelectorAll(".delete");

// for(deleteBtn of deleteBtns){
//     deleteBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//         console.log(par);
        
//     })
// }  