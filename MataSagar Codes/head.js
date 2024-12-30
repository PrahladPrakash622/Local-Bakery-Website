document.addEventListener("DOMContentLoaded", () => {
  
    const head = document.getElementsByTagName("head")[0];

    
    const metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charset", "UTF-8");

    const metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

   
    const title = document.createElement("title");
    title.textContent = "Mata Sagar Bakery";

   
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "bakery.css");

   
    head.appendChild(metaCharset);
    head.appendChild(metaViewport);
    head.appendChild(title);
    head.appendChild(link);
});