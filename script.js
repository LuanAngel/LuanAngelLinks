document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".content-section");
    
    // initially, hide all additional content
    sections.forEach(section => {
      section.style.display = "none";
    });
    
    const navLinks = document.querySelectorAll("nav a[href^='#']");
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        
        if (targetId === "home") {
          // hide all additional content if 'Home' is clicked
          sections.forEach(section => {
            section.style.display = "none";
          });
        } else {
          // show this section and hide others
          sections.forEach(section => {
            section.style.display = (section.id === targetId) ? "block" : "none";
          });
        }
      });
    });
  });
  