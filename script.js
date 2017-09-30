"color:black" > "color:red" > "color:mediumblue" > var slideIndex = "color:red">1;
showDivs(slideIndex);

"color:mediumblue">function plusDivs(n) {
    showDivs(slideIndex "color:red"> += n);
}

"color:mediumblue">function showDivs(n) {
    "color:red"> "color:mediumblue">var i;
    "color:mediumblue">var x = document."color:black">getElementsByClassName("color:brown">"mySlides");
    "color:mediumblue">if "color:red"> (n > x."color:black">length) {slideIndex = "color:red">1} 
    "color:mediumblue">if (n < "color:red">1) {slideIndex = "color:red"> x."color:black">length} ;
    "color:mediumblue">for (i = "color:red">0; i < x."color:black">length; i++) {
        "color:red"> x[i]."color:black">style."color:black">display = "color:brown">"none"; 
    }
    "color:red"> x[slideIndex-"color:red">1]."color:black">style."color:black">display = "color:brown">"block"; 
}
"color:red">