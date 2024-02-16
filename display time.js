//This function is called when a button is clicked and displays the current time....it uses a date() object.
function display_time() {
    let current_date = new Date();
    document.getElementById("display_time").innerHTML = current_date;
}
//This function is called when a button is clicked and undisplays the current time that was showed
function undisplay_time(){
    document.getElementById("display_time").innerHTML = "Click first button to see magic!";
}
