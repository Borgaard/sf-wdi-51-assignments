from app import db, marshmallow
from flask import jsonify

class Todo(db.Model):
  __table_args__ = {'extend_existing': True}

  id = db.Column(db.Integer, primary_key=True)
  body = db.Column(db.String(200))
  priority = db.Column(db.Integer)
  completed = db.Column(db.Boolean, default=False)

  def __init__(self, body, priority, completed):
    self.body = body
    self.priority = priority
    self.completed = completed

  # Create a todo method
  @classmethod
  def create_todo(cls, body, priority, completed):
    # Create an instance of the Todo class and save to 'new_todo' variable
    new_todo = Todo(body, priority, completed)
    try:
      db.session.add(new_todo)
      db.session.commit()
    except:
      db.session.rollback()
      raise
    return todo_schema.jsonify(new_todo)

  # Get a todo method
  @classmethod
  def get_todo(cls, todo_id):
    found_todo = Todo.query.get(todo_id)
    return todo_schema.jsonify(found_todo)

  # Get all todos method
  @classmethod
  def get_all_todos(cls):
    all_todos = Todo.query.all()
    return todos_schema.jsonify(all_todos)

  @classmethod
  def delete_todo(cls, todo_id):
    deleted_todo = Todo.query.get(todo_id)
    try:
      db.session.delete(deleted_todo)
      db.session.commit()
    except:
      db.session.rollback()
      raise
    return todo_schema.jsonify(deleted_todo)

  @classmethod
  def update_todo(cls, todo_id, updated_todo_body=None):
    todo_to_update = Todo.query.get(todo_id)
    # [] THIS DOESN'T PRINT
    print(updated_todo_body)
    # if there's a new value to the updated_todo_body, updated the todo.body with it
    if updated_todo_body != None:
      todo_to_update.body = updated_todo_body
    db.session.commit()
    return todo_schema.jsonify(updated_todo)



class TodoSchema(marshmallow.Schema):
  class Meta:
    fields = ('id', 'body', 'priority', 'completed')

todo_schema = TodoSchema(strict=True)
todos_schema = TodoSchema(many=True, strict=True)

if __name__ == 'models':
  db.create_all()