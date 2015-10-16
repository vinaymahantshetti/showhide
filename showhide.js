(function($) {
	    $.fn.showhide = function(params) {
	         var element = this;
	         
	         var options = $(element).data();
	         var defaultShowSection = options.defaultShow;
	         var btnActiveClass = options.btnActiveClass || 'dt-btn-active';
	         
	         function init() {
	        	 hideAllSections(element);
	        	 removeBtnActiveClass(element);
	        	 showSection(element, defaultShowSection);
	         }
	         
	         function hideAllSections(element) {
	        	 $(element).find('[data-showhide]').each(function() {
		        	 $(this).hide();
		         });
	         }	         
	         
	         function showSection(element,section) {
		         $(element).find('[data-showhide="'+section+'"]').show();
		         $(element).find('[data-showhide-btn="'+section+'"]').addClass(btnActiveClass);
	         }
	         
	         function removeBtnActiveClass(element) {
	        	 $(element).find('[data-showhide-btn]').each(function() {
		        	 $(this).removeClass(btnActiveClass);
		         });
	         }
	         
	         $(element).on('click', '[data-showhide-btn]', function() {
	        	 hideAllSections(element);
	        	 removeBtnActiveClass(element);
	        	 var section = $(this).data('showhideBtn');
	        	 showSection(element,section);
	         });
	         
	         init();
	    };
	    
	    $('[data-toggle]').each(function(index,element) {
	    	var plugin = $(element).data('toggle');
	    	
	    	switch(plugin) {
	    		case 'showhide' :
	    			$(element).showhide();
	    			break;
	    	}
	    });
	})(jQuery);
