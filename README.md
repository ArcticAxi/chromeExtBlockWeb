# Chrome extension to block websites
### Blocks websites between certain time periods

Visiting either youtube.com or netflix.com between 9am and 5pm redirects a user to www.google.com.

### Install: 
Download the GitHub repository to somewhere on your computer.
Go to 'chrome://extensions' in your browser, turn on 'Developer Mode' in the top right corner. 
Press 'Load unpacked' to load the extension. 

### Changing default variables:
The start and end time can be edited in "content.js". 
Similarly, the page which you get redirected to can also be changed in "content.js".
To change the websites which are 'blocked', open "manifest.json" and change those in 'content_scripts' -> 'matches'.

If I have time I will add a GUI to change these variables.
