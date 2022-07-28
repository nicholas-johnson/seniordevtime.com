;;;
"title": "CRUD - AngularJS Exercise",
"description": "Angular JS training course in London or Brighton UK"
;;;
%article

# Simple API specification

The simple-api provides an API which allows you to list, view and manipulate Articles, Authors and Comments.

It is flushed each night at midnight.



# API Specification

The following methods are supported:

* create
* update
* show
* index
* destroy

## CORS

The site implements CORS (Cross Origin Resource Sharing) allowing you to access it via AJAX from any modern browser, even if the domain doesn't match. Essentially we can ignore the same origin policy.

## Endpoint

http://simple-api.herokuapp.com

%h2 Articles

%table
%tr
%th Verb
%th URI
%th Controller#Action

%tr
%td GET
%td /api/v1/articles/:id/destroy
%td articles#destroy
%tr
%td POST
%td /api/v1/articles/:id/update
%td articles#update
%tr
%td GET
%td /api/v1/articles
%td articles#index
%tr
%td POST
%td /api/v1/articles
%td articles#create
%tr
%td GET
%td /api/v1/articles/:id
%td articles#show



### Pull a list of all articles

GET <http://simple-api.herokuapp.com/api/v1/articles>

### Pull a single article by id

GET <http://simple-api.herokuapp.com/api/v1/articles/1>

### Create an article

POST <http://simple-api.herokuapp.com/api/v1/articles>

with params:

* title
* intro
* content
* author_id

### Update an article

POST <http://simple-api.herokuapp.com/api/v1/articles/1/update>

with params:

* title
* intro
* content
* author_id



%h2 Comments

%table
%tr
%th Verb
%th URI
%th Controller#Action
%tr
%td GET
%td /api/v1/articles/:article_id/comments
%td comments#index
%tr
%td GET
%td /api/v1/comments/:id/destroy
%td comments#destroy
%tr
%td POST
%td /api/v1/comments/:id/update
%td comments#update
%tr
%td GET
%td /api/v1/comments
%td comments#index
%tr
%td POST
%td /api/v1/comments
%td comments#create
%tr
%td GET
%td /api/v1/comments/:id
%td comments#show



### Pull a list of all comments

GET <http://simple-api.herokuapp.com/api/v1/comments>

### Pull a list of all comments for a specific article

GET <http://simple-api.herokuapp.com/api/v1/articles/1/comments>

### Pull a single comment by id

GET <http://simple-api.herokuapp.com/api/v1/comments/1>

### Create a comment

POST <http://simple-api.herokuapp.com/api/v1/comments>

with params:

* article_id
* content
* name
* email
* website

### Update a comment

POST <http://simple-api.herokuapp.com/api/v1/comments/1/update>

with params:

* article_id
* content
* name
* email
* website


%h2 Author

%table
%tr
%th Verb
%th URI
%th Controller#Action

%tr
%td GET
%td /api/v1/authors/:id/destroy
%td authors#destroy
%tr
%td POST
%td /api/v1/authors/:id/update
%td authors#update
%tr
%td GET
%td /api/v1/authors/:author_id/articles
%td articles#index
%tr
%td GET
%td /api/v1/authors
%td authors#index
%tr
%td POST
%td /api/v1/authors
%td authors#create
%tr
%td GET
%td /api/v1/authors/:id
%td authors#show
