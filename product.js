//selecting side nav-bar, Menu icon

var sidenav = document.getElementById('sidenav')
var menuicon = document.getElementById('menuicon')
var closenav = document.getElementById('close-nav')
var search = document.getElementById('search')
var container = document.getElementById('product-container')
var namelist = container.querySelectorAll('div')


menuicon.addEventListener("click", function(){
    sidenav.style.right = 0;
})

closenav.addEventListener("click",function(){
    sidenav.style.right = "-50%";
})

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()
    
    for(count=0; count<namelist.length; count++){
        var productname = namelist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            namelist[count].style.display = "none"
        }else{
             namelist[count].style.display = "block"
        }
    }
})