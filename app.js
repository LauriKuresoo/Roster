
function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var fetchData = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(fetchData));
    
    const del = document.getElementById("toaster");
    del.remove();
   var x = document.getElementById("play-on-hover").style.display = 'block';
  }
  
function openNav() {
    document.getElementById("myNav").style.display = "flex";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
