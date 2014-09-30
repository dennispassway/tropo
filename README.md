# Tropo

Tropo was a graduation project that explored the possibilities of gestures and user experience design. It is an in-browser 3D world build with ThreeJS. Originally it was build as a CommonJS application. This new version of Tropo is build modular with RequireJS so that the application can easily be changed or improved.

Check out the awesome casevideo of the original Tropo application!

http://www.youtube.com/watch?v=ZSKOVhtH2zc

## Oculus Rift

The current version of Tropo is optimized for the Oculus Rift DK2. The 3D world can be run with, or without the Oculus effect in case you do not own an Oculus Rift. When using the Oculus Rift, make sure you start the oculus-rest server before opening the application. The oculus-rest server file can be found in the root of the repository.

The original pre-build files as used for this server can be found at https://github.com/msfeldstein/oculus-rest.

## Requirements

Tropo uses npm and node for installing the dependencies used in development.

> Check out npmjs.org for more info on npm.

One of the dependencies installed by npm is grunt. Grunt runs tasks like starting the webserver and checking your javascript.

> Check out gruntjs.com for more info on Grunt.

To use the Oculus Rift for controlling the movements in the 3D world you have to start the 'oculus-rest' server in the root of the repository before opening the application.

## Setup
After cloning the repository use `npm install` to install the developer dependencies. One of these is bower, which automagicly installs the dependencies needed in the application. It also starts the server. The application can be found by going to http://localhost:8000 in the browser.

Don't forget to start the oculus-rest server when you use the Oculus Rift!

## Switching between the Oculus and the normal application
In app/javascripts/main.js there is a variable `app.useOculus = false. Setting this to false disables the oculus mode and vice versa!
