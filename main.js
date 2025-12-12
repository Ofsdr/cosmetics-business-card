const area = document.getElementById("card");
const obj = document.querySelector(".someP");

area.addEventListener("mouseover", () => obj.classList.add("show"));
area.addEventListener("mouseout", () => obj.classList.remove("show"));