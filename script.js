document.getElementById("switch").addEventListener("click", toggleMode)

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de João Vitor, usando casaco branco, barba e fundo com luz apagada"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de João Vitor, usando casaco branco, barba e fundo degrade rosa para azul"
    )
  }
}
