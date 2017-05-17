

$(document).ready(function(){
	//reference to animation elements and window
	const $animationElements = $(".animation-element");
	const $window = $(window);

	//trigger on document load and every window scroll	
	pageAnimations.checkVisibility($animationElements);
	$window.scroll(function(){
		pageAnimations.checkVisibility($animationElements);
	});
});

const pageAnimations = {
	//animate target by modifying classes
	addAnimation: function(target, anim){
		$(target).addClass("animated").addClass(anim).removeClass("hidden");		
	},
	//check if any animated elments are visible to user
	checkVisibility: function(animationElements){
			$.each(animationElements, function(){
				if ($(this).visible()){
					const animationType = $(this).attr("anim-type");
					pageAnimations.addAnimation($(this), animationType);
			}
		});
	}
}