function myFunction() {
  let x = document.getElementById("myTopnav");
  let header = document.getElementById("header__nav");
  if (x.className === "topnav") {
    x.className += "responsive";
    header.classList.remove("header__nav--mobile");
  } else {
    x.className = "topnav";
    header.classList.add("header__nav--mobile");
  }
}
