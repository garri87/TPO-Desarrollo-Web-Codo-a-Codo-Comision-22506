
    const header = document.createElement("header");
   

    header.setAttribute("id", "Navigation");
    
    const logo = document.createElement("h1");
    logo.setAttribute("class","logo");
    logo.innerHTML = "Luigi Rosca";
    const nav = document.createElement("nav");
    const inicio = createNavLink("Inicio");
    const historia = createNavLink("Historia");
    const vinedos = createNavLink("Nuestros Viñedos");
    const vinos = createNavLink("Nuestros Vinos");
    const Enoturismo = createNavLink("Enoturismo");

    const contacto = createNavLink("Contacto");
    
    inicio.setAttribute("href", "index.html");
    historia.setAttribute("href", "Historia.html");
    vinedos.setAttribute("href", "Vinedos.html");
    vinos.setAttribute("href", "Vinos.html");
    Enoturismo.setAttribute("href", "Enoturismo.html")
    contacto.setAttribute("href", "Contacto.html");


    document.body.appendChild(header);
    header.appendChild(logo);
    header.appendChild(nav);
    nav.appendChild(inicio);
    nav.appendChild(historia);
    nav.appendChild(vinedos);
    nav.appendChild(vinos);
    nav.appendChild(Enoturismo);
    nav.appendChild(contacto);

function createNavLink(title) {

    const link = document.createElement("a");
    link.innerHTML = title;
    return link;
}
