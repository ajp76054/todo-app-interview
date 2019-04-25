Before getting started make sure you are logged into stackblitz.  If you do not already have a GitHub account please create one for the purpose of this project. Signup is free and its a great tool to have as a developer.  After signing in with your GitHub account click on the `Fork` link at the top of the screen.  This will create a copy of the project for you under your account this way you can make and save changes.  Once you are done with your work click share and copy the first link for the editor url and send this to us.

Once you are done reading this page change your url from `/directions` to `/todos`

<a href="/todo">TODOs</a>

### Installed Libraries

For ease of use we have installed Bootstrap, and Angular Materials.

### Routes

API URL is located in the `variables.ts` file and is already imported into the `todos.service.ts` file for you to consume.  The API accepts any of the following request types in the list.

#### API URL - https://jsonplaceholder.typicode.com

 - GET	/todos
 - GET	/todos/1
 - POST	/todos
 - PUT	/todos/1
 - PATCH	/todos/1
 - DELETE	/todos/1

### Directions

### Service:

A TodoService does already exist under the services folder for you to use however you may feel free to create your own.

- Use the  TodoService to GET list of TODOs
- Use the  TodoService to GET a single TODO (Optional but feel free to show us your wow factor)
- Use the  TodoService to POST a new TODO.
- Use the  TodoService to PUT a change to a TODO.
- Use the  TodoService to PATCH a TODO.
- Use the  TodoService to DELETE a TODO.

- Using observable patterns 

### Components:

Create a component to display a list of all the todos

- It should display all todos
- It should allow you to add
- It should allow you to remove todos
- It should allow you to change status of a todo
- It should allow you to change the name of a todo (Optional but again show us what you got)

### Create an interface for the todos

- id
- name
- status
- createdAt
- updatedAt

 ## Help Links

 #### Bootstrap - https://getbootstrap.com/docs/4.3/getting-started/introduction/

 #### Angular Materials - https://material.angular.io/components/categories

#### Font Awesome - https://fontawesome.com/icons?from=io

#### Angular - https://angular.io/docs


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-n2y1zg)