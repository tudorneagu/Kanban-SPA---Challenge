# MCD

## Etape 1 : les entités

- User
- List
- Task
- Tag
- Color

## Etape 2 : attributs des entités

- User :

  - email,
  - first_name
  - last_name
  - password

- Board :

  - name
  - color(FK)
  - tasks(FK)

- Task:

  - title
  - description
  - subtasks(FK)

- SubTask

  - title
  - isCompleted

- Color:
  -name
  -value
