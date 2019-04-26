(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
			if (name=="charity_select") {
				if(value=="charity_a")
					obj['charity_match'] = "10%";
				else if(value=="charity_b")
					obj['charity_match'] = "50%";
				else if(value=="charity_c")
					obj['charity_match'] = "20%";
				else
					obj['charity_match'] = "0%";
			}
		}
		obj['company'] = 'Company A'
		return JSON.stringify( obj );
	}
	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "test" );
		var output = document.getElementById( "output" );

		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;

			console.log(json)

		}, false);

	});

})();

$(document).ready(function(){
        $("select").change(function(){
            $(this).find("option:selected").each(function(){
                var optionValue = $(this).attr("value");
                if(optionValue){
                    $(".box").not("." + optionValue).hide();
                    $("." + optionValue).show();
                } else{
                    $(".box").hide();
                }
            });
        }).change();
    });