let value = document.getElementById("value");
let btns = document.querySelectorAll(".btn");


let count = 0;
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("increase")){
            console.log("increase");
            count++;
        } else if (styles.contains("decrease")){
            console.log("decrease")
            count--;
        } else if (styles.contains("reset")){
            console.log("reset")
            count = 0;
        }
        if (count === 0){
            value.style.color = "black";
        } else if (count > 0){
            value.style.color = "green";
        } else if (count < 0){
            value.style.color = "red";
        }
        value.textContent = count;

    });
});
