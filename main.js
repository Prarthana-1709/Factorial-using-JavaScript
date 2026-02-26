function findFact(){
    
   let number=parseInt(prompt("enter the number"))
   if(isNaN(number) || number<0)
   {
     document.getElementById("result").innerHTML="please enter the non negative number";
     return;
   }

   let fact=1;
   for(let i=1;i<=number;i++)
   {
     fact*=i
   }
   document.getElementById("result").innerHTML=`factorial of the ${number} is <b>${fact}  </b>`;

}

