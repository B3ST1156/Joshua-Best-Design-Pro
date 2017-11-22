// My awesome scripts!!!

console.log('Whatsup!!!');

$('video').mediaelementplayer();

$('.hamburger-menu').on('click', function() {
$('.bar').toggleClass('animate');
$('.hand').toggleClass('active');
$('nav').toggleClass('activenav');
    
// Randomize Header

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = 'http://picsum.photos/200/300';
var img1 = 'http://picsum.photos/201/301';
var img2 = 'http://picsum.photos/202/302';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a', 
    thumbnail: true,
    share: false
});


    
//$('document').querySelector(".hamburguer").addEventListener("click", function(){
//$('document').querySelector(".full-menu").classList.toggle("active");




});




        
    
