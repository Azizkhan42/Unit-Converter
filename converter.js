let feet = document.getElementById('feet');
let inches = document.getElementById('inches');

feet.addEventListener('input', function() {
    let f = parseFloat(this.value) || 0; 
    inches.value = f * 12; 
});

inches.addEventListener('input', function() {
    let i = parseFloat(this.value) || 0; 
    feet.value = i / 12;  
});

