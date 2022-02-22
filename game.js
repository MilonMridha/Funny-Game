document.getElementById('btn').addEventListener('click', function(){
    const input = document.getElementById('input');
     const inputNumber = parseInt(input.value);
     if(input.value == '' || input.value == NaN || input.value > 9){
       alert('Input A Number then Cheek')
   } else{
    const getInput = document.getElementById('inputed');
    getInput.innerText = inputNumber;
    const random = document.getElementById('random');
    random.innerText = Math.floor(Math.random()* 10);
   }
   input.value = '';
   if(inputNumber == parseInt(random.innerText)){
       alert('WOW YOU ARE A WINNER AND YOU GOT A IPHONE 12 PRO MAX')
   }
   else{
       document.getElementById('fail').style.display = 'block';
   }
});
function reload() {
    window.location.reload();
  }