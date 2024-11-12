const ConfirmationMsg = ()=>{
    // document.querySelector(".top-section").remove();
    document.querySelector("form").remove();
    const div = document.createElement("div");
    div.setAttribute("class","confirm-msg")
    const img = document.createElement("img");
    img.src = "images\\icon-complete.svg"
    const p = document.createElement("p");
    p.innerHTML = "We've added your card details"
    const h2 = document.createElement("h2");
    h2.innerHTML = "Thank you!"
    const btm = document.querySelector('.btm-section')
    const btn = document.createElement("button");
    // btn.setAttribute('class',"btn")
    btn.setAttribute('class',"continue-btn")
    btn.textContent = "Continue"
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(btn);
    btm.appendChild(div);
}