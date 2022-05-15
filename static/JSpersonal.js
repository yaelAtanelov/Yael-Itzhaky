const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('nav a').forEach(link => {    
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
});

var gvalue=1;
function loading(){
 var progress = document.getElementById ('progress');
     setInterval (function ()
    { 
                 if(gvalue<100){
                    gvalue++;
                    progress.value =gvalue;  
                  }
                  loading();            
      }, 1000);
      document.getElementById("P1").innerHTML="We are sending your request now. Please wait.";
}


function readMore(){
  document.getElementById("BasicP").innerHTML="In it I present to you my works to be inspired and inspired by others. I would love for you to collaborate with my venture to create a non-profit website.We are so excited to share some of our best products with you here on our website. We strive to bring you the highest quality stones & diamonds available while keeping our prices affordable, so please explore and enjoy the uniquely crafted jewelry.";
  document.getElementById("readMore").innerHTML="";
}

function readMoreC(){
  document.getElementById("BasicPC").innerHTML="Please send me here what you think of my work, I will be happy for new and original ideas and feedback on the site";
  document.getElementById("readMore").innerHTML="";
}


