<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="http://sku-generator.intricateinlays.com/index.js"></script>
<!-- <script src="http://localhost:8888/intricateinlays/sku-generator/index.js"></script> -->
<script>
  $(function() {
    $('#name').suggestSku($('#code'));
  });
</script>

<p>Item Name
  <input type="text" id="name">
</p>
<p>SKU
  <input type="text" id="code">
</p>
