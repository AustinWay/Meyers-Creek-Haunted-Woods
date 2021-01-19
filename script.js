// Get year for footer
document.getElementById("year").innerHTML = new Date().getFullYear();

// When the user clicks Back to Top button, sthe page will scroll to the top
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Get browser
function getBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        console.log('Opera');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        console.log('Chrome');
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        console.log('Safari');
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        console.log('Firefox');
    }
    //IF IE > 10
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        console.log('IE');
    }
    else {
        console.log('Unknown Browser');
    }
}

window.onload = function() {
    getBrowser();
  };