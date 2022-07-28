%article


# NPM (Node Package Manager)

NPM is a tool that allows us to manage node modules. We can install many thousands of modules from [www.npmjs.com/](https://www.npmjs.com/).

We can install modules in two ways, globally or locally Global modules are available to any project. Local modules are onle available in your current project, allowing you to have different version of modules for different projects.

Local modules are the default, and are what we need most of the time.

## Global install

We can install node modules globally using npm install -g

For example, we might want to install yeoman globally to allow us to run generators in any folder. We could do this with:

```js
  npm install -g yo
```





On my mac this saves the yeoman module in:

```js
  /usr/local/lib/node_modules
```

=code(code, :bash)



## Local install

The default behaviour is to install node modules locally. Say you want to use the express module. You would type:

```js
  npm install express
```





Npm will create a directory called node_modules in your current directory and save the module in here. Node will look inside this directory first when requiring a module.

## package.json

NPM will optionally read from and write to a file called package.json. This file stores a list of all your dependencies. You can recreate your entire node_modules directory on a new computer or server using just by typing:

```js
  npm install
```





We check our package.json into version control, then a new team member can install all the correct dependencies with a single command. When we deploy our app to production, our deployment script can run npm install to get all the dependencies it needs.

## Saving dependencies ---save

We can save modules to our package.json file. When we install a module use the --save flag, like so:

```js
  npm install express --save
```





This will add the express dependency to the package.json file

## Development dependencies ---save-dev

We can also save development dependencies. Say we want to use gulp to automate our build process. We don't want gulp on our live server, just our development box. We can run:

```js
  npm install gulp --save-dev
```





Gulp will be added as a development dependency.

## Installing production dependencies ---production

We can install only production dependencies with the --production flag like so:

```js
  npm install --production
```








## Install a dependency

We're going to be writing some Jade templates in the next section, so go on ahead and install Jade as a dependency.

Have a look inside the pacakage.json file which has been created for you. Notice the dependency and specific version number. Notice also some metadata about your project which has been automatically seeded for you.

Have a look in the node_modules directory. See Jade there?




## Install a development dependency

We're going to be using Gulp in a bit to help us with our code. Install gulp using the --save-dev flag.

Have another look inside the package.json file. See the dependency there listed as a development dependency. This lets us keep development helpers off of the live site.
