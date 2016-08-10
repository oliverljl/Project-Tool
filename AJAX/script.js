$('#search').keyup(function(){
	var searchContent = $('#search').val();
	var rex = new RegExp(searchContent,"i");
	console.log(rex);
	$.getJSON('tiles.json',function(data){
	var output = '<ul class="searchContent">';
	$.each(data,function(key,value){
		for (var i=0;i<value.length;i++)
		{	
			if(value[i].Caption.search(rex)!=-1){
			output+= '<li>'
			output+= value[i].Caption;
			output+= '</br>';
			output+= value[i].TileProperties.HomeURL;
			output+= '<img src='+ '"' + value[i].TileProperties.HomeURL +'"' + '>';
			output+= " ";
			output+= '</li>';
			}
		}
	});
	output += '</ul>'
	// console.log(output);
	$('#content').html(output);
})
})
