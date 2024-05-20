<?php

spl_autoload_register(function ($class) {
    $prefix = 'Arcmedia\\Praktikum\\';

    $base_dir = __DIR__ . '/';

    $len = strlen($prefix);

    //Does it match the prefix?
    if(strncmp($prefix, $class, $len) !== 0){
        //nope, use a different autoloader
        return;
    }

    $relative_class = substr((string) $class, $len);

    //Replace namespace with directory
    $file = $base_dir . str_replace('\\', '/', (string) $relative_class) . '.php';

    //if exists, require
    if (file_exists($file)) {
        require $file;
    }
});