<?php

// write a function that takes in a non-empty array of integers that are sorted in ascending order
// and returns a new array of the same length with the squares of the original integers also sorted
// in ascending order
function sortedSquaredArray($array){
    $mappedArray = array_map(function($num){
        return $num**2;
    }, $array);

    sort($mappedArray);

    return $mappedArray;
}
