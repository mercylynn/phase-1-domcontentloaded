// Your code goes here
document.addEventListener("DOMContentLoaded",() => {
    console.log("The DOM has loaded")
    let p=document.querySelector("#text")
    p.textContent="This is really cool!"
  })
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );