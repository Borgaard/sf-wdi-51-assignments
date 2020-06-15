from app import db, marshmallow

class Todo(db.Model):
    __table_args__ = {'extend_existing': True} 

    id = db.Column(db.Integer, primary_key=True)
    todobody = db.Column(db.String(200))
    priority = db.Column(db.Integer)
    completed = db.Column(db.Boolean, default=False, nullable=False)

    def __init__(self, todobody,priority,completed):
        self.todobody = todobody
        self.priority = priority
        self.completed = completed

    @classmethod
    # diaodjoias
    def create_todo(cls,todobody,priority, completed):
        new_todo = Todo(todobody,priority, completed)
        try:
            db.session.add(new_todo)
            db.session.commit()
        except:
            db.session.rollback()
            raise Exception('Session rollback')
        return todo_schema.jsonify(new_todo)

    @classmethod
    def get_todos(cls):
        todos = Todo.query.all()
        return todos_schema.jsonify(todos)
    
    @classmethod
    def delete_todo(cls,todoid):
        todo = Todo.query.get(todoid)
        db.session.delete(todo)
        db.session.commit()
        return ("Gone")

    
    @classmethod
    def edit_todo(cls,todoid, todobody):
        todo = Todo.query.get(todoid)
        todo['text body'] = todobody
        return jsonify(todobody)

        
        

        
class TodoSchema(marshmallow.Schema):
  class Meta:
    fields = ('id', 'todobody', 'priority', 'completed')

todo_schema = TodoSchema(strict=True)
todos_schema = TodoSchema(many=True, strict=True)




if __name__ == 'models':
    db.create_all()