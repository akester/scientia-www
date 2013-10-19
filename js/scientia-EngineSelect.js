/*
 * Scientia - Free Knowledge
 *
 * Copyright (C) 2013 - Andrew Kester
 *
 *    This file is part of Scientia.
 *
 *    Scientia is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    Scientia is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with Scientia.  If not, see <http://www.gnu.org/licenses/>.
 */

var apiLocation = 'http://localhost/scientia-engine/';

function populateEngineMenu() {
	$.getJSON(
		apiLocation,
		{
			c: 'getModuleNames'
		},
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
	).error(function() {
		var list = '';
		list += '<select id="engine" disabled="disabled">';
		list += '<option>Error Loading Engines</option>';
		list += '</select>';
		$('#engine').replaceWith(list);
	});
}

function getEngineLayout() {
	
}

function updateLayout() {
	
}