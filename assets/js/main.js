

$(document).ready(function(){

	const $animationElements = $(".animation-element");
	const $window = $(window);
	console.log($animationElements);
	$(window).scroll(function(){
		$.each($animationElements, function(){
			if ($(this).visible()){
				const animationType = $(this).attr("anim-type");
				pageAnimations.addAnimation($(this), animationType);
			}
		});
	});
});

const pageAnimations = {
	addAnimation: function(target, anim){
		$(target).addClass("animated").addClass(anim).removeClass("hidden");		
	},

/*	checkVisibility: function(animationElements){
		
	}*/
}