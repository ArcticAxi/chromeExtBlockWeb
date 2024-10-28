# Light-weight Chrome extension to redirect user-specified websites
Currently set to redirect to www.google.com when a user attempts to visit either youtube.com or netflix.com between 9am and 5pm. The same times are applied to every page. It is a simple extension that loads content.js when the URL matches those specified in manifest.json. Then, content.js parses the current and set times, and checks whether the current time falls in between the specified times. If it does, the URL is changed to the specified URL for redirecting. 

Edit: Last update in June 2020. This extension may or may not work anymore.

Icon made by Kiranshastry from www.flaticon.com.

## Setup 
1. Download the GitHub repository somewhere on your computer.
2. Go to 'chrome://extensions' in your browser, turn on 'Developer Mode' in the top right corner. 
3. Press 'Load unpacked' to load the downloaded extension. 

### Changing default variables
- The start and end times can be edited in content.js ("startTime" and "endTime"). 
- The page to which you want to be redirected to can be edited in content.js ("redirectUrl").
- To change the websites which are 'blocked', open manifest.json and change those in "content_scripts" -> "matches".




