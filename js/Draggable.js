/*
Name: Joshua Michaud
Email: Joshua_Michaud@student.uml.edu
Affiliation: Student at Umass Lowell Computer Science
Date: 12/15/2020
Description: This webpage is uses JavaScript & jQuery to create a scrabble game
Location: github
91.461 Assignment: Assignment #8
Joshua Michaud, UMass Lowell Computer Science,
Copyright (c) 2020 by Joshua Michaud. All rights reserved. May be
freely copied or excerpted for educational purposes with credit to the author.
*/

//array used to get tile info
let tilePiece = [
	{"letter":"A", "value":1, "amount":9},
	{"letter":"B", "value":3, "amount":2},
	{"letter":"C", "value":3, "amount":2},
	{"letter":"D", "value":2, "amount":4},
	{"letter":"E", "value":1, "amount":12},
	{"letter":"F", "value":4, "amount":2},
	{"letter":"G", "value":2, "amount":3},
	{"letter":"H", "value":4, "amount":2},
	{"letter":"I", "value":1, "amount":9},
	{"letter":"J", "value":8, "amount":1},
	{"letter":"K", "value":5, "amount":1},
	{"letter":"L", "value":1, "amount":4},
	{"letter":"M", "value":3, "amount":2},
	{"letter":"N", "value":1, "amount":5},
	{"letter":"O", "value":1, "amount":8},
	{"letter":"P", "value":3, "amount":2},
	{"letter":"Q", "value":10, "amount":1},
	{"letter":"R", "value":1, "amount":6},
	{"letter":"S", "value":1, "amount":4},
	{"letter":"T", "value":1, "amount":6},
	{"letter":"U", "value":1, "amount":4},
	{"letter":"V", "value":4, "amount":2},
	{"letter":"W", "value":4, "amount":2},
	{"letter":"X", "value":8, "amount":1},
	{"letter":"Y", "value":4, "amount":2},
	{"letter":"Z", "value":10, "amount":1}
];

//global variables
let i;
let j = 0;
let score = 0;
let words = "";

//https://stackoverflow.com/questions/38028386/jquery-create-image-and-div-and-then-append-image-to-div
//https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
//https://www.elated.com/drag-and-drop-with-jquery-your-essential-guide/
//ready document function
$(function(){
	let imgId;
	//loop to create a div that will hold the tile image and data
	for(i = 0; i < 7; i++)
	{
		//converts number into a letter
		imgId = String.fromCharCode(randomLetter());
		//creates the div with attributes and appends it to another div
		let dropDiv = $('<div />', {
			id: "imgTileHolder" + i,
			class: "imgHelper",
		}).appendTo('#handTiles');
		//creates the image with attributes and data used for draggable
		var image = $('<img />', {
			id:imgId,
			src: 'Scrabble_Tiles1/Scrabble_Tile_' + imgId + '.jpg'
		}).data({'number': tilePiece[j].value, 'letter': tilePiece[j].letter, 'amount': tilePiece[j].amount}).appendTo('#imgTileHolder' + i).draggable({
			stack: '#tileDrops div',
			cursor: 'move',
			revert: true
		});
	}
	//loop that creates the single board game line
	for(i = 0; i < 7; i++){
		//test for i to create 2 special game tiles
		if(i == 1 || i == 5){
			let dropDiv1 = $('<div />', {
				id: "imgContainer" + i,
				class: "helper"
			}).appendTo('#tileDrops');
			var dropImg1 = $('<img />', {
				id: i,
				src: 'Scrabble_Tiles1/TileBoardSpecial2.PNG'
			}).appendTo('#imgContainer' + i).droppable({
				drop: handleDropEvent1
			});
		}
		//this creates a div then puts a regular game board tile image within it
		else{
			//
			let dropDiv2 = $('<div />', {
				id: "imgContainer" + i,
				class: "helper"
			}).appendTo('#tileDrops');
			var dropImg2 = $('<img />', {
				id: i,
				src: 'Scrabble_Tiles1/TileBoard1.PNG'
			}).appendTo('#imgContainer' + i).droppable({
				drop: handleDropEvent
			});
		}
	}
});

//function for when new game button is pressed basically does what function above does
function newTiles(){
	let imgId;
	for(i = 0; i < 7; i++)
	{
		imgId = String.fromCharCode(randomLetter());
		let dropDiv = $('<div />', {
			id: "imgTileHolder" + i,
			class: "imgHelper",
		}).appendTo('#handTiles');
		var image = $('<img />', {
			id:imgId,
			src: 'Scrabble_Tiles1/Scrabble_Tile_' + imgId + '.jpg'
		}).data({'number': tilePiece[j].value, 'letter': tilePiece[j].letter, 'amount': tilePiece[j].amount}).appendTo('#imgTileHolder' + i).draggable({
			stack: '#tileDrops div',
			cursor: 'move',
			revert: true
		});
	}
	for(i = 0; i < 7; i++){
		if(i == 1 || i == 5){
			let dropDiv1 = $('<div />', {
				id: "imgContainer" + i,
				class: "helper"
			}).appendTo('#tileDrops');
			var dropImg1 = $('<img />', {
				id: i,
				src: 'Scrabble_Tiles1/TileBoardSpecial2.PNG'
			}).appendTo('#imgContainer' + i).droppable({
				drop: handleDropEvent1
			});
		}
		else{
			let dropDiv2 = $('<div />', {
				id: "imgContainer" + i,
				class: "helper"
			}).appendTo('#tileDrops');

			var dropImg2 = $('<img />', {
				id: i,
				src: 'Scrabble_Tiles1/TileBoard1.PNG'
			}).appendTo('#imgContainer' + i).droppable({
				drop: handleDropEvent
			});
		}
	}
}

//gets a random number to convert to a letter
function randomLetter(){
	j = (Math.floor(Math.random() * 25));
	return j + 65;
}

//sets final score
function getFinalScore(){
	$("#score").text(score);
}

//this function is used to get a new hand after hitting the submit button
//its not a 100% working function still needs to be fixed
function getNewTiles(){
	let correctValue = $(".correct > div").length;
	console.log(correctValue);
	//deletes all the tiles that have been dropped
	$(".correct").remove();
	let imgId;
	for(i = 0; i < 7; i++)
	{
		imgId = String.fromCharCode(randomLetter());
		let dropDiv = $('<div />', {
			id: "imgTileHolder" + i,
			class: "imgHelper",
		}).appendTo('#handTiles');
		var image = $('<img />', {
			id:imgId,
			src: 'Scrabble_Tiles1/Scrabble_Tile_' + imgId + '.jpg'
		}).data({'number': tilePiece[j].value, 'letter': tilePiece[j].letter, 'amount': tilePiece[j].amount}).appendTo('#imgTileHolder' + i).draggable({
			stack: '#tileDrops div',
			cursor: 'move',
			revert: true
		});
	}
}


function newGame()
{
	for(i = 0; i < 7; i++){
		/*Removes game tiles*/
		$(".imgHelper").remove();
		/*Removes the droppable tiles*/
		document.getElementById('imgContainer' + i).remove();
	}
	//call to create new droppable and draggable tiles
	newTiles();
}

//once a tile is dragged on a regular board slot run this function
function handleDropEvent( event, ui ) {
	var draggable = ui.draggable.data('number');
	score = score + draggable;
	words = words + ui.draggable.data('letter');
	$("#word").text(words);
	console.log(score);
	ui.draggable.addClass( 'correct' );
	ui.draggable.draggable( 'disable' );
	$(this).droppable( 'disable' );
	ui.draggable.position( { of: $(this), my: 'center center', at: 'center center', collision: 'fit fit' } );
	ui.draggable.draggable( 'option', 'revert', false );
}

//once a tile is dragged on a double letter board slot run this function
function handleDropEvent1( event, ui ) {
	//gets the draggable data value
	var draggable = ui.draggable.data('number');
	//multiply 2 by the value stored in draggable for total score
	draggable = draggable * 2;
	//store final score
	score = score + draggable;
	//stores drggable letter data
	words = words + ui.draggable.data('letter');
	//sets the text for this id with the data letter for the final word
	$("#word").text(words);
	//debugging
	console.log(score);
	//https://www.elated.com/res/File/articles/development/javascript/jquery/drag-and-drop-with-jquery-your-essential-guide/card-game.html
	ui.draggable.addClass( 'correct' );
	ui.draggable.draggable( 'disable' );
	$(this).droppable( 'disable' );
	ui.draggable.draggable( 'option', 'revert', false );
	ui.draggable.position( { of: $(this), my: 'center center', at: 'center center', collision: 'fit fit' } );

}

//when submit work is pressed run functions
$("#submitWords").click( function (){
	getFinalScore();
	getNewTiles();
});

//when new game is pressed run functions
$("#resetButton").click( function (){
	newGame();
	//resets score and word
	score = 0;
	$("#score").text(score);
	words = "";
	$("#word").text(words);
});
