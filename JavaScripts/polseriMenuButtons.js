        function frontButton() {
          var front = document.getElementById("frontMenu");
          var dinner = document.getElementById("dinnerMenu");
          var breakfast = document.getElementById("breakfastMenu");
          var snacks = document.getElementById("snacksMenu");

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
        }

        function breakfastButton() {
          var front = document.getElementById("frontMenu");
          var dinner = document.getElementById("dinnerMenu");
          var breakfast = document.getElementById("breakfastMenu");
          var snacks = document.getElementById("snacksMenu");

          var bButton = document.getElementById("breakfastButton");
          var dButton = document.getElementById("dinnerButton");
          var sButton = document.getElementById("snacksButton");

          if (breakfast.className === "menuOverview") {
            breakfast.className += " showOverview";
            dinner.className = "menuOverview";
            snacks.className = "menuOverview";
            front.className = "menuOverview";

            bButton.className += " activeMenuButton";
            dButton.className = "";
            sButton.className = "";
          }
        }

        function dinnerButton() {
          var front = document.getElementById("frontMenu");
          var dinner = document.getElementById("dinnerMenu");
          var breakfast = document.getElementById("breakfastMenu");
          var snacks = document.getElementById("snacksMenu");

          var bButton = document.getElementById("breakfastButton");
          var dButton = document.getElementById("dinnerButton");
          var sButton = document.getElementById("snacksButton");

          if (dinner.className === "menuOverview") {
            dinner.className += " showOverview";
            breakfast.className = "menuOverview";
            snacks.className = "menuOverview";
            front.className = "menuOverview";

            bButton.className = "";
            dButton.className += " activeMenuButton";
            sButton.className = "";
          }
        }

        function snacksButton() {
          var front = document.getElementById("frontMenu");
          var dinner = document.getElementById("dinnerMenu");
          var breakfast = document.getElementById("breakfastMenu");
          var snacks = document.getElementById("snacksMenu");

          var bButton = document.getElementById("breakfastButton");
          var dButton = document.getElementById("dinnerButton");
          var sButton = document.getElementById("snacksButton");

          if (snacks.className === "menuOverview") {
            snacks.className += " showOverview";
            breakfast.className = "menuOverview";
            dinner.className = "menuOverview";
            front.className = "menuOverview";

            bButton.className = "";
            dButton.className = "";
            sButton.className += " activeMenuButton";
          }
        }