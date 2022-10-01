let typeHere = document.querySelector("#typeHere");
let addToDoButton = document
  .querySelector("#addTodo")
  .addEventListener("click", addToList);
let toDoContainer = document.querySelector("#toDoContainer");

 let clearList = document
  .querySelector("#clearList")
  .addEventListener("click", clearAll);

function addToList() {
  let li = document.createElement("li");
  li.innerText = typeHere.value;

  toDoContainer.appendChild(li);
  typeHere.value = " ";
}
function clearAll (){

   document.querySelectorAll("li").forEach(item=>{
  item.remove()
 })
}
function removeCompleted (){
  // console.log("clicked button")
    document.querySelectorAll(".strikethrough").forEach(item=>{
    item.remove()
    })
  }