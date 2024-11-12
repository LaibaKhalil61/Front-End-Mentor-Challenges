let qty;
let emptyCard = true;
const AddCloseBtn = () => {
    const closeButton = document.querySelector(".close-btn");
    closeButton.className = "close-btn appear";
}
const CardPopup = () => {
    const card = document.querySelector(".card");
    if (!card.classList.contains("appear"))
        card.className = "card appear";
    else {
        card.classList.remove("appear");
    }
}
const AddQuantity = () => {
    const initial_no = document.querySelector(".number");
    qty = parseInt(initial_no.innerHTML);
    qty += 1;
    initial_no.innerHTML = qty;
}
const RemoveQuantity = () => {
    const initial_no = document.querySelector(".number");
    qty = parseInt(initial_no.innerHTML);
    if (qty > 0) {
        qty -= 1;
        initial_no.innerHTML = qty;
    }
}
const AddtoCart = () => {
    if (qty > 0) {
        const totalPrice = qty * 125;
        const details = document.getElementById("details");
        const price_container = document.querySelector(".popup-paragraphs");
        const p = price_container.childNodes[3];
        console.log(p)
        p.innerHTML = "$125x" + qty + "<span>$" + totalPrice + "</span>";
        details.className = "row appear";
        const button = document.getElementById("checkout-btn");
        button.className = "btn appear";
        const cardText = document.querySelector(".card-text");
        cardText.className = "card-text disappear";
    }
}
const ShowemptyCart = () => {
    const details = document.getElementById("details");
    details.classList.remove("appear");
    const button = document.getElementById("checkout-btn");
    button.classList.remove("appear");
    const cardText = document.querySelector(".card-text");
    cardText.className = "card-text appear";
}
let current_activated_img = null;
let carousal = document.querySelector(".carousal");
let carousal_image = carousal.querySelector(".active");
// to change thumbnail by clicking on it, and to change the image along with it
const ActivateImage = (e) => {
    current_activated_img.classList.remove("active");
    carousal_image.classList.remove("active");
    current_activated_img = e.target;
    e.target.classList.add("rounded-2", "active"); // Add both classes at once
    const imageIndex = parseInt(current_activated_img.id) - 1; // Convert ID to number and adjust for 0-based index

    if (imageIndex >= 0 && imageIndex < carousal.children.length) {
        carousal_image = carousal.children[imageIndex];
        carousal_image.classList.add("active");
    }
}
// to change thumbnail when image changes
const ChangeThumbnail = (string,classname) => {
    const activeElement = carousal.querySelector(".active");
    const index = Array.from(carousal.children).indexOf(activeElement);
    if (index >= 0) {
        if (current_activated_img)
            current_activated_img.classList.remove("active");
        if (index === carousal.children.length - 1 && classname == "next")
            current_activated_img = document.getElementById("1");
        else if (index === 0 && classname == "prev")
            current_activated_img = document.getElementById("4");
        else{
            if(classname == 'next')
            parameter = string != 'MainCarousal'?index + 2.1:index+2;
            else{
                parameter = string != 'MainCarousal'?index - 2.1:index-2;
            }
            console.log(parameter);
            current_activated_img = document.getElementById(parameter);
        }
        console.log(current_activated_img)
        current_activated_img.classList.add("active");
    }
}
const AddLightbox = () => {
    const background = document.getElementById("disableDiv");
    const lightbox = document.querySelector(".row.lightbox");
    background.classList.add("active");
    lightbox.classList.add("active");
     // For interactivity with the right carousal
    carousal = document.querySelector("#lightbox-carousel");
    carousal_image = carousal.querySelector(".active");
    current_activated_img = document.getElementById("1.1");
    // lightbox.className = "row lightbox active";
}
const CloseLightBox = () => {
    const background = document.getElementById("disableDiv");
    const lightbox = document.querySelector(".row.lightbox");
    background.classList.remove("active");
    lightbox.classList.remove("active");
    // For interactivity with the right carousal
    carousal = document.querySelector(".carousal");
    current_activated_img = document.getElementById("1");
    carousal_image = carousal.querySelector(".active");
}