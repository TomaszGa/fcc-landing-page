

$(document).ready(function(){
	pageAnimations.addAnimationTimed(".hero", "fadeIn", 500);
	pageAnimations.addAnimationTimed(".primary-nav", "fadeIn", 700);


	$(window).scroll(function(){
		if ($(".info1").visible()){
			pageAnimations.addAnimation(".info1", "fadeInLeft")
		}
		if ($(".info2").visible()){
			pageAnimations.addAnimation(".info2", "fadeInRight")
		}
		if ($(".info3").visible()){
			pageAnimations.addAnimation(".info3", "fadeInLeft")
		}	
		if ($(".vid-section").visible()){
			pageAnimations.addAnimation(".vid-section", "fadeInUp")
		}
		if ($(".proposal-left").visible()){
			pageAnimations.addAnimation(".proposal-left", "fadeInLeft")
		}
		if ($(".proposal-center").visible()){
			pageAnimations.addAnimation(".proposal-center", "fadeIn")
		}
		if ($(".proposal-right").visible()){
			pageAnimations.addAnimation(".proposal-right", "fadeInRight")
		}
		if ($(".main-footer").visible()){
			pageAnimations.addAnimation(".main-footer", "fadeIn")
		}														
	});

});


const pageAnimations = {
	addAnimation: function(target, anim){
		$(target).addClass("animated").addClass(anim).removeClass("hidden");		
	},

	addAnimationTimed: function(target, anim, timer){
		setTimeout(function(){
		$(target).addClass("animated").addClass(anim).removeClass("hidden");
		}, timer);
	}
}