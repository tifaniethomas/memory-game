<h1>Memory Game</h1>

As a student in General Assembly's Software Engineering Immersive course, our first project is a browser-based game. I chose memory so I could play with my six-year-old daughter, who has loved every practice game I've made so far. With her in mind, I gave the game a colorful unicorn-in-space theme with simple fruit graphics on the card faces. 

I used a combination of HTML, CSS, and Javascript to create the gameboard, a deck of card that shuffles at the start of every game, and a play again button that populates after a winner has been declared. 

This was a wonderful challenge in breaking apart all the pieces that go into building a game and getting them all to work together cohesively. 

Memory Game PseudoCode:

4 of each fruit, 6 different fruits for 24 cards total<br>
cards need to populate at random for the start of the game<br>
message populates to display whose turn it is<br>
card selected has turn animation<br>
collect id of first choice<br>
collect id of second choice<br>
compare choices to find out if a match has been made<br>
wait for 3 seconds before hiding cards if no match (this ended up being far too long, so it's 1 second now)<br>
if there is a match, cards need to stay showing<br>
player score gets one point added for the match<br>
if there is not a match, cards hide again and next turn<br>
message updates to next player turn message<br>
when all cards are showing, player with the most points wins<br>
there are 12 points total<br>
if there is a tie, display tie-message<br>
reset board button is visible to click<br>
reset button turns all cards over and shuffles them


<img src="https://i.imgur.com/JwCY7dg.png" width="708" height="330">


<a href src="https://tifaniethomas.github.io/memory-game/"><h2>Click Here to Play the Game!</h2></a>

<h3>Special Thanks</h3>
Thank you so much to Michael and Victor for being so clear in explaining our lessons leading up to this project. It helped tremendously when the time came to sit down and start from scratch. Also, huge thanks to my group of classmates who were there to bounce ideas off of and have great discussions with.

<h3>Plans for the future</h3>
I would love to add more decks and themes to choose from. I'd also like to create the option to have solo-play and scores tracked for every game won.