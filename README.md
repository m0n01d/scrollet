scrollet
========

A scrollbar bookmarklet for mobile devices


A bookmarlet that activates a scrollbar for mobile devices. Instead of flicking or swiping up and down 

1. Add a bookmark for any site 
2. Select and copy the minified Javascript. scrollet.min.js. you need the "javascript:" at the beginning. 
3. Go to your bookmarks and tap “edit”. Then tap the new bookmark you just made. 
4. Edit the name (first box) call it whatever. "Scrollet" or something
5. Paste the Javascript in the field for the URL (.second box)
5. Done. Now go to a website and tap on the bookmark. Scroll.



I find it very useful on ‘mobile optimized’ sites, especially ones that lack inertial scrolling. But it will work the same on non-optimized sites.
I use it for long form blog posts, like you'll find on medium.com


Can also be used as a plugin 

var scrollr = new _scrollBar_(); //defaults to window

or if you have a <div id="container">content</div>

and the #container has all the content and an overflow

var scrollr = new _scrollBar_('#container');

and it will scroll the containing div


 
  ![alt tag](https://raw.githubusercontent.com/imdwit/scrollet/master/IMG_0528.PNG
  ![alt tag](https://raw.githubusercontent.com/imdwit/scrollet/master/IMG_0527.PNG)
