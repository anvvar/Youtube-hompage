



    function handleScreenSizeChange() {
        if (window.innerWidth >= 1300) {
            functionForLargeScreen();
            console.log("this only visible in larger screee");
        } else {
            functionForSmallScreen();
        }
    }
    
    function functionForLargeScreen() {
          window.onload = function(){
       
   
   
     const sidebar = document.querySelector(".sidebar");
     const closeBtn = document.querySelector("#collapseButton");
   
     closeBtn.addEventListener("click",function(){
         sidebar.classList.toggle("collapse")
         menuBtnChange()
     })
   
     function menuBtnChange(){
       if(sidebar.classList.contains("collapse")){
           document.body.style.paddingLeft="100px";
       }else{
           document.body.style.paddingLeft="260px";
       }
   }
   
   }
       
   const gridContainer = document.getElementById('gridContainer');
   const changeColumnsButton = document.getElementById('collapseButton');
   let columns = 3; // Initial number of columns
   
   changeColumnsButton.addEventListener('click', function() {
       columns = columns === 3 ? 4 : 3; // Toggle between 3 and 4 columns
       gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
   });
   
       }

       // Initial call to handle the screen size on page load
handleScreenSizeChange();

// Listen for window resize events and update functions accordingly
window.addEventListener('resize', handleScreenSizeChange);

//collapse action for smalle devices
function show() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("content").style.marginLeft = "250px";
    document.getElementById("close-btn").style.visibility="visible";
 }
 function hide() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("close-btn").style.visibility="hidden";
 }