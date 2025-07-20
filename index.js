document.getElementById('btn').addEventListener('click',function()
{
    let lovername=prompt("Enter Vikramathithan's  lover ,crush ,pure lovable's name:");

    if(lovername==="anupama" || lovername==="dhanya"|| lovername==="hiba" || lovername==="saallu"){
        

document.getElementById('res').innerHTML="correct";
document.getElementById('res').style.backgroundColor="green";
document.getElementById('res').style.padding="20px";
document.getElementById('res').style.width="200px";
document.getElementById('res').style.border="2px solid white";
document.getElementById('res').style.transition="2s ";
    }
    else if(lovername===''){
        document.getElementById('res').innerHTML="textbox is null";
        
document.getElementById('res').style.backgroundColor="yellow";
document.getElementById('res').style.padding="20px";
document.getElementById('res').style.width="200px";
document.getElementById('res').style.border="2px solid white";

    }
    else{
        document.getElementById('res').innerHTML="Invalid";
 
document.getElementById('res').style.backgroundColor="red";
document.getElementById('res').style.padding="20px";
document.getElementById('res').style.width="200px";
document.getElementById('res').style.border=" solid white 2px";
    }

})