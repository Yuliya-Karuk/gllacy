// Modal Map
function initMap() {
    var coordinates = {lat: 59.938770, lng: 30.323053},
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 15
        }),

        image = './img/map_pin.svg',
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image
        });
}


// Modal Feedback
var linkFeedback =  document.querySelector(".feedback-button");
var modalFeedback = document.querySelector(".modal-feedback");
var closeModalFeedback = modalFeedback.querySelector(".modal-close");
var feedbackForm = modalFeedback.querySelector(".feedback-form");
var feedbackName = modalFeedback.querySelector("[name=name]");
var feedbackEmail = modalFeedback.querySelector("[name=email]");
var feedbackMessage = modalFeedback.querySelector("[name=message]");
var overlay = document.querySelector(".overlay");

function showFeedbackModal(evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-show");
    overlay.classList.add("overlay-show");
    feedbackName.focus();
}

function closeFeedbackModal(evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
}

/* показать окно обратной связи при клике мышкой*/
linkFeedback.addEventListener("click", function (evt) {
    showFeedbackModal(evt)
});

/* показать окно обратной связи при нажатии энтер*/
linkFeedback.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) {
        showFeedbackModal(evt);
    }
});

/* закрыть окно обратной связи*/
closeModalFeedback.addEventListener("click", function (evt) {
    closeFeedbackModal(evt);
});

/* закрыть окно при нажатии на эск*/
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalFeedback.classList.contains("modal-show")) {
            closeFeedbackModal(evt);
        }
    }
});

/* закрыть окно при нажатии на подложку*/
overlay.addEventListener("click", function(evt) {
    if (overlay.classList.contains("overlay-show")) {
        closeFeedbackModal(evt);
    }
});

/* проверить все ли поля заполнены*/
feedbackForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
        evt.preventDefault();
        modalFeedback.classList.remove("modal-error");
        modalFeedback.offsetWidth = modalFeedback.offsetWidth;
        modalFeedback.classList.add("modal-error");
    } 
});


//slider
var body =  document.querySelector("body");
var sliderFirst =  document.querySelector(".slider-list li:nth-of-type(1)");
var sliderSecond =  document.querySelector(".slider-list li:nth-of-type(2)");
var sliderThirst =  document.querySelector(".slider-list li:nth-of-type(3)");
var sliderLinkFirst =  document.querySelector(".slider-controls button:nth-of-type(1)");
var sliderLinkSecond =  document.querySelector(".slider-controls button:nth-of-type(2)");
var sliderLinkThirst = document.querySelector(".slider-controls button:nth-of-type(3)");


sliderLinkFirst.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderSecond.classList.remove("slide-current");
    sliderThirst.classList.remove("slide-current");
    sliderFirst.classList.add("slide-current");
    body.classList.remove("site-wrapper-2");
    body.classList.remove("site-wrapper-3");
    body.classList.add("site-wrapper-1");
    sliderLinkSecond.classList.remove("btn-slide-active");
    sliderLinkThirst.classList.remove("btn-slide-active");
    sliderLinkFirst.classList.add("btn-slide-active");
})

sliderLinkSecond.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderFirst.classList.remove("slide-current");
    sliderThirst.classList.remove("slide-current");
    sliderSecond.classList.add("slide-current");
    body.classList.remove("site-wrapper-1");
    body.classList.remove("site-wrapper-3");
    body.classList.add("site-wrapper-2");
    sliderLinkThirst.classList.remove("btn-slide-active");
    sliderLinkFirst.classList.remove("btn-slide-active");
    sliderLinkSecond.classList.add("btn-slide-active");
})

sliderLinkThirst.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderFirst.classList.remove("slide-current");
    sliderSecond.classList.remove("slide-current");
    sliderThirst.classList.add("slide-current");
    body.classList.remove("site-wrapper-1");
    body.classList.remove("site-wrapper-2");
    body.classList.add("site-wrapper-3");
    sliderLinkSecond.classList.remove("btn-slide-active");
    sliderLinkFirst.classList.remove("btn-slide-active");
    sliderLinkThirst.classList.add("btn-slide-active");
})