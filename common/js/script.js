window.onload = function() {
  const cursor = document.querySelector(".cursor");
  const circles = document.querySelectorAll(".circle-wrap .circle");

  function cursorMove(e) {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  }

  window.addEventListener("mousemove", cursorMove);
}
