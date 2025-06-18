var input = document.querySelector("input");


var data = [
    {name: "khushi", src:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "khushbu",src:"https://plus.unsplash.com/premium_photo-1681494639261-7908ef9d2257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name: "khushal",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name: "khushu", src:"https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    
]


var pers = "";
data.forEach(function(elem){
     pers += `<div class="person">
    <div class="img">
        <img src="${elem.src}"
            alt="">
    </div>
    <h4>${elem.name}</h4>
 </div>`;
})

 document.querySelector(".people").innerHTML = pers

 input.addEventListener("input", function(){
    var matching = data.filter(function(e){
         return e.name.startsWith(input.value)
    })
    var newusers = "";
    matching.forEach(function(elem){
    newusers += `<div class="person">
    <div class="img">
        <img src="${elem.src}"
            alt="">
    </div>
    <h4>${elem.name}</h4>
 </div>`;
})
    document.querySelector(".people").innerHTML = newusers;

 })
