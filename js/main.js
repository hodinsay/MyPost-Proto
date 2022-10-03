const textBox = document.getElementById("textBox");
const imgBox = document.getElementById("imgBox")

textBox.onkeyup = textBox.onkeypress = function() {
    document.getElementById("prevText").innerHTML = this.value; 
}

const loadFile = function(event) {
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}