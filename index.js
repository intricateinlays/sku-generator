$.fn.suggestSku = function(code) {
	// var baseUrl = 'http://localhost:8888/intricateinlays/sku-generator';
	var baseUrl = 'http://sku-generator.intricateinlays.com';
	$(this).each(function(i, e) {
		$(e).change(function() {
			var name = $(this).val();
			var url = baseUrl + '/api.php';
			console.log('lalala');
			console.log(url);
			$.get(url, { name: name }, function(data) {
				console.log(data);
				$(code).val(data.sku);
			});
		});
	});
}
