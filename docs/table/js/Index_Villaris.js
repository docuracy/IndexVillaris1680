var data,
	counties = [];
	
function updateHash(){
	window.location.hash = $('#counties').find(":selected").val()+($('#fulltable').hasClass('uncertain')?'?':'');
}

function loadCounty(county){
	$('#fulltable').css('display','none');
	updateHash();
	$('#fulltable tbody').html('');
	data.features.forEach((feature,i) => {		
		var thisCounty = decodeURI(feature.properties.county);	
		if (thisCounty==county) {
			var id = feature['@id'].split(':')[1];
			var glyphs = '';
			$(feature.properties.glyphs).each(function(j,glyph) {
				if(!(['direction','market'].includes(glyph))) glyphs+='<img src="../glyphs/'+glyph+'.png" title="'+glyph+'" />';
			});
			var kvdb = [];
			if ('kvdb' in feature) {
				feature.kvdb.forEach(suggestion => {
					kvdb.push((suggestion.Wikidata.label==null?'':(suggestion.Wikidata.label+': '))+suggestion.notes);
				})
				kvdb = '<div class="kvdb">Suggestion'+(kvdb.length>1?'s':'')+':<ul><li>'+kvdb.join('</li><li>')+'</li></ul></div>';
			}
			else kvdb = '';
			var coordinates = feature.geometry.geometries[feature.geometry.geometries.length - 1].coordinates;
			var certainty = feature.geometry.geometries[0].certainty;
			$('#fulltable tbody').append('<tr id="'+id+'" class="'+certainty+'">'
				+'<td>'+glyphs+'</td>'
				+(certainty=='certain'?'<td>'+feature.properties.title+'</td>':'<td><a href="../#/10/'+coordinates[0]+'/'+coordinates[1]+'/mode=points+facet=suggestions+filters=certainty[(uncertain),(less-certain)],county[('+county+')]+selected=IV%3A'+id+'">'+feature.properties.title+'</a>'+kvdb+'</td>')
				+'<td>'+decodeURI(feature.properties.hundred.split(' (')[0])+'</td>'
				+'<td>'+county+'</td>'
				+'<td>'+coordinates[1]+'</td>'
				+'<td>'+coordinates[0]+'</td>'
				+'</tr>');
		}
	});
	$('#fulltable').css('display','table');
}

$(document).ready(function() {
	
	$.get("../data/IV-GB1900-OSM-WD.lp.json", function(dataset, status){
		data = dataset;
		var kvdb=[];
		$.ajax({
			url: 'https://kvdb.io/EWuFG2nmhkN78fQoKHUKCp/?values=true&format=json',
			async: false,
			success: function(kvdbjson, status){
				kvdbjson.forEach(suggestion => {
					var id = suggestion[0].split(':')[1];
					if (!(id in kvdb)) kvdb[id] = [];
					kvdb[id].push(JSON.parse(suggestion[1]));
				});
			}
		});
		data.features.forEach((feature,i) => {		
			var id = feature['@id'].split(':')[1];
			if (id in kvdb) feature.kvdb = kvdb[id];
			var county = decodeURI(feature.properties.county);
			counties.push(county);
		});
		counties = [...new Set(counties)].sort();
		$('#counties').html('<option selected disabled>Select Historical County</option>');
		counties.forEach(county => {
			$('#counties').append('<option value="'+county+'">'+county+'</option>');
		})
		var hash = window.location.hash.split('#').pop().split('?');
		$('#uncertain,label[for=uncertain]').css('display','inline');
		$('#uncertain')
		.change(function (){
			$('#fulltable').toggleClass('uncertain');
			updateHash();
		})
		.prop('checked', hash.length==2);
		if(hash.length==2) $('#fulltable').addClass('uncertain');
		$('#counties')
		.on('change', function() {
		  loadCounty( this.value );
		});
		$('#counties option[value="' + hash[0] + '"]').prop('selected', true);
		if(hash[0]!=='') $('#counties').change();
  	});
	
});
