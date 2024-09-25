document.getElementById('donation-button').addEventListener('click',function(){
    document.getElementById('history-button').classList.remove('bg-btn-color');
    document.getElementById('donation-button').classList.add('bg-btn-color');
    showSectionById('donation-section');

});
document.getElementById('history-button').addEventListener('click',function(){
    document.getElementById('donation-button').classList.remove('bg-btn-color');
    document.getElementById('history-button').classList.add('bg-btn-color');
    showSectionById('history-section');

});