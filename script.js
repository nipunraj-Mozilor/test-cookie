const overlay = document.createElement('div')
overlay.id = 'overlay'
document.body.appendChild(overlay)

// overlay.style.position = 'absolute'
// overlay.style.top = '0'
// overlay.style.left = '0'
// overlay.style.width = '100%'
// overlay.style.height = '100%'
// overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
// overlay.style.zIndex = '9999'
// overlay.style.display = 'none'

window.onload = () => {
  overlay.style.display = 'block'
}
