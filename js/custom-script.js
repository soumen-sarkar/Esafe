/*$(window).scroll(function(){
    
    var windowHeight = $(window).height();
    var documentHeight = $(document).outerHeight(true);
    var footerHeight = $(".footerWide").outerHeight();
    var offsetHeight = documentHeight-footerHeight-windowHeight;
    
    if($(window).scrollTop()>= offsetHeight){
       $('#sidebar').removeAttr('style').next().removeAttr('style');
    }else{
       
    }

})*/

$(document).ready(function(){ 
    
	//Image carousel
	$('.carousel').carousel({
		interval: 4000
	})
    
    //Navigation Dropdown onHover
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
        }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });
	
    //Popover
    $(function () {
        $('[data-toggle="popover"]').popover({
            trigger : 'hover'
        })
    })    
    
    //Sidebar scroll to fix	
    $('#sidebar').scrollToFixed();	
    
    //Space for useing another script   
    $('.privacy li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top }, 1000);
		return false;
	});
    
});





