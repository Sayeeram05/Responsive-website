var sidenav = document.querySelector(".side-nav")

function viewsidenav(){
    var size = sidenav.style
    if(size.left=="0%"){
        size.left="-60%"
    }
    else{
        size.left="0%"
    }
    
}

var list = document.querySelectorAll(".images p")
var imglist = document.querySelectorAll(".collection-images .images")

function collection(event){
    var input = event.target.value.toUpperCase()
    
    for(var i = 0 ; i<list.length ; i++){
        if(list[i].textContent.toUpperCase().indexOf(input) < 0){
            imglist[i].style.display = "none"
        }
        else{
            imglist[i].style.display = "block"
        }
    }

}






