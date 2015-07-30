			jQuery(function($) {
				$( "#example-1" ).wizard({
					stepsWrapper: "#wrapped",
					submit: ".submit",
					beforeForward: function( event, state ) {
						if ( state.stepIndex === 1 ) {
							$("#name").text($("[name=name]").val());

						} else if ( state.stepIndex === 2 ) {
							$("#gender").text($("[name=gender]").val());
						}
						return !!$( this ).wizard( "form" ).valid();
					}
				}).wizard( "form" ).submit(function( event ) {
					event.preventDefault();
					alert( "Form submitted!" );

				}).validate({
					errorPlacement: function( error, element ) {
						if ( element.is( ":radio" ) || element.is( ":checkbox" ) ) {
							error.insertBefore( element.next() );

						} else {
							error.insertAfter( element );
						}
					}
				});
			});
