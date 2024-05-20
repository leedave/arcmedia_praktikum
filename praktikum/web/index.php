<?php
require_once __DIR__ . '/../src/autoload.php';
//require_once __DIR__.'/../src/fragen.php';

use Arcmedia\Praktikum\Core\Template;

session_start();

$attribute = [

];

echo Template::renderTemplate("start.html", $attribute);