# Daily-Todo-React

The aim of this project is to create a web application in which daily tasks can be entered, edited, removed and checked off once completed.

By creating this application, I will be practicing and learning more about React and testing the front end experience using Jest. I've intentionally not followed any tutorials as I am learning React with the official documentation, alongside the MDN and Jest documentation as I believe this is the best way to build a thorough understanding. 

![dailytodoF](https://user-images.githubusercontent.com/75075773/125773220-79d88b63-061c-4d26-bd78-f953ad49c13e.gif)



### Learning objectives and skills exercised:

* Using Jest to create unit tests per components.
* Using Jest to create feature tests when testing the App component. 
* Setting state using hooks and lifting state up. (Setting a Todo item and passing it to the list.)
* Using LocalStorage to enable Todo items to persist across sessions.
* Passing props to child components.
* Using uuid to create unique keys per Todo item. 
* Using the spread operator to populate an array.
* Creating a pleasing front end experience for clarity of the day ahead. 


# UI Plan

![Daily-Todo-React (2)](https://user-images.githubusercontent.com/75075773/124942566-aa342580-e003-11eb-8993-4dd969e7f24d.png)

# User Stories

```
As a Maker,
I would like to create a list of my daily todo tasks.

As a Maker,
I would like to able to edit a todo item if it changes for any reason.

As a Maker,
So that I can track what I've completed, I'd like to be able to check off my todo items.

As a Maker,
I would like to delete a todo item if I no longer need to complete that task.

As a Maker, 
So that I can quickly delete my list of todos, I would like to be able to clear the list. 

As a Maker,
So that I can return to my todo list later, I would like my list to persist across sessions.

```


# Installation

Clone this repo to your local machine:
```
$ git clone https://github.com/charlierdm/Daily-Todo-React.git
```
In the folder you've cloned Chitter into, run the following:
```
$ npm install
```
Run the following to start the server and navigate to http://localhost:3000/ in your browser:
```
$ npm start
```
To run the tests, enter the following:
```
$ npm test
```

