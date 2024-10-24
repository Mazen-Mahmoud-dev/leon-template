let navLinksContainer = document.getElementById("nav-links")
let toggleNavLinks = document.getElementById("toggle-nav-icon")
toggleNavLinks.onclick = ()=>{ 
    navLinksContainer.classList.toggle("show-nav-links")
}