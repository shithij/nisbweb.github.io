function showSideBar() {
    if (document.querySelector(".navBarMob").style.display === "none") {
        document.querySelector(".navBarMob").style.display = "flex";
        var path = location.pathname.slice(6, );
        switch (path) {
            case "index.html" :{
                document.querySelector("#sideIndex").style.color = "crimson";
                break;
            }
            case "" :{
                document.querySelector("#sideIndex").style.color = "crimson";
                break;
            }
            case "about.html" :{
                document.querySelector("#sideAbout").style.color = "crimson";
                break;
            }
            case "events.html" :{
                document.querySelector("#sideEvents").style.color = "crimson";
                break;
            }
            case "chapters.html" :{
                document.querySelector("#sideChapters").style.color = "crimson";
                break;
            }
            case "contact.html" :{
                document.querySelector("#sideContact").style.color = "crimson";
                break;
            }
        }
    } else {
        document.querySelector(".navBarMob").style.display = "none";
    }
}

document.querySelector(".navBarMob").addEventListener("touchstart", function (e) {
    e.stopPropagation();
});


document.querySelector("body").addEventListener("click" , function (e) {
   if (!(e.target.className === "sideBarBtn")) {
       if (!((e.target.className === "navBarMob") || (e.target.className === "navSideBtn"))) {
           console.log(document.querySelector(".navBarMob").style.display);
           if (document.querySelector(".navBarMob").style.display === "flex") {
               document.querySelector(".navBarMob").style.display = "none";
            }
       } else {
       e.stopPropagation();
       }
   }
});

