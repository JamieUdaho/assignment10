$(document).ready(function (){

var resultsList = $('#contentResults');
var resultsImage, resultsTitle, resultsPrice, resultsCurrencyCode, resultsShop, resultsHolder;
var urlImage, belowTitle, priceAndCurrency;

items.results.forEach(function(item) {

  urlImage = item.Images[0].url_170x135;
  resultsTitle = '<div class="resultsTitle"><a>' + item.title + '</a></div>';
  resultsShop = '<div class="resultsShop"><a>' + item.Shop.shop_name + '</a></div>';
  resultsPrice = '<div class="resultsPrice">' + '$' + item.price + '</div>';
  resultsCurrencyCode = '<div class="resultsCurrencyCode">' + item.currency_code + '</div>';
  resultsImage = '<a class="resultsImage"><img src="' + urlImage + '" /><i class="hoverButtons"></i><a/>';
  priceAndCurrency = '<div class="priceAndCurrency">' + resultsPrice + ' ' + resultsCurrencyCode + '</div>';
  belowTitle = '<div class="belowTitle">' + resultsShop + priceAndCurrency  + '</div>';
  resultsHolder = '<li>' + resultsImage + resultsTitle + '\n' + belowTitle + '</li>';

  resultsList.append(resultsHolder);

  });

});
