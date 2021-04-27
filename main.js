var input=prompt();      //read three numbers
var numberArray = input.split(/\s+/);    //split the string seperated by blank, and put them into a array
var englishNumArray=new Array(numberArray.length); //create a Array to store English Numbers

//convert Numeric into character 
for(let i=0;i<numberArray.length;i++)
{
    //call convertor to do convertion
   englishNumArray[i]=convertor(numberArray[i]);
}

//create a string to get all character numer in one
var tem="";
for(let i=0;i<englishNumArray.length;i++)
{
  //if it is not the last number, add a comma at the end
  if(i!==englishNumArray.length-1)
  {
      tem+=englishNumArray[i]+", ";
  }
  else
  {
      //if it is a last number, Do not add a comma
     tem+=englishNumArray[i];
  }
}
//print out the convertion string
alert(tem);

//to read every digit by using for loop, convert and store into Num string
function convertor(q1)
{
  
  var Num="";
  for(let i=0;i<q1.toString().length;i++)
  {
    
    if(q1.toString().charAt(i)==="1")
    {
      Num+="One";
    }
    else if(q1.toString().charAt(i)==="0")
    {
      Num+="Zero";
    }
    else if(q1.toString().charAt(i)==="2")
    {
      Num+="Two";
    }
    else if(q1.toString().charAt(i)==="3")
    {
      Num+="Three";
    }
    else if(q1.toString().charAt(i)==="4")
    {
      Num+="Four";
    }
    else if(q1.toString().charAt(i)==="5")
    {
      Num+="Five";
    }
    else if(q1.toString().charAt(i)==="6")
    {
      Num+="Six";
    }
    else if(q1.toString().charAt(i)==="7")
    {
      Num+="Seven";
    }
    else if(q1.toString().charAt(i)==="8")
    {
      Num+="Eight";
    }
    else if(q1.toString().charAt(i)==="9")
    {
      Num+="Nine";
    }
  }
  return Num;
}