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



const ReadMoreButton= document.querySelector('.read-more-but');
const text =document.querySelector('.text');

ReadMoreButton.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if(ReadMoreButton.innerText== "Click hear to read more"){
    ReadMoreButton.innerText= "Click hear to read less";
  }
  else{
    ReadMoreButton.innerText= "Click hear to read more";
  }

})


