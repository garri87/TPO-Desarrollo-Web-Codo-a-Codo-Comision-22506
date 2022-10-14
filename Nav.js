
    const header = document.createElement("header");
   

    header.setAttribute("id", "Navigation");
    
    const logo = document.createElement("h1");
    logo.setAttribute("class","logo");
    logo.innerHTML = "Luigi Rosca";
    const nav = document.createElement("nav");
    const inicio = createNavLink("INICIO");
    const historia = createNavLink("HISTORIA");
    const vinedos = createNavLink("VIÑEDOS");
    const vinos = createNavLink("VINOS");
    const bodega = createNavLink("BODEGA");
    const enoturismo = createNavLink("ENOTURISMO");
    const contacto = createNavLink("CONTACTO");
    
    inicio.setAttribute("href", "index.html");
    historia.setAttribute("href", "historia.html");
    contacto.setAttribute("href", "Contacto.html");
    vinedos.setAttribute("href", "vinedos.html");
    vinos.setAttribute("href", "vinos.html");
    bodega.setAttribute("href", "bodega.html");
    enoturismo.setAttribute("href", "enoturismo.html");

    document.body.appendChild(header);
    header.appendChild(logo);
    header.appendChild(nav);
    nav.appendChild(inicio);
    nav.appendChild(historia);
    nav.appendChild(vinedos);
    nav.appendChild(vinos);
    nav.appendChild(bodega);
    nav.appendChild(enoturismo);
    nav.appendChild(contacto);

function createNavLink(title) {

    const link = document.createElement("a");
    link.innerHTML = title;
    return link;
}
