let readmore = document.getElementById("readmorebtn")
let two = document.getElementById("two")
let one = document.getElementById("one")
let readless = document.getElementById("showlessbtn")

readmore.addEventListener("click", function() {
    //hide the read more button
    readmore.style.display = "none";
    //hide the short text
    one.style.display = "none";
    // show the long text
    two.style.display = "block";
    // show the read less button
    readless.style.display = "block";
});
readless.addEventListener("click", function() {
    //hide the read less button
    readless.style.display = "none";
    //hide the long text
    two.style.display = "none";
    // show the short text
    one.style.display = "block";
    // show the read more button
    readmore.style.display = "block";
});

let a = document.getElementById("a")
let b = document.getElementById("b")    
let c = document.getElementById("c")
let d = document.getElementById("d")
let e = document.getElementById("e")

a.addEventListener("mouseover", function() {
    a.style.color = "red";
    a.style.backgroundColor = "black";
    a.style.fontWeight = "bold";

});
a.addEventListener("mouseout", function() {
    a.style.backgroundColor = "lightgray";
});

b.addEventListener("mouseover", function() {
    b.style.color = "blue";
    b.style.backgroundColor = "black";
    b.style.fontWeight = "bold";
});
b.addEventListener("mouseout", function() {
    b.style.backgroundColor = "lightgray";
});


c.addEventListener("mouseover", function() {
    c.style.color = "green";
    c.style.backgroundColor = "black";
    c.style.fontWeight = "lighter";
});
c.addEventListener("mouseout", function() {
    c.style.backgroundColor = "lightgray";
});

d.addEventListener("mouseover", function() {
    d.style.color = "Indigo";
    d.style.backgroundColor = "black";
    d.style.fontWeight = "900";
});
d.addEventListener("mouseout", function() {
    d.style.backgroundColor = "lightgray";
}); 
e.addEventListener("mouseover", function() { 
    e.style.color = "purple";
    e.style.backgroundColor = "black";
    e.style.fontWeight = "normal";
});
e.addEventListener("mouseout", function() {
    e.style.backgroundColor = "lightgray";
});
 
document.getElementById("submit").addEventListener("click", function() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");

   

   //console.log("Name: " + name.value);
    //console.log("Email: " + email.value);

    // Check if either field is empty
    if(name.value == "" || email.value == "") {
        alert("Please fill in all fields");
        alert("Submitting form...");
    } else {
        // If validation passes, you can submit the form
        alert("Form submitted successfully!");
    }
});



