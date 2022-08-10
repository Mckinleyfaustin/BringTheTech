window.onscroll = function() {headerTransition()};

function headerTransition() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementsByTagName("header")[0].style.backgroundColor = "black";
    } else {
      document.getElementsByTagName("header")[0].style.backgroundColor = "transparent";
    }
}