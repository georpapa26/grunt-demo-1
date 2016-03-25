/*jshint globalstrict: true*/
'use strict';

var value1 = 10;
var value2 = 20;

function summary(a,b){
  result = a + b;
  return result;
}

function average(a,b){
  var s = sum(a,b);
  var a = s / 2;
  return a;
}

sum = summary(value1, value2);
avg = average(value1, value2);
