// one = document.querySelector(".one");
// window.addEventListener("scroll", (event) => {
//     console.log(window.scrollY );
//     if(window.scrollY === 900){
//         one.classList.remove("hide-left");
//     }
//     else{
//         one.classList.add("hide-left");
//     }
// })

blocks = document.querySelectorAll(".blocks");

showbox();

   window.addEventListener("scroll", showbox);

function showbox(){
    blocks.forEach(function (box) {
        var bottom = box.getBoundingClientRect().bottom;

        if(bottom < window.innerHeight){
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
    });
};