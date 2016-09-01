<!doctype html>
<html>
  <head>
    <title>Sample App</title>
    <link rel='stylesheet' type='text/css' href='http://localhost:3030/build/index.css'>
  </head>
  <body>
		<?php

    function renderReactComponent($name, $props) {
      return '<div data-react-component="'.$name.'" hidden="true">'.json_encode($props).'</div>';
    }

		?>
    <?php
      echo renderReactComponent('InputTest', [
        'test' => 'HelloWorld'
      ]);
      // http://localhost:3030/build/index.js для dev
      // build/index.js для prod
     ?>
    <script src='http://localhost:3030/build/index.js'></script>
  </body>
</html>
