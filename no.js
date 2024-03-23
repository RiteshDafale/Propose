console.log("yes i am added")
const noBtn = document.getElementById("nobtn");
noBtn.addEventListener("mouseover", change);
function change() {
    console.log("functin called")
    console.log("window.innerWidth = " + window.innerWidth);
    console.log("window.innerHeight" + window.innerHeight);

    var i = Math.floor(Math.random() * 500) + 1;
    console.log("i = " + i)
    var j = Math.floor(Math.random() * 500) + 1;
    console.log("j = " + j)

    noBtn.style.position = "absolute";

    const maxWidth = 800 - noBtn.offsetWidth;
    const maxHeight = 314 - noBtn.offsetHeight;
    const randomTop = Math.floor(Math.random() * maxHeight);
    const randomLeft = Math.floor(Math.random() * maxWidth);

    noBtn.style.top = randomTop + "px";
    noBtn.style.left = randomLeft + "px";
















// noBtn.style.position = "absolute";
// noBtn.style.top = "0";
// noBtn.style.left = "0";

// // Alternatively, you can set the position to relative and move it 50 pixels to the right and 20 pixels down from its original position
// noBtn.style.position = "relative";
//   noBtn.style.top=j+"px"
//   noBtn.style.top=i+"px"

}