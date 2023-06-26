const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarToggleBtn = document.querySelector(".sidebar-toggle");

sidebarToggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});