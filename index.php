<?php require '_helper.php' ?>

<form method="index.php">
  <p>Item Name
    <input type="text" name="name" value="<?php echo $name; ?>"/>
  </p>
  <p>SKU
    <input type="text" value="<?php echo $sku; ?>">
  </p>
  <button type="submit">Generate</button>
</form>
