var apiLocation = 'http://localhost/scientia-engine/';

function populateEngineMenu() {
	$.getJSON(
		apiLocation,
		'c=getModuleNames',
		function(data) {
			modules = data.modules;
			var list = '';
			list += '<select id="engine">';
			$.each(modules, function(key, val) {
				list += '<option value="' + key + '">' + val + '</option>';
			});
			list += '</select>';
			$('#engine').replaceWith(list);
		}
	);
}

function getEngineLayout() {
	
}

function updateLayout() {
	
}