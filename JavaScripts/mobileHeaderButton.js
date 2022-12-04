
// Kode som fjerner/legger til en klasse basert på knappetrykk i html
// Koden er hentet fra W3schools: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function mobileMenuButton() {
          var x = document.getElementById("theMobileNav");
          if (x.className === "mobileNav") {
            x.className += " showMenu";
          } else {
            x.className = "mobileNav";
          }
        }