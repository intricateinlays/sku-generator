var baseUrl = 'http://localhost:8888/intricateinlays/sku-generator'; //window.location.origin+window.location.pathname;
console.log(baseUrl);

$.fn.skuSuggest = function(code) {
	$(this).each(function(i, e) {
		$(e).change(function() {
			var name = $(this).val();
			$.get(baseUrl + '/api.php', { name: name }, function(data) {
				console.log(data);
				$(code).val(data.sku);
			});
		});
	});
}
