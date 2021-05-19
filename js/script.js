$(document).ready(function()
	{
		$('.openButton').click(function()
		{
			if (!$('.openButton').hasClass('openDone')) 
			{
				$('.openButton').addClass('openDone');
				$('.aside').css("left","-314px");
				$('.content').css("width","100%");
				$('.content').css("left","0px");
				$('.content').css("padding-bottom","5px");
				$('#my_dataviz').css("position", "relative");
			}
			else
			{
				$('.openButton').removeClass('openDone');
				$('.aside').css("left","0px");
				$('.content').css("width","calc(100% - 314px)");
				$('.content').css("left","314px");
				$('.content').css("padding-bottom","0px");
				$('#my_dataviz').css("position", "");
			}
		});
	});
