
$(function(){
	var $circle = $('.circle');
	var $circlehidden = $('.circlehidden');
	var $text = $('.text');
	var $body = $(document.body);

	$( "button.action" ).on('click', function(){
		$circle.stop( true );
		$body.stop( true );
		$text.stop( true );
		
		var action = $(this).attr('data-action');
		
		switch( action ){
			case  "action1":
				$circle
				.animate({
					left: "+=200px"
				})
				.animate({
					left: "-=200px"
				});
			break;
			case  "action2":
				$circle.animate({
					right:"-=250px"
				})
				.animate({
					top:"+=150px"
				})
				.animate({
					top:"-=150px"
				})
				.animate({
					top:"+=150px"
				})
				.animate({
					right:"+=250px"
				})
			break;
			case  "action3":
				for (i = 0; i < 4; i++) 
				{
					$circle.animate({
						opacity: 0.5,
					})
					.animate({
						opacity: 1
					})
				}
			break;
			case  "action4":
			for (i = 0; i < 5; i++) 
				{
					$circle.animate({
						backgroundColor: "red"
					},100).animate({
						backgroundColor: "blue"
					}, 100);

					$text.animate(
						{color:"black"
					}, 100)
					.animate(
						{color:"white"
					}, 100);
				}
			break;
			case  "gomental":
				for (i = 0; i < 50; i++) 
				{
					$circle.animate({
						backgroundColor: "black",
					}, 500)
					.animate({
						backgroundColor: "white"
					},{
						duration : 500,
						easing : 'easeInSine'
					}

				);

					$text.animate(
						{color:"white"
					}, 20)
					.animate(
						{color:"black"
					},20);
				};
				for (j = 0; j < 2; j++) 
				{
					$body.animate({
						backgroundColor:"white"
					}, {
						duration : 500,
						easing : 'easeInSine'
					});
					$body.animate({
						backgroundColor:"black"
					}, {
						duration : 500,
						easing : 'easeInSine'
					});
				}
			break;
			case "hide":
				$circlehidden.animate({
					opacity:1
				});
			break;
			case "reset":
				$text.show();
				$circle.animate({
					top: '200px',
					left: '400px',
					opacity:1,
					backgroundColor: 'white'
					});
				$circlehidden.animate({
					opacity:0
				})		
				$body.animate({
					backgroundColor: 'black'
				})
				$text.animate({
					color: 'black'
				})
			break;

			case "blowup":
				//$text.hide();
				$circle.toggle( "explode" );
				$circlehidden.toggle( "explode" );
			break;
		}
	});
})

