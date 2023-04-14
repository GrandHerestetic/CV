function changeNavbar() {
    document.getElementById("app").style.bottom = "0px";
    document.getElementById("app").style.backgroundColor = "#88292f";
    document.getElementById("app").style.border = "";
    document.getElementById("app").style.zIndex = "6";
    document.getElementById("link-1").style.color = "#88292f";
    document.getElementById("link-2").style.color = "#88292f";
  }

  function rechangeNavbar() {
    document.getElementById("app").style.bottom = "40px";
    document.getElementById("app").style.backgroundColor = "#88292f";
    document.getElementById("app").style.border = "1px solid black";
    document.getElementById("app").style.zIndex = "1";
    document.getElementById("link-1").style.color = "white";
    document.getElementById("link-2").style.color = "white";
  }