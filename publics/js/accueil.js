function changeTextEtat()
{
    var short_text = document.getElementById("short-text");
    var long_text = document.getElementById("long-text");


    if(short_text.style.display == "none")
    {
        short_text.style.display = "block";
        long_text.style.display = "none";
    }else{
        short_text.style.display = "none";
        long_text.style.display = "block";
    }
}