"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', function (results) {
    	$('#fortune-text').html(results);
    });

}

$('#get-fortune-button').on('click', showFortune);




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function(results) {
    	$('#weather-info').html(results.forecast);
    });

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    let formData = {"qty": $("#qty-field").val(),
					"melon_type": $("#melon-type-field").val()};

	$.post("/order-melons.json", formData, extractMelonResults)
}

function extractMelonResults(results) {
	let code = results.code;
	let msg = results.msg;

	if (code !== 'ERROR') {
		$('#order-status').removeClass('order-error');
		$('#order-status').html(msg);
	} else {
		$('#order-status').addClass('order-error');
		$('#order-status').html(msg);
	}
}

$("#order-form").on('submit', orderMelons);


