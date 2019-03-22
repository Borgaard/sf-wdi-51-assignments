from app import db, marshmallow
from flask import jsonify

class Sub(db.Model):
    __table_args__ = {'extend_existing': True} 

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(300))

    def __init__(self, name, description):
        self.name = name
        self.description = description

    @classmethod
    def create_sub(cls, name, description):
        new_sub = Sub(name, description)
        try:
            db.session.add(new_sub)
            db.session.commit()
        except:
            db.session.rollback()
            raise Exception('Session rollback')
        return sub_schema.jsonify(new_sub)
    

    @classmethod 
    def get_sub(cls,subid):
        sub = Sub.query.get(subid)
        return sub_schema.jsonify(sub)

    
    @classmethod
    def get_subs(cls):
        subs = Sub.query.all()
        return subs_schema.jsonify(subs)

class SubSchema(marshmallow.Schema):
  class Meta:
    fields = ('id', 'name', 'description')

sub_schema = SubSchema(strict=True)
subs_schema = SubSchema(many=True, strict=True)  
        


class Post(db.Model):
    __table_args__ = {'extend_existing': True} 

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(100))
    title = db.Column(db.String(200))
    text = db.Column(db.String(500))
    sub = db.Column(db.Integer, db.ForeignKey("sub.id"))

    def __init__(self, user, title, text, sub):
        self.user = user
        self.title = title
        self.text = text
        self.sub = sub

    @classmethod
    def create_post(cls, user, title, text, sub):
        new_post = Post(user, title, text, sub)
        try:
            db.session.add(new_post)
            db.session.commit()
        except:
            db.session.rollback()
            raise

        return post_schema.jsonify(new_post)

    @classmethod
    def get_post(cls,post_id):
        post = Post.query.get(post_id)
        return post_schema.jsonify(post)

    
class PostSchema(marshmallow.Schema):
  class Meta:
    fields = (  'id', 'user', 'title', 'text', 'sub')


  

post_schema = PostSchema(strict=True)
posts_schema = PostSchema(many=True, strict=True)




class Comment(db.Model):
    __table_args__ = {'extend_existing': True} 

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(100))
    text = db.Column(db.String(500))
    post = db.Column(db.Integer, db.ForeignKey("post.id"))

    def __init__(self, user, text, post):
        self.user = user
        self.text = text
        self.post = post

    @classmethod
    def create_comment(cls, user, text, post):
        new_comment = Comment(user, text, post)
        try:
            db.session.add(new_comment)
            db.session.commit()
        except:
            db.session.rollback()
            raise

        return comment_schema.jsonify(new_comment)




    @classmethod
    def update_comment(cls, comment_id, title=None, description=None):
        comment = Comment.query.get(comment_id)
        if title != None:
            comment.title = title 
        if description != None:
            comment.description = description 
        db.session.commit()
        return comment_schema.jsonify(comment)

    @classmethod
    def delete_comment(cls, comment_id):
        comment = Comment.query.get(comment_id)
        db.session.delete(comment)
        db.session.commit()
        return comment_schema.jsonify(comment)


    @classmethod
    def get_post(cls,comment_id):
        comment = Comment.query.get(comment_id)
        return comment_schema.jsonify(comment)

        

    
class CommentSchema(marshmallow.Schema):
  class Meta:
    fields = (  'id', 'user', 'text', 'post')


  

comment_schema = CommentSchema(strict=True)
comments_schema = CommentSchema(many=True, strict=True)

if __name__ == 'models':
    db.create_all()