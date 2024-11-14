# SCRATCH_AND_SCRIPT_GAME_DEV

This is a ping pong game made by Gedion Mekbeb Afework. I am a student at Addis Ababa University, Addis Ababa Institute of Technology. I used AI (ChatGPT) to build this game. This is the steps I used to build the game apart from the prompts. The prompts are written next.
First I imported 'flask' and 'flask-cors' libraries using:
pip install flask
pip install flask-cors
respectively.
Then, copy and pasted the code into the necessary files. For the backend: backend.py, for the html: index.html, for styling: style.css and for functionality: script.js.
Then, to run the project, I first had to start the backend using 'python backend.py'
Then, open the index.html.

The prompts I used are listed down below.
The first prompt
"Create a ping pong game. Use python as the backend, and html and css as the front end. Add js to it as well."

The second prompt
"The game is good, but it has issues. These are the issues that should be fixed:

1. I can't control it using arrow buttons.
2. Change the color of the table, black isn't usually used as a ping-pong table.
3. The ball doesn't go to the opponents side, it just goes to the middle of the table then it just returns. This means that the opponent doesn't need to play to win.
4. There should be levels
5. There should also be a choice for the game as the final score. Like first to 5 or first to 10 then the entity who scored it first will win.
   Fix these problems."

Third prompt
"Now the is at the middle, it doesn't go both ways. Correct that. Apart from that everything is good."

Fourth prompt
"The ball either doesn't go fully to the other side or just stay in a point and go back and forth like a pendulum with a max speed without going anywhere from that point. Fix this error. It has somehow showed a few progress from the last one, but it still shows the same problem. So, fix it. The ball should go to both sides smoothly. "

Fifth prompt
"Now everything is good, just a few minor corrections and additions.

1. The opponents paddle has the same glitch like the ball had the last time. Don't change the balls functionalities. Just make the paddle less glitchy.
2. Add a net in the middle of the table.
3. Add a favicon."

Sixth prompt
"The glitch is still there. It starts when one entity scores. After the first score, the paddle of the opponent starts to glitch. The favicon is blank as well."

Seventh prompt
"The favicon is not working so, send me a picture that I could download and link it locally. Apart from that, everything is perfect."
