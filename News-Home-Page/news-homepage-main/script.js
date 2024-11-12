const showMenu = ()=>{
    const nav_list = document.querySelector(".nav-list");
    document.write(nav_list.nodeType);
    nav_list.className = "nav-list open";
}
const hideMenu = ()=>{
    const nav_list = document.querySelector(".nav-list");
    nav_list.classList.remove("open");
}