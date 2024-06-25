//selecting plus-button,popup-overlay,popup-message

var plusbutton = document.querySelector("#plus-button")
var popupoverlay = document.querySelector(".popup-overlay")
var popupmessage = document.querySelector(".popup-message")

plusbutton.addEventListener("click",function(){
    popupmessage.style.display="block"
    popupoverlay.style.display="block"
});


//select cancel and add button

//namba add button click panamothu entha popupmessage and popup overlay oda display block change pannum
//but cancel and add ku ethvum set panla but default ha antha button click panamothu page cancel agathu 
//so atha preventDefault use pani stop panrom

var cancelbutton = document.getElementById("cancel-book")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault() //default cancel agarthu stop panitu 
    popupmessage.style.display="none" //epo lam nan cancel click panrona apo display none panrom
    popupoverlay.style.display="none" //epo lam nan cancel click panrona apo display none panrom
})

//when i click add button that time which was inside the overal container all must be selected
//selecting container,add-book,title-input,author-input,title-details
var container = document.querySelector(".container")
var addbutton = document.getElementById("add-book")
var title = document.getElementById("title-input")
var author = document.getElementById("author-input")
var details = document.getElementById("title-details")


addbutton.addEventListener("click",function(event){
    event.preventDefault()//default cancel agarthu stop panitu 
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>  //when we use dollor symbol that time we won't use double quotation
    <h5>${author.value}</h5>
     <p>${details.value}</p>
     <button onclick="clearbutton(event)">Clear</button> `
    container.append(div)
    popupmessage.style.display="none"
    popupoverlay.style.display="none"
})


function clearbutton(event){
    event.target.parentElement.remove()
}
