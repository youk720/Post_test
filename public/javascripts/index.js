'use strict';
$(document).ready(function () {
      setInterval(function(){
        $.getJSON("/sw", function(data){
  				console.log(data);
          $("#sw_now").html('スイッチの状態:' + (data.sw));
  			});
      }, 10);
			// $.getJSON("/sw", function(data){
			// 	console.log(data);
			// });

		});
