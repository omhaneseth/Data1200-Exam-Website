        function frontButton() {
          var front = document.getElementById("frontMenu");
          var dinner = document.getElementById("dinnerMenu");
          var breakfast = document.getElementById("breakfastMenu");
          var snacks = document.getElementById("snacksMenu");

          var dinnerM = document.getElementById("mobileDinnerMenu");
          var breakfastM = document.getElementById("mobileBreakfastMenu");
          var snacksM = document.getElementById("mobileSnacksMenu");

          var bButton = document.getElementById("breakfastButton");
          var dButton = document.getElementById("dinnerButton");
          var sButton = document.getElementById("snacksButton");

          if (front.className === "menuOverview") {
            front.className += " showOverview";
            dinner.className = "menuOverview";
            snacks.className = "menuOverview";
            breakfast.className = "menuOverview";

            bButton.className = "";
            dButton.className = "";
            sButton.className = "";
          }

            breakfastM.className = "mobileMenuOverview";
            dinnerM.className = "mobileMenuOverview";
            snacksM.className = "mobileMenuOverview";
        }

        function breakfastButton() {
          var front = document.getElementById("frontMenu");
          var dinner = document.getElementById("dinnerMenu");
          var breakfast = document.getElementById("breakfastMenu");
          var snacks = document.getElementById("snacksMenu");

          var breakfastM = document.getElementById("mobileBreakfastMenu");

          var bButton = document.getElementById("breakfastButton");
          var dButton = document.getElementById("dinnerButton");
          var sButton = document.getElementById("snacksButton");

          if (breakfast.className === "menuOverview") {
            breakfast.className += " showOverview";
            dinner.className = "menuOverview";
            snacks.className = "menuOverview";
            front.className = "menuOverview";
          }

          if (bButton.className === "") {
            bButton.className += " activeMenuButton";
            if (innerWidth > 850) {
              dButton.className = "";
              sButton.className = "";
            }
          } else {
            bButton.className = "";
          }

          if (breakfastM.className === "mobileMenuOverview") {
            breakfastM.className += " showOverviewMobile";
          } else {
            breakfastM.className = "mobileMenuOverview";
          }
        }

        function dinnerButton() {
          var front = document.getElementById("frontMenu");
          var dinner = document.getElementById("dinnerMenu");
          var breakfast = document.getElementById("breakfastMenu");
          var snacks = document.getElementById("snacksMenu");

          var dinnerM = document.getElementById("mobileDinnerMenu");

          var bButton = document.getElementById("breakfastButton");
          var dButton = document.getElementById("dinnerButton");
          var sButton = document.getElementById("snacksButton");

          if (dinner.className === "menuOverview") {
            dinner.className += " showOverview";
            breakfast.className = "menuOverview";
            snacks.className = "menuOverview";
            front.className = "menuOverview";
          }

          if (dButton.className === "") {
            dButton.className += " activeMenuButton";
            if (innerWidth > 850) {
              bButton.className = "";
              sButton.className = "";
            }
          } else {
            dButton.className = "";
          }

          if (dinnerM.className === "mobileMenuOverview") {
            dinnerM.className += " showOverviewMobile";
          } else {
            dinnerM.className = "mobileMenuOverview";
          }
        }

        function snacksButton() {
          var front = document.getElementById("frontMenu");
          var dinner = document.getElementById("dinnerMenu");
          var breakfast = document.getElementById("breakfastMenu");
          var snacks = document.getElementById("snacksMenu");

          var snacksM = document.getElementById("mobileSnacksMenu");

          var bButton = document.getElementById("breakfastButton");
          var dButton = document.getElementById("dinnerButton");
          var sButton = document.getElementById("snacksButton");

          if (snacks.className === "menuOverview") {
            snacks.className += " showOverview";
            breakfast.className = "menuOverview";
            dinner.className = "menuOverview";
            front.className = "menuOverview";
          }

          if (sButton.className === "") {
            sButton.className += " activeMenuButton";
            if (innerWidth > 850) {
              dButton.className = "";
              bButton.className = "";
            }
          } else {
            sButton.className = "";
          }

          if (snacksM.className === "mobileMenuOverview") {
            snacksM.className += " showOverviewMobile";
          } else {
            snacksM.className = "mobileMenuOverview";
          }
        }
