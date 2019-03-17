from app import db, marshmallow
from flask import jsonify

class Todo(db.Model):
	# table arguments
	__table_args__ = {'extend_existing': True} 

	id = db.Column(db.Integer, primary_key=True)
	timestamp = db.Column(db.DateTime())
	body = db.Column(db.String(100))
	priority = db.Column(db.Integer)
	completed = db.Column(db.Boolean)


	def __init__(self, body, priority, completed):
		self.body = body
		self.priority = priority
		self.completed = completed
	

	@classmethod
	# initialise constructor and 
	def create_todo(cls, body, priority, completed):
		new_todo = Todo(body, priority, completed)
		try:
				db.session.add(new_todo)
				db.session.commit()
		except:
				db.session.rollback()
				raise Exception('Session rollback')

		return todo_schema.jsonify(new_todo)

	@classmethod
	def get_todo(cls, todo_id):
			todo = Todo.query.get(todo_id)
			return todo_schema.jsonify(todo)

	@classmethod
	def get_todos(cls):
		todos = Todo.query.all()
		return todos_schema.jsonify(todos)

	@classmethod
	def edit_todo(cls, todoid, body, priority, completed):
		edit_todo = Todo.query.get(todoid)
		edit_todo.body = body
		edit_todo.priority = priority
		edit_todo.completed = completed
		db.session.commit()
		return todo_schema.jsonify(edit_todo)

	@classmethod
	def delete_todo(cls, todo_id, body, priority, completed):
		delete_todo = Todo.query.get(todo_id)
		db.session.delete(delete_todo)
		db.session.commit()
		# try:
		# 		db.session.add(new_todo)
		# 		db.session.commit()
		# except:
		# 		db.session.rollback()
		# 		raise Exception('Session rollback')
		return todo_schema.jsonify(delete_todo)


class TodoSchema(marshmallow.Schema):

	class Meta:
		fields = ('id', 'body', 'priority', 'completed')

todo_schema = TodoSchema(strict=True)
todos_schema = TodoSchema(many=True, strict=True)


if __name__ == 'models':
	db.create_all()