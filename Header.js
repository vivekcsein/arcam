
const bar_icon = document.getElementById("bar_icon");
const nav_bar = document.getElementsByClassName("nav_bar");
const nav_bar_ul = document.getElementsByClassName("nav_bar_ul");

function bar_icon_click(x) {
    x.classList.toggle("change");
    Array.from(nav_bar).forEach((element) => {
        // console.log(element.style.display);      
        if (element.style.display == "block") {
            element.style.display = "none";
            Array.from(nav_bar_ul).forEach((element)=>{
                element.style.display = "none";
            });
        }else{
            element.style.display = "block";     
            Array.from(nav_bar_ul).forEach((element)=>{
                element.style.display = "flex";
            });  
        }
    });
}