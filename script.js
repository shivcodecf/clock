setInterval(()=>{
    const time = document.querySelector("#time");
    let d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let s = d.getSeconds();
   
    if(hours > 12)
    {
        hours = hours-12;

    }
    if(s<10)
    {
        s = "0"+s;
    }
    if(min<10)
    {
        m = "0"+m;
    }
    if(hours<10)
    {
     hours = "0"+hours;
    }
    time.textContent = hours + ":" + min + ":" + s;



});