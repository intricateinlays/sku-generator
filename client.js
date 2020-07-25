class SkuGenerator {
	static generate(name) {
		$.get('api.php', { name: name }, function(data) {
			console.log(data);
		});
	}
}
