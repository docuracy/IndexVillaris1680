// This file determines the interpretation of glyphs used in Index Villaris
//
<?php 
// echo json_decode('"\u00b0 \u0298 \u2460 \u2461 \u2462 \u2657 \u2693 \u26e8 \u26ea \u270b \u274b \u2e38"')."<br/>";
// ° ʘ ① ② ③ ♗ ⚓ ⛨ ⛪ ✋ ❋ ⸸
$glyphs = [
    json_decode('"\u270b\u00b0"') => 'settlement-baronet',
    json_decode('"\u2e38\u00b0"') => 'settlement-knight',
    json_decode('"\u2462\u26e8"') => 'settlement-gentlemen-3+',
    json_decode('"\u2462"') => 'settlement-gentlemen-3',
    json_decode('"\u2461"') => 'settlement-gentlemen-2',
    json_decode('"\u2460"') => 'settlement-gentlemen-1',
    '[K]' => 'seat-king',
    json_decode('"\u2657"') => 'seat-bishop',
    '[D]' => 'seat-duke',
    '[M]' => 'seat-marquess',
    '[E]' => 'seat-earl',
    '[V]' => 'seat-viscount',
    '[B]' => 'seat-baron',
    json_decode('"\u270b"') => 'seat-baronet',
    json_decode('"\u2e38"') => 'seat-knight',
    json_decode('"\u0298"') => 'seat-gentleman',
    '(4)' => 'parliament-4',
    '(2)' => 'parliament-2',
    '(1)' => 'parliament-1',
    json_decode('"\u274b"') => 'society',
    json_decode('"\u26ea"') => 'parish',
    json_decode('"\u2693"') => 'seaport',
    '=' => 'direction'
];

$glyph_patterns = array_keys($glyphs);
foreach($glyph_patterns as &$glyph_pattern){
    $glyph_pattern = "/".preg_replace(["/\[/","/\]/","/\(/","/\)/"],["\[","\]","\(","\)"],$glyph_pattern)."/";
}
?>
