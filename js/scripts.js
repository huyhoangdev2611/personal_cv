$(document).ready(function(){
    // Your custom jQuery code here
    console.log("Website is ready!");
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.read-more').forEach(function(button) {
        button.addEventListener('click', function() {
            this.nextElementSibling.style.display = 'block';
            this.style.display = 'none';
        });
    });
});