<?php

namespace Arcmedia\Praktikum\Core;

/**
 * Ladet Templates
 * Platzhater in der Template Datei werden folgendermassen geschrieben
 * {{$NAME}}
 */
class Template
{
    public static function renderTemplate(string $file, array $attributes = []): string
    {
        $content = file_get_contents(__DIR__ . "/../../templates/" . $file);
        foreach ($attributes as $key => $val) {
            $content = str_replace('{{$'.$key.'}}', (string) $val, (string) $content);
        }
        return $content;
    }
}
