function handleScreenSizeChange() {
  if (window.innerWidth >= 1300) {
    functionForLargeScreen();
  } else {
    functionForSmallScreen();
  }
}

function functionForLargeScreen() {
  window.onload = function () {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#collapseButton");

    closeBtn.addEventListener("click", function () {
      if (window.innerWidth >= 992) {
        sidebar.classList.toggle("collapse");
        menuBtnChange();
      }
    });

    function menuBtnChange() {
      if (window.innerWidth >= 992) {
        if (sidebar.classList.contains("collapse")) {
          document.body.style.paddingLeft = "100px";
        } else {
          document.body.style.paddingLeft = "260px";
        }
      }
    }
  };

  const gridContainer = document.querySelector(".video-grid");
  const changeColumnsButton = document.getElementById("collapseButton");

  changeColumnsButton.addEventListener("click", function () {
    gridContainer.classList.toggle("sidebar-shrink");
    
  });
}  
function functionForSmallScreen() {

    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#collapseButton");
    
    // Apply the collapse class on devices with width 786px or larger
    if (window.innerWidth >= 786) {
        sidebar.classList.add("collapse");
    }
    
    // Toggle the collapse class when the collapse button is clicked
    closeBtn.addEventListener("click", function () {
        sidebar.classList.toggle("collapse");
    });
       
     

}
// Initial call to handle the screen size on page load
handleScreenSizeChange();

// Listen for window resize events and update functions accordingly
window.addEventListener("resize", handleScreenSizeChange);

//collapse action for smalle devices
const firstGroup = document.querySelector(".firstGroup");
const secondGroup = document.querySelector(".secondGroup");
function show() {
  document.getElementById("header-deafult").style.display = "none";
  document.getElementById("mySidebar").style.display = "block";
  window.alert("main menu is going to hide");
}
function hide() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("header-deafult").style.display = "grid";

  window.alert("main menu is going to show");
}

//add previous and next on button list

const labels = document.querySelector(".labels");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let scrollAmount = 0;
const scrollStep = 200; // Adjust this value based on your design

prevButton.addEventListener("click", function () {
  scrollAmount -= scrollStep;
  labels.scrollLeft = scrollAmount;
});

nextButton.addEventListener("click", function () {
  scrollAmount += scrollStep;
  labels.scrollLeft = scrollAmount;
});
