
    const header = document.createElement("header");
   

    header.setAttribute("id", "Navigation");
    
    const logo = document.createElement("h1");
    logo.setAttribute("class","logo");
    logo.innerHTML = "Luigi Rosca";
    const nav = document.createElement("nav");
    const inicio = createNavLink("INICIO");
    const historia = createNavLink("HISTORIA");
    const vinedos = createNavLink("NUESTRO VIÑEDOS");
    const vinos = createNavLink("NUESTROS VINOS");
    const Contacto = createNavLink("CONTACTO");
    
    inicio.setAttribute("href", "index.html");
    historia.setAttribute("href", "#historia");
    

    document.body.appendChild(header);
    header.appendChild(logo);
    header.appendChild(nav);
    nav.appendChild(inicio);
    nav.appendChild(historia);
    nav.appendChild(vinedos);
    nav.appendChild(vinos);
    nav.appendChild(Contacto);

function createNavLink(title) {

    const link = document.createElement("a");
    link.innerHTML = title;
    return link;
}
