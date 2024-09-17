
document.addEventListener("DOMContentLoaded", function () {
    const moreButton = document.getElementById("more-button");
    moreButton.addEventListener("click", moreFunction);

    function moreFunction(){
        document.getElementById("more").innerHTML = "more :)";
    }

})
