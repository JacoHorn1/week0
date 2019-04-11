This website was made for the week0 Project of CS50's Web Programming with Python and JavaScript.

The website is themed behind learning to play better bass.
It contains the tabs for two songs and a metronome the help you keep beat.

Contents of each file:
1. index.html
  This is the home page of the website.
  This page contains a table with links and info to the different bass tabs.
  This page contains a link to the metronome.
  This page contains an image.
  The header on this page changes based on a @Media tag.

2. metronome.html
  This is just a small form that contains a beats per minute input field and a start and stop button.
  The start button will trigger a javascript method to run recursively until stop is pressed. (Playing the metronome sound at the bbm selected)
  The stop button will cause the recursive method to break out.

3. about.html
 Contains a short write-up on the page.
 Contains links to websites that was used to retrieve tabs and help me style the website.

4. tabs.html
 This page contains written out tabs for two songs.
 The tabs used flex-wrap to always display correctly without having to horizontal scroll.
 Bootstrap columns is used to show / hide a legend for the tabs.

5. css/index.css + css/index.scss
  This is where all my custom styling was added for all html pages mentioned above.

6. js/metronome.js
  This is where all my custom javascript methods are written for the metronome.html page.

7. media folder
  Contains image for index.html.
  Contains .m4a file for the metronome.
