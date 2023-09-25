document.getElementById("submit").onclick=function(){
    let fname=document.getElementById('fname');
    console.log(fname);
    if(fname==null||fname==""){
        window.alert("Name can't be blank");  
        document.getElementById("fname-val").innerHTML="Poor";
    }
}