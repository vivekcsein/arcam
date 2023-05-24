
const bar_icon = document.getElementById("bar_icon");
const nav_bar = document.getElementsByClassName("nav_bar");
// const nav = document.getElementsByTagName("nav");

bar_icon.onclick = () => {
    if (bar_icon.classList.contains("fa-bars")) {
        bar_icon.classList.remove("fa-bars");
        bar_icon.classList.add("fa-times");
        nav_bar.style.display = "none"

    } else {
        bar_icon.classList.remove("fa-times");
        bar_icon.classList.add("fa-bars");
    }
}