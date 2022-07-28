;;;
"title": "Postgres - For Rails",
"description": "Postgres is a key part of the standard Rails stack. Let's all get really good at it",
"canonical": "http://nicholasjohnson.com/postgres-for-rails-book/"
;;;


%article.book_cover


# Postgres

## For Rails

**By Nicholas Johnson**

= partial :"version"


%article.book

#intro


# What is this, who are you?

Since MySQL was bought by Oracle, PostGres has become the de-facto SQL database for Rails. This little book is your guide to PostGres with Rails.

## Who are you?

You are a Rails developer, possibly a very good one, who is using postgres to les than it's full potential. Let's get good at PostGres.

#installation


# Installation

## Via the Postgres.app

First up you need to install postgres. The easiest way to do this is with the postgres app. This is a stand-alone app which contains everything you need to run Postgres. Upgrade it and Postgres is upgraded. Uninstall it and Postgres is gone.

Get it from here:

<http://postgresapp.com>

You'll probably also want to include the command line tools:

<http://postgresapp.com/documentation/cli-tools.html>

## Via homebrew

If you wish, you can also install postgres from homebrew.

brew update
brew install postgresql

Follow the instructions to start the server on login.

# PG gem

Next you'll need the pg gem to let Ruby talk to Postgres.

## pg_config

The pg gem needs to know the location of a file called pg_config. If you've used brew, this file will be at the default location. You can install the gem using:

gem install pg

## Installing the pg gem with Postgres.app

If you've used the Postgres.app, and I suggest you do, the pg_config will be inside the Postgres.app directory.

Your installation will likely look like this:

gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/9.3/bin/pg_config

The location of pg_config may change. You may need to hunt for it a little. You might refer to this stack overflow post.

<http://stackoverflow.com/a/20226895/687677>

#psql


# psql

We use psql to connect to your server. Assuming you've got everything set up corectly, you should be able to go to a terminal and type:

psql

If you'd rather use a GUI, that's fine, Use the GUI to create your database and skip to the next part.

## Quitting psql

Type \q to quit

%aside.box

## Downloading from Heroku

To pull a live database from Heroku, export it using pgbackups, then import using pg_restore

```js
    heroku pgbackups:capture --expire
    curl -o latest.dump `heroku pgbackups:url`

    pg_restore --verbose --clean --no-acl --no-owner -h localhost -U myuser -d mydb latest.dump
```




<https://devcenter.heroku.com/articles/heroku-postgres-import-export#export>

#creating


# Creating a Database

In psql, Create a database like so:

CREATE DATABASE my_app_development;

<http://www.postgresql.org/docs/9.1/static/manage-ag-createdb.html>

%aside.box

## A note on capitalisation

Postgres forces case insensitivity by converting all instructions to lower case before submitting them. The one exception to this rule is strings.

These statements are all equivalent:

CREATE DATABASE cats
create database dogs
CrEaTe DaTaBaSe marmosets

We typically use the first style as it visually differentiates commands from table and row names.

## Capitalised table names

This will throw an error:

CREATE DATABASE mycats
CREATE DATABASE MyCats
ERROR:  database "mycats" already exists

## Table names in Rails

Rails uses underscores in it's table and field names for precisely this reason.

#connecting



# Connecting to a database

\c test

TODO: Say more about why this is like this


#selecting


# Simple Selecting

We can select













%aside.box

## A note on Strings.

Strings in Postgres are 'single quoted'. Double quotes are used to denote a field name. If you use "double quotes" on a string, you will get an error like this:

column "a" does not exist


%aside.box

## Listing all databases, listing all tables

List all databases with:

```js
    \list
```





List all tables in the current database with:

```js
    \dt
```







# Quick tip - rendering emails safe

```js
  update people set email = (replace(email, '@', '.') || '@example.com')
```





