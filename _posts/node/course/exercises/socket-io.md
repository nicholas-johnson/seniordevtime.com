%article


# Socket.io

Socket.io has been described as the jewel in the crown of the NPM toolbox. It allows you to create an object that is apparently shared by the server and all connected clients. An event fired on a client can be recieved on the server, and vice versa.

Events can contain payloads allowing us to pass messages among clients easily. We can build realtime chat applications, multiplayer games, virtual remote controls, anything requiring realtime communication with a server.

Because Node is event driven rather than multi-threaded, adding a client involves very little overhead. You can connect as many sockets as you like (within reason).




## Exercise - create an Express app

Use the Yeoman generator to create a quick express app.




## Exercise - Installation

Installation is with NPM. Use --save to add the dependencies to your package.js file.

```js
  npm install socket.io --save
```







## Exercise - setup

We need to create an io object. Do it like this:

```js
  var http = require('http').Server(app);
  var io = require('socket.io')(http);
```






## Exercise Create a socket on connection

We can now create a socket when a browser connects. We can have as many open sockets as we like. Sockets can listen to and emit events.

```js
  io.on('connection', function(socket){
    socket.on('chat', function(msg){
      io.emit('chat', msg);
    });
  });
```





## Exercise - Create the socket clientside

In your index.html file, include the following script tag:

```js
  <script src="/socket.io/socket.io.js"></script>
```





Sockets.io has created this route for you. You don't need to expose this file yoursellf.

Create a socket like this:

```js
  var socket = io();
```





You can emit an event like this:

```js
  socket.emit('chat', "hello, 123");
```





You can listen for an event like this:

```js
  socket.on('chat', function(msg){
    // Do something here
  });
```




Given our ability to emit events clientside and hear them serverside, and vice versa, create a simple instant chat client.




## Further exercise

We can hit an API from within Node using something like the folowing:

```js
  var api = http.createClient(80, 'simple-api.herokuapp.com');
  var request = api.request('POST', '/api/v1/comments', { /* comment object goes here */ });
```




Integrate socket.io into your comments list in your simple-api website. Make it so that when a comment is made, everyone is notified, and the comment is persisted in the api.




## Downloads

[Code Samples](https://www.dropbox.com/sh/r79orn1n8aobmw8/AAAF0awSjQexFERWMIyseRV_a?dl=0)
