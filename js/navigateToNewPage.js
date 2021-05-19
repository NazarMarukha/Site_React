$(document).ready(function()
	{
		// $('.subitem').click(function()
		// {
        //     $('.stroka').hide();
        //     $('.ui.four.column.grid').hide();
        //     $('.ui.grid.first-table').hide();
        //     $('.ui.grid.second-table').hide();
        //     $('.ui.grid.third-table').hide();
        //     $('.ui.two.column.grid').hide();
        //     $('.newPage').show();
		// });

        // $('.over_item.next').click(function()
		// {
        //     $('.stroka').hide();
        //     $('.ui.four.column.grid').hide();
        //     $('.ui.grid.first-table').hide();
        //     $('.ui.grid.second-table').hide();
        //     $('.ui.grid.third-table').hide();
        //     $('.ui.two.column.grid').hide();
        //     $('.newPage').show();
		// });
		
        // $('.ui.breadcrumb>a.section').click(function()
		// {
        //     $('.stroka').hide();
        //     $('.ui.four.column.grid').hide();
        //     $('.ui.grid.first-table').hide();
        //     $('.ui.grid.second-table').hide();
        //     $('.ui.grid.third-table').hide();
        //     $('.ui.two.column.grid').hide();
        //     $('.newPage').show();
		// });

        // $('.buttonReturn').click(function()
		// {
        //     $('.stroka').show();
        //     $('.ui.four.column.grid').show();
        //     $('.ui.grid.first-table').show();
        //     $('.ui.grid.second-table').show();
        //     $('.ui.grid.third-table').show();
        //     $('.ui.two.column.grid').show();
        //     $('.newPage').hide();
		// });
        

        $('.angle.down.icon.one').click(function()
		{
			if (!$('.angle.down.icon.one').hasClass('activated')) 
			{
				$('.angle.down.icon.one').addClass('activated');
                $('.sixteen.wide.column.first-table').css('height','46px');
			    $('.sixteen.wide.column.first-table>.flex2').css("display","none");
			    $('.sixteen.wide.column.first-table>.flex3').css("display","none");
			}
			else
			{
				$('.angle.down.icon.one').removeClass('activated');
				$('.sixteen.wide.column.first-table').css("height","458px");
			    $('.sixteen.wide.column.first-table>.flex2').css("display","flex");
			    $('.sixteen.wide.column.first-table>.flex3').css("display","flex");
			}
		});

        $('.angle.down.icon.two').click(function()
		{
			if (!$('.angle.down.icon.two').hasClass('activated')) 
			{
				$('.angle.down.icon.two').addClass('activated');
                $('.sixteen.wide.column.second-table1').css('height','51px');
			    $('.sixteen.wide.column.second-table1>.flex2').css("display","none");
                if($('.angle.down.icon.three').hasClass('activated') || $('.close.icon.three').hasClass('closed'))
                {
                    $('.ui.grid.second-table').css("height","0");
                    $('.ui.grid.third-table').css("margin-top","84px");
                }
			}
			else
			{
				$('.angle.down.icon.two').removeClass('activated');
				$('.sixteen.wide.column.second-table1').css("height","100%");
			    $('.sixteen.wide.column.second-table1>.flex2').css("display","flex");
                $('.ui.grid.second-table').css("height","410px");
                $('.ui.grid.third-table').css("margin-top","33px");
			}
		});
        
        $('.angle.down.icon.three').click(function()
		{
			if (!$('.angle.down.icon.three').hasClass('activated')) 
			{
				$('.angle.down.icon.three').addClass('activated');
                $('.sixteen.wide.column.second-table2').css('height','51px');
			    $('.sixteen.wide.column.second-table2>.flex2-rows').css("display","none");
                if($('.angle.down.icon.two').hasClass('activated') || $('.close.icon.two').hasClass('closed'))
                {
                    $('.ui.grid.second-table').css("height","0");
                    $('.ui.grid.third-table').css("margin-top","84px");
                }
                
			}
			else
			{
				$('.angle.down.icon.three').removeClass('activated');
				$('.sixteen.wide.column.second-table2').css("height","100%");
                $('.sixteen.wide.column.second-table2>.flex2-rows').css("display","flex");
			    $('.ui.grid.second-table').css("height","410px");
			    $('.ui.grid.third-table').css("margin-top","33px");
			}
		});

		$('.angle.down.icon.four').click(function()
		{
			if (!$('.angle.down.icon.four').hasClass('activated')) 
			{
				$('.angle.down.icon.four').addClass('activated');
                $('.ui.grid.third-table').css('height','51px');
			    $('.ui.grid > .sixteen.wide.column.third-table > .flex2 > .table-content').css("display","none");
			}
			else
			{
				$('.angle.down.icon.four').removeClass('activated');
				$('.ui.grid.third-table').css("height","410px");
			    $('.ui.grid > .sixteen.wide.column.third-table > .flex2 > .table-content').css("display","");
			}
		});
		
		$('.angle.down.icon.five').click(function()
		{
			if (!$('.angle.down.icon.five').hasClass('activated')) 
			{
				$('.angle.down.icon.five').addClass('activated');
                $('.ui.two.column.grid > .column.one').css('height','51px');
			    $('.ui.two.column.grid > .column.one > .ui.grid > .sixteen.wide.column > .flex2').css("display","none");
			}
			else
			{
				$('.angle.down.icon.five').removeClass('activated');
				$('.ui.two.column.grid > .column.one').css('height','100%');
			    $('.ui.two.column.grid > .column.one > .ui.grid > .sixteen.wide.column > .flex2').css("display","");
			}
		});

		$('.angle.down.icon.six').click(function()
		{
			if (!$('.angle.down.icon.six').hasClass('activated')) 
			{
				$('.angle.down.icon.six').addClass('activated');
                $('.ui.two.column.grid > .column.two').css('height','51px');
			    $('.ui.two.column.grid > .column.two > .ui.grid > .sixteen.wide.column > .flex2').css("display","none");
			}
			else
			{
				$('.angle.down.icon.six').removeClass('activated');
				$('.ui.two.column.grid > .column.two').css('height','100%');
			    $('.ui.two.column.grid > .column.two > .ui.grid > .sixteen.wide.column > .flex2').css("display","");
			}
		});

		$('.close.icon.one').click(function()
		{
			$('.ui.grid.first-table').css("display", "none");
			$('.ui.grid.second-table').css("margin-top", "32px");
		});

		$('.close.icon.two').click(function()
		{
			$('.ui.grid.column-second-table1').css("display", "none");
			$('.close.icon.two').addClass('closed');
			if($('.close.icon.three').hasClass('closed') )
			{
				$('.ui.grid.second-table').css("display", "none");
				$('.ui.grid.third-table').css("margin-top","33px");
				
			}
		
		});

		$('.close.icon.three').click(function()
		{
			$('.ui.grid.column-second-table2').css("display", "none");
			$('.close.icon.three').addClass('closed');
			if($('.close.icon.two').hasClass('closed'))
			{
				$('.ui.grid.second-table').css("display", "none");
				$('.ui.grid.third-table').css("margin-top","33px");
			}
		});

		$('.close.icon.four').click(function()
		{
			$('.ui.grid.third-table').css("display", "none");
			$('.ui.two.column.grid').css("margin-top", "33px");
		});

		$('.close.icon.five').click(function()
		{
			$('.column.one > .ui.grid').css("display", "none");
		});

		$('.close.icon.six').click(function()
		{
			$('.column.two > .ui.grid').css("display", "none");
		});

	

});
