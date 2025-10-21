const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !menuList.contains(e.target)) {
    menuList.style.display = "none";
  }
});
