// listen to the scroll action in the whole window
window.addEventListener("scroll",()=>{
    // if the user scroll more than half, then, the button to scroll up appear.
    if(document.body.scrollTop > 0.5*document.body.scrollHeight){
        document.getElementById("scrollToTop").style.display="block";
    }else{
        // if the user is in upper half, not showing the button
        document.getElementById("scrollToTop").style.display="none";
    }
});

// if the button is clicked,
document.getElementById("scrollToTop").addEventListener("click", () => {
    // set the scroll amount to 0, which is equivalent to the top of the page
    document.body.scrollTop=0;
});