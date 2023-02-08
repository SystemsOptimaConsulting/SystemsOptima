const blob = document.getElementById("blob");

document.addEventListener("mousemove", (event) => {
    blob.style.top = event.clientY + "px";
    blob.style.left = event.clientX + "px";
    requestAnimationFrame(() => {
        blob.style.top = event.clientY + "px";
        blob.style.left = event.clientX + "px";
    });
});
