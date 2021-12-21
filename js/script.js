
        function myFunction() {
            var x = document.getElementById("navbar");
            if (x.className === "nav"){ /*nav responsive*/
                x.className += " responsive";
            } else {
                    x.className = "nav";
            }
        }
