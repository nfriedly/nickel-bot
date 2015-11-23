Daily healthy activity recorder
===============================

Installation
------------

Requires node.js >= 4.x, then from the directory with the code run `npm install`.

You'll need to set up a daily activity and edit the url in the script to go to that activity's page.

Heroku Usage
------------

This script can be run on a free [Heroku](http://www.heroku.com/) server with a little bit of setup. 
Complete instructions for how to use heroku is beyond the scope of this document, but they have 
[very good documentation](https://devcenter.heroku.com/). 

The following instructions require the [Heroku Toolbelt](https://toolbelt.heroku.com/).

First create an app:

    heroku apps:create [optional-app-name]
    
Set up the environment properties

    heroku config:set USERNAMe=<your wellness center for life usernamer>
    heroku config:set PASSWORD=<your  wellness center for life password>
    
Add the cronjob addon:

    heroku addons:create scheduler
  
Open the cronjob config page:

    heroku addons:open scheduler
  
Set the cronjob to run the command `npm start` once per day. (Or perhaps more often if you're doing auction stuff.)

Note: travis has a bug where they assume a web server even though we didn't declare 
    
If it doesn't seem to be working, run `heroku run bash` to open a shell on a new server instance. Then you can try running different commands and see what's going on.

Finally, push your code and then disable the default web worker that heroku creates:

    git push heroku
    heroku ps:scale web=0


MIT License
------------

Copyright (c) 2014 Nathan Friedly - http://nfriedly.com/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
