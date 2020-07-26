var baseUrl = 'http://localhost:8888/intricateinlays/sku-generator';
// var baseUrl = 'http://sku-generator.intricateinlays.com';

$.fn.suggestSku = function(code) {
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
