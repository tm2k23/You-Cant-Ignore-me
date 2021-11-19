var yes = function(){
    window.alert("You cant ignore me 😍");
    var noBox = document.getElementById('no');
    noBox.style.position = "absolute";
    noBox.style.top = null;
    noBox.style.left = null;
}
var no = function(){
    var noBox = document.getElementById('no');
    noBox.style.position = "fixed";
    // console.log(`${Math.random() * 100}`);
    noBox.style.top = (Math.random() * 80) + "vh";
    noBox.style.left = (Math.random() * 80) + "vw";
    console.log(noBox);
}
