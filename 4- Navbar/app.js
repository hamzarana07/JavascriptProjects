// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    let x = links.classList;
    console.log(x);
    x.toggle("show-links")

});

// navToggle.addEventListener('click', function() {
//     let x = links.classList;
//     console.log(x);
//     if (x.contains("show-links")){
//         x.remove("show-links");
//     } else {
//         x.add("show-links");
//     }

// });