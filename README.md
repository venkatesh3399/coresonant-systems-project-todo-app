# Todo Application with API Integration

Build a Todo application using React js that allows users to add, edit, and delete tasks. The
application should have the following functionalities:

● Displayed a list of existing tasks, showing the task name and its status (completed or not).
Initialize this list with the todos fetched from an API.
● Used the following API endpoint to retrieve the todos:
https://jsonplaceholder.typicode.com/users/1/todos.

# Each todo object from the API response will have the following properties:
● id (number): The unique identifier for the todo.
● title (string): The title of the todo.
● completed (boolean): Indicates whether the todo has been completed or not.
● Used this initial data to populate the list of tasks in your application.
● Provided an input field to add new tasks. When a task is added, it should appear in the list.

# Perform the following validations before adding a task:
● The task name should not be empty.
● Allowing users to mark a task as completed by clicking on it. Completed tasks should be
visually distinguishable (ex: By any different color).
● Allowing users to edit the task name by clicking on an edit button/icon next to each task. When
a task is edited, update the task name in the list.
● Provided a delete button/icon to allow users to remove a task from the list.
● Implemented a filter or tab functionality to toggle between displaying all tasks and completed
tasks.
