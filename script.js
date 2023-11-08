document.addEventListener("DOMContentLoaded", function() {
    // Reúne todos os links que começam com '#'
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    for (const link of scrollLinks) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    }
});
