# Codenames
Minimal browser app for playing the party game Codenames

This consists of 2 main parts:

  -1) The Card Grid, this is optimized for tablets, preferably larger ones like ipad for legibility, but it can also be used on a desktop browser overr screenshare if one wants to play with others over zoom or something like that. This page displays a set of cards just like one would lay out in Codenames, they can be flipped by tapping or clicking, and once flipped they have a button to change the color of the card, ttaking the place of the colored tiles used to mark guessed words in the regular game. Intended play in person is to open the page full screen on a tablet and placce it in the middle of the table just like one would with the real word card grid. The word set used can be modified by changing the payload in the js file, and the words generated each time on load are fully random from within the list.
  
  -2) The Code Master grid, this takes the place of both the timer and the "code cards" the codemasters look at. The generated grid uses the same rules as the base game and is fully randomized but will always have the correct numbers of colors for each card type. First player is also randomized. Timer is 1:30 like the original game.
