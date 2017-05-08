import $ from 'jquery';

export function getAttrForDomElement( element, attrName ){
	var $element = $( element );
	var $elementGroupId = $element.attr( attrName ) ? $element : $element.parent('['+attrName+']');
	
	return $elementGroupId.attr( attrName );
}
