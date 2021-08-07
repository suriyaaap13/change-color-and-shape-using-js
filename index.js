var cur = "square";
var color = ["red","blue","pink","green","black"];
var shape = ["square","rectangle","circle","triangle-up","triangle-down"];
document.getElementById('change-color-btn').onclick = function(){
    document.getElementById('bg-circle').style.backgroundColor = color[Math.floor(Math.random()*shape.length)];
}
document.getElementById('change-shape-btn').onclick = function(){
    var random  = shape[Math.floor(Math.random()*shape.length)];
    console.log(random);
    document.getElementById(cur).setAttribute("id",random);
    cur = random;
}