let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.btn1');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML== "="){
        string = eval(string);
        document.querySelector('input').value = string;
        memory = eval(string);
    }
    else if(e.target.innerHTML== "AC"){
        string = "";
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML=="M") {
        string=memory;
        document.querySelector('input').value=string;
    }
    else{
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
  }});
});


function todaystime(){
    const today= new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    document.getElementById("clock").innerHTML= h + ":" +m;
    setTimeout(todaystime,1000); 
}

  

