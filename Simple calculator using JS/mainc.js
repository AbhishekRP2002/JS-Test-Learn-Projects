(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){ 
           
            let value = e.target.dataset.num;
            screen.value += value; // value is added/pushed  in the  screen
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value ==='')
        {
            screen.value = "Please Enter";
        }
        else{
            let answer = eval(screen.value); // dont use eval().NOt recommended
            screen.value = answer;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = " ";
    })

})();


 // we add the event listener to know which button was pressed. click is the event name.function (e) will only work if any eventis active.

 // value is added/pushed  in the  screen