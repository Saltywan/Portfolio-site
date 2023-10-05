AOS.init({
    duration: 250,
    easing: 'ease-out', 
    once: true,
    mirror: false
  });


let mybutton = document.getElementById("backtoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // mybutton.classList.add("b-active");
    mybutton.style.display = "block";
  } else {
    // mybutton.classList.remove("b-active");
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// detect scrolling nav

setTimeout(function() {
  const sections = document.querySelectorAll('section');
  const navA = document.querySelectorAll('nav a');
  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY+250 >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navA.forEach(a => {
      a.classList.remove('active');
      if (a.classList.contains(current+"-h")) {
        a.classList.add('active')
      }
    })

  });
}, 1200);
