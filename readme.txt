Name: Joshua Michaud
Professor Zhou
Email: Joshua_Michaud@student.uml.edu
Date: 12/15/2020
Homework 8: Implementing a Bit of Scrabble with Drag-and-Drop (with Extra
Credits)


Link to my Current Page: https://joshua-michaud.github.io/GUI_HW8/
Link to my Website GitHub Repository: https://github.com/Joshua-Michaud/GUI_HW8.git

Things that work:
1. Players "hand" is selected randomly from data structure.
2. Letters are draggable and droppable
3. Program identifies which letter tile is dropped onto the board
4. Board includes bonus squares
5. score is tallied correctly, including the bonus square multipliers
6. The board is cleared after hitting the submit word button
7. Tiles can only be dragged from the “rack” to Scrabble board. If the user drop them
anywhere else, they will be bounced back to the “rack”.
8. Once the tile is placed on the Scrabble board, it can not be moved
9. user can always restart the game.

Partially working:
1. any number of words can be played until the player wishes to quit or depletes all tiles
Once the submit button is pressed 7 more tiles will show up even if you have some left but 
for some reason the tiles are draggable but the tiles wont stay onto the droppables.
2. after playing a word, only the number of letter tiles needed to bring the player’s “hand”
back to 7 tiles are selected. I was working on that with my getNewTiles() function once the submit
button was pressed but I kept getting issues.
3. score is kept for multiple words until the user restart a new game
This would work if I could figure out the problem above

Incomplete:
1. Except for the first letter, all sub-subsequent letters must be placed directly next to or
below another letter with no space. Else, they will bounce back to the “rack”.
Tiles can be placed anywhere on the scrabble board tiles
