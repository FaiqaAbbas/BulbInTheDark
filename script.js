var on_btn=document.querySelector('.on-btn');
var off_btn=document.querySelector('.off-btn');
var bulb_image=document.querySelector('.bulb_image');

on_btn.addEventListener('click',function(){
    // bulb_image.src="images/bulb_on.png";
    document.body.style.background= "radial-gradient(circle, rgba(255, 215, 0, 0.8) 30%, rgba(255, 153, 0, 0.6) 50%, rgba(255, 208, 0, 0.144) 70%)";


});
off_btn.addEventListener('click',function(){
    bulb_image.src="images/bulb_off.png";
    document.body.style.background="black";
});
