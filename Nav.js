
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
    const contacto = createNavLink("CONTACTO");
    
    inicio.setAttribute("href", "index.html");
    historia.setAttribute("href", "#historia");
    contacto.setAttribute("href", "Contacto.html");

    document.body.appendChild(header);
    header.appendChild(logo);
    header.appendChild(nav);
    nav.appendChild(inicio);
    nav.appendChild(historia);
    nav.appendChild(vinedos);
    nav.appendChild(vinos);
    nav.appendChild(contacto);

function createNavLink(title) {

    const link = document.createElement("a");
    link.innerHTML = title;
    return link;
}
