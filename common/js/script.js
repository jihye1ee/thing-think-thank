window.onload = function() {
  const cursor = document.querySelector(".cursor");

  function cursorMove(e) {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  }

  window.addEventListener("mousemove", cursorMove);
}
