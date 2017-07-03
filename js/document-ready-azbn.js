'use strict';

$(function(){
	
	$('form.azbn7__api__form__formsave').on('submit.azbn7', function(event){
		event.preventDefault();
		
		var form = $(this);
		
		var __input_method = $('<input/>', {
			type : 'hidden',
			name : 'method',
			value : 'formsave',
		})
			.appendTo(form)
		;
		
		$.ajax({
			url : '/api/',
			type : 'POST',
			dataType : 'json',
			data : form.serialize(),
			success : function(resp){
				
				__input_method.empty().remove();
				
				form.trigger('reset');
				form.closest('.modal').modal('hide');
				
			},
			error : function(jqXHR, textStatus, errorThrown){
				console.warn(textStatus);
			},
		});
		
	});
	
})