function mobileMenuButton() {
          var x = document.getElementById("theMobileNav");
          if (x.className === "mobileNav") {
            x.className += " showMenu";
          } else {
            x.className = "mobileNav";
          }
        }
