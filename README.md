# cs3200 Final Project
Project for cs3200 Database Design. Movie finder app that retrieves data from OMDb and stores it in a local database. 
Front end is AngularJS, backend is Node.js connected to a MongoDB instance using Mongoose.

# Getting started 
To run this app locally, you will need to have Node and Mongo installed on your machine. After pulling down the directory, 
move into the directory and run the following command to install the necessary dependencies
```
npm install
```
In a separate terminal instance ensure that mongo is running locally using the following command
```
mongod
```
Finally, run the following to start the app
```
node server.js
```
In the terminal you should see a prompt that the server is listening on port 8082. 
Go to localhost:8082 in your browser to use the app

# File Layout
The root contains all of the dependencies, as well as config files that keeps track of how to run the app. 
**server.js** is also at the root, since this starts the express app that controls both the front and backend.
Inside the src directory are the client and server directory. 
Client contains all of the frontend files, while server contains all the backend files. 

# CRUD operations
Currently the api supports Create, Read, Update and Delete. A user sends a read when they search for any title of a movie. 
A create occurs when a requested movie is not present in the database, and the data is retrieved from OMDb, and then added to the database.
An update can be triggered by a user when a currently selected movie has one or more fields updated and the Update button is pressed.
Similarily, a delete is triggered when the user presses the Delete button. This wipes the data from our database, meaning that the next person to search for that movie will require the api to go to OMDb for the data.

# Changes from the proposal
Two changes were made between the proposal and the final product. First was the choice to use MongoDB as the database, and the second was to change the schema to only include movies.
The main reason for both of these changes was because the OMBd api that we wanted to use only supported a limited amount of data.
Furthermore, since their data was stored in JSON format, it made the most sense to change our database to reduce the amount of effort it would require to store their data in our database.
