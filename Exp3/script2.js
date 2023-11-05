function validatePalin(str) {  
  
    
    const len = str.length;  
  
    for (let i = 0; i < len / 2; i++) {  
  
        
        if (str[i] !== str[len - 1 - i]) {  
            alert( 'It is not a palindrome');  
        }  
    }  
    alert( 'It is a palindrome');  
}  


let a="noon"
validatePalin(a);





