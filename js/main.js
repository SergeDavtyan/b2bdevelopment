// JS Functions

const REMOVE_CLASS = (element, remove) => {

    element.forEach(e => {
        e.classList.remove(remove);
    })

}

// AOS

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Navbar Scroll Up 


let lastScrollTop = 0;
let header = document.querySelector("header");
let header_portfolio = document.querySelector(".header_portfolio");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= "100") {
        header.classList.add("active");

        if (header_portfolio) {
            header_portfolio.classList.remove("rgba");
        }

    } else {
        header.classList.remove("active");
        if (header_portfolio) {
            header_portfolio.classList.add("rgba");
        }
    }

    if (scrollTop > lastScrollTop) {
        header.style.top = "-142px";
    } else {
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
})



// Navbar Burger 


const burger = document.querySelector(".burger");
const navbar = document.querySelector("nav");
const burger_item = document.querySelectorAll(".burger__item");
const menu_item = document.querySelectorAll(".menu__item");

menu_item.forEach(item => {
    item.addEventListener("click", () => {

        navbar.classList.remove("active");

        burger_item.forEach(item => {

            item.classList.remove("active");

        })
    })
})

burger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    burger_item.forEach(item => {
        item.classList.toggle("active");
    })
})



// Main Features & Benefits

let left_item = document.querySelectorAll(".left__item");
let box = document.querySelectorAll(".box");
let box_container = document.querySelectorAll(".box__container");
let box__accordion = document.querySelectorAll(".box__accordion");

const Func = i => {
    REMOVE_CLASS(left_item, "active");
    REMOVE_CLASS(box, "active");
    REMOVE_CLASS(box_container, "active");

    left_item[i].classList.add("active");
    box[i].classList.add("active");
    box_container[i].classList.add("active");
}

for (let i = 0; i < left_item.length; i++) {

    left_item[i].addEventListener("click", () => {
        Func(i)
    })

    box__accordion[i].addEventListener("click", () => {
        Func(i)
    })

}

// FAQ Accordion

const accordion_button_first = document.querySelectorAll(".accordion__list--first .accordion__button");
const accordion_button_second = document.querySelectorAll(".accordion__list--second .accordion__button");

const accordion__list_first_active = document.querySelector(".accordion__list--first .active");
const accordion__list_second_active = document.querySelector(".accordion__list--second .active");

const accordion_text = document.querySelectorAll(".accordion__text");




const accordion = (button, elClassName, idx) => {

    const accordionContent = button.nextElementSibling;
    const active = document.querySelectorAll(`${elClassName} .active`);
    const accordiontext = document.querySelectorAll(`${elClassName} .accordion__text`);
    const accordion_item = document.querySelectorAll(`${elClassName} .accordion__item`);

    if (button.parentElement.classList.contains("active")) {

        accordion_item[idx].classList.toggle("active");
        accordiontext[idx].classList.toggle("active_padding");
        accordiontext[idx].style.maxHeight = 0;

    } else {

        accordiontext.forEach(el => {
            el.style.maxHeight = 0;
            el.classList.remove("active_padding");
        })

        if (active) {
            REMOVE_CLASS(active, "active");
        }


        accordion_item[idx].classList.toggle("active");
        accordiontext[idx].classList.add("active_padding");
        accordiontext[idx].style.maxHeight = accordionContent.scrollHeight + 20 + "px";

    }


}

if (accordion__list_first_active) {

    const accordion_text = accordion__list_first_active.querySelector(".accordion__text");

    accordion_text.style.maxHeight = accordion_text.scrollHeight + 20 + "px";
    accordion_text.classList.add("active_padding");

}

if (accordion__list_second_active) {

    const accordion_text = accordion__list_second_active.querySelector(".accordion__text");

    accordion_text.style.maxHeight = accordion_text.scrollHeight + 20 + "px";
    accordion_text.classList.add("active_padding");

}


accordion_button_first.forEach((e, idx) => {

    e.addEventListener("click", () => {
        accordion(e, ".accordion__list--first", idx);
    })

})

accordion_button_second.forEach((e, idx) => {

    e.addEventListener("click", () => {
        accordion(e, ".accordion__list--second", idx);
    })

})





// Gallery Grid

const grid = document.querySelector(".grid");

if (grid) {
    const colc = new Colcade(grid, {
        columns: '.grid-col',
        items: '.grid-item'
    });
}

