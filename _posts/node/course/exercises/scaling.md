%article


# Scaling Node


## Accessing the OS

We can get information about our machine, including the number of cores using the os module.

var os = require('os');
os.cpus();


## Cluster Module

We can use the cluster module to spark up a new server on each CPU. The CPUs will not share state, but will share a port. A simple round robin router will direct traffic between the cores

read more about the cluster module here:

[https://nodejs.org/api/cluster.html](nodejs.org/api/cluster.html)

```js
  var cluster = require("cluster"),
    http = require("http"),
    os = require("os"),
    cpus = os.cpus().length;

  console.log(cluster)

  if (cluster.isMaster) {
    for (var i = 0; i < cpus; i++) {
      cluster.fork();
    }
    cluster.on("exit", function(worker, code, signal) {
      cluster.fork();
    });
    console.log('listening on port 3001')
  } else {
    http.createServer(function(req, res) {
      res.writeHead(200);
      res.write("Hello Cluster!!");
      res.end
    }).listen(3001);

    console.log('Making child process')
  }

```





## Exercise - Scaling

Find the number of cores on your machine.

Scale your app across all of your cores.



## Downloads

[Code samples (Dropbox)](https://www.dropbox.com/sh/6ow6vu0dii5lv9z/AABw94Ymcvb1d6VvnfOABGsga?dl=0)
