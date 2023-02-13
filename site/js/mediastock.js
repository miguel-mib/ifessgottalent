const media   = document.querySelectorAll(".mediastock-img");
const mediaBackground = document.querySelector(".media-background");

media.forEach(function (item) {
  item.addEventListener("click", function () {
    let imageClass = this.getAttribute("class");

    if (imageClass.includes("opened-img")) {
        return
    } else if (imageClass.includes("closed-img")) {
        mediaBackground.classList.replace("media-bg-closed", "media-bg-opened")
        this.classList.replace("closed-img", "opened-img")
    }
  });
});

mediaBackground.addEventListener("click", function () {
    media.forEach(function(e){
        e.classList.replace("opened-img", "closed-img")
    })
    mediaBackground.classList.replace("media-bg-opened", "media-bg-closed")
});