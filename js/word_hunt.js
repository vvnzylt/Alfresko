// Use for setting values on scroll-margin-top for certain sections of homepage so that the top content won't go underneath the sticky header
const header = document.getElementById('header');
const headerHeight = header.offsetHeight;
document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    // To be adjusted later
}

var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var shop_button = document.getElementById("shop_button");
var contact_button = document.getElementById("contact_button");
var user_login_button = document.getElementById("user_login_button");
var footer_logo = document.getElementById("footer_logo");

header_logo.onclick = function() {
    window.location.href = "index.html";
}

home_button.onclick = function() {
    window.location.href = "index.html";
}

shop_button.onclick = function() {
    window.location.href = "index.html#shop_section";
}

contact_button.onclick = function() {
    window.location.href = "mailto:alfresko.business@gmail.com";
}

user_login_button.onclick = function() {
    window.location.href = "authentication.html";
}

footer_logo.onclick = function() {
    window.location.href = "index.html";
}

// Game window
initializeGameWindow();
function initializeGameWindow() {
    var game_modal = document.getElementById("game_modal");
    var play_button = document.getElementById("play_button");
    var body = document.querySelector("body");

    play_button.onclick = function() {
        game_modal.style.display = "block";
        setTimeout(function() {
            game_modal.classList.add("open");
        }, 50);
        body.style.overflow = "hidden";
    }
    
    game_modal.addEventListener("click", (event) => {
        if (event.target === game_modal) {
            game_modal.classList.remove("open");
            game_modal.classList.add("close");
            setTimeout(function() {
                game_modal.style.display = "none";
                game_modal.classList.remove("close");
                body.style.overflow = "auto";
            }, 100);
        }
    });
}