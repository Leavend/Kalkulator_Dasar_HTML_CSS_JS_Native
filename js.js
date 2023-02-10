var layar = document.querySelector("#screen");
var button = document.querySelector(".container-button");
var resetLayar = false;
var bolehHitung = false;
var tmpVal = '';
var operator = '';

button.addEventListener("click", function(e) {
  var buttonClick = e.target;    
  var nilaibutton = buttonClick.innerText;    
  if (nilaibutton == "C") {        
    layar.value = "";        
    tmpVal = ""; // tambahkan ini untuk clear nilai sementara    
  } else if (nilaibutton == "<") {        
    layar.value = layar.value.slice(0, -1);   
  } else if (nilaibutton == "=") {        
    if (bolehHitung == true) {            
      layar.value = eval(tmpVal + operator + layar.value);
      bolehHitung = false;
    }    
  } else if (nilaibutton == ".") {        
    /* Tambahkan else if dibawah ini agar ketika kamu menulis           
    titik maka tidak langsung melakukan perhitungan */        
    layar.value = layar.value + nilaibutton;   
  } else if (buttonClick.classList.contains('operator')) {        
    if (bolehHitung == true) {            
      layar.value = eval(tmpVal + operator + layar.value);            
      bolehHitung = false;        
    }        
    tmpVal = layar.value;        
    operator = nilaibutton;        
    resetLayar = true;    
  } else {        
    if (resetLayar == true) {            
      layar.value = nilaibutton;            
      resetLayar = false;            
      bolehHitung = true;        
    } else {            
      layar.value = layar.value + nilaibutton;        
    }    
  }
});
