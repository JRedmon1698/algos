<?php

// Given an array of coins, return the smallest amount of change you cannot make. 

function nonConstructibleChange($coins){
    sort($coins);
  
    $smallestChange = 0;
  
    foreach($coins as $coin) {
      if ($coin > $smallestChange + 1){
        return $smallestChange + 1;
      }
      $smallestChange += $coin;
    }
    return $smallestChange + 1;
  }
