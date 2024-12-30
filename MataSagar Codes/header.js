document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.createElement("header");
    header.className = "header";

   
    header.innerHTML = `
        <h1>MATA SAGAR BAKERS</h1>
        <nav>
            <ul class="nav-menu">
                <li><a href="index.html">Products</a></li>
                <li><a href="Daily Special.html">Daily Specials</a></li>
                <li><a href="ContactDetails.html">Contact</a></li>
            </ul>
        </nav>
    `;

   
    document.body.prepend(header);
});