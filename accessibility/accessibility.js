$(document).ready(function(){
    var changeFont = document.getElementById('toggle-font');
    var bodyFont = $('body').css('font-family');
    var originalMainFont = $('.reveal').css('--r-main-font');
    var originalHeadingFont = $('.reveal').css('--r-heading-font');

    changeFont.onclick = function() {
        if (changeFont.innerText === "Dyslexia Friendly Font") {
            changeFont.innerHTML = "Base Font";
            $('.reveal').css('--r-main-font', 'OpenDyslexic');
            $('.reveal').css('--r-heading-font', 'OpenDyslexic-Bold');
            $('body').css('font-family', 'OpenDyslexic');
        }
        else {
            changeFont.innerText = "Dyslexia Friendly Font";
            $('.reveal').css('--r-main-font', originalMainFont);
            $('.reveal').css('--r-heading-font', originalHeadingFont); 
            $('body').css('font-family', bodyFont);              
        }
        
    }
})