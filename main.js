var addNumbers = document.querySelectorAll('button');
//var addOperator = element.querySelector('.button-two');
console.log(addNumbers[4].value);
//element.addEventListener("click", function(){
// for(var i = 0; i < addNumbers.length; i++){
//   addNumbers[i].addEventListener("click", function() {
//   //  var numeroUno = addNumbers[0].value;
//     console.log(addNumbers[i].value);
//   //  document.getElementById("display").innerHTML.value.push = numeroUno;
//   });
// }

for (let i = 0; i < addNumbers.length; i++) {

  console.log(i);

  addNumbers[i].addEventListener('click', function() {

  //  console.log("### " + addNumbers[i].value);

    var display = document.getElementById("display");
    var numeroDos = [];
    var str = [i].value++;
    var numeroUno = addNumbers[i].value;
    display.innerHTML = numeroUno;
    numeroDos.push([i].value);


    if(addNumbers[i].value =='C'){

      document.getElementById("display").innerHTML = "&nbsp; "
    }

  //    else if(addNumbers[i].value =='='){

  //    document.getElementById("display").innerHTML = ;

  //  }


  });

}



//calculater(addNumbers.value){
  //if ( addNumbers.value< 10)
    //(i = 0; i < addNumbers.length; i++)
    //var numeroUno = [i];
  //  console.log(addNumbers.value)
//});
//element.addEventListener("click", function(){ alert("Hello World!"); });


// need to push value to display
//
//}
// need to store new concatanation value in var uno
  //  return  numeroUno+= ["i"];



    //  if (  addNumbers.values === '+'||'-'|| '*'|| '/' ){
  //operator value
  // var z = [];



    //  }
    //    if( addNumbers.value< 10) //second number value




  // if( addNumbers.value === '='){

  //  return (numeroUno)z(numeroDos);






  //first value
//    var newNums = [i];
  //  addNumbers.input.push.value;


//  }else if(addNumbers.value == "C"){

// code to wipe clean display
//document.getElementById("display").innerHTML = "";  // Replaces the content of <p> with an empty string
//}








//var buttonEl = document.querySelector('button');

// Add event listener to 'button'
//buttonEl.addEventListener('click', function(event) {
  // Print the event target (the DOM node the event listener is bound to)
  //console.log(event.target);
  // Print the type of event emitted (click)
  //console.log(event.type);
//});
