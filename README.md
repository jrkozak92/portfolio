# portfolio
Portfolio Based on Unit 1 GA project

# Technologies Used
HTML, CSS, JavaScript, jQuery

All of the implementations of these technologies aren't too fancy, with a few exceptions.

I was able to detach an animation from its reference element by using a CSS pseudo element, which I thought was pretty cool.

I think the jQuery .slideToggle() method is a pretty neat find. I have no idea how widely used it is.

Other than those, the JavaScript/jQuery is pretty much just arrays, object, functions, variables, and loops. The fanciest thing in the HTML is the Google Fonts (https://fonts.google.com/) implementation and the occasional use of ionicons (https://ionic.io/ionicons). Aside from the pseudo element, the faniciest CSS is the occasional use of animation and transition timing. 

# Approach
I stared by wireframing what I thought I wanted the basic site layout to look like, and built out a mostly grayscale mobile-first initial version at 380px. After a little research on breakpoints, I decided to just make new breakpoints wherever the style looked off or where the elements started to breakdown or clash in their current positions. 

I had a couple of happy accidents as I built out the wider responsive layouts, and ended up finding some more interesting layouts than I had originally planned, and decided to go with them. Once I had all screen sizes more or less covered with my reponsiveness, I went back, added basic styling, and replaced my placeholder text with actual content. Once content population was complete, I went back to focusing on more detailed styling for polish and presentation.

I knew I wanted to have my projects generated and populated onto the DOM via jQuery, and set them up to be read out of an array of objects and appended into a generic div id that could be used across the site, wherever I wanted to put it. I used a similar methodology for the carousel on the Bio page, but the implementation is... questionable. I had to play around with min-height on the carousel element and its children for longer than I wanted to in order to get the screen not to move when cyling through the carousel content. I figured out this behavior was caused by the emptying and repopulating of the content containing div, and recognize that this behavior would likely not be present if I simply used display:none on prepopulated content and cycled it in as needed, but I chose to stick with the jQuery to flex those skills instead.

# live site
https://focused-villani-67b49c.netlify.app/

# installation instructions
All projects referenced in the portfolio site are self-contained and run in an iframe in a modal in-browser. There is no additional installation needed for any of the projects available.

# unsolved problems
I would like to add an in-browser Terminal (like XTerm.js) to reference and run some of the Terminal based projects we've done, but XTerm ended up being a lot more complicated to implement than I anticipated, and I quickly realized that I would not have time to figure it out.

I've been trying to get Netlify to recognize and use my custom domain since we started, and I'm pretty sure I finally have it setup right through AWS, but I can't get GitHub Pages to let go of the DNS, even after deleting the branches that the hosted content was pulling from.

The dropdown nav for smaller screen sizes does not move smoothly. I think this is due to the UL repopulating more slowly than the nav element and the nav growing immediately to encompas the UL as it is rerendered, but I couldn't work out a good way to manage that, even with the avaialable easing properties. I had planned to rework the nav into a more interesting/fancy presentation, but did not have time to implement it.



