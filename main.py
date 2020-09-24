from flask import Flask, redirect, jsonify, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

app.config["DEBUG"] = True
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://shaikhmudassir:asma19131pawmysql@shaikhmudassir.mysql.pythonanywhere-services.com/shaikhmudassir$default'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/codebase'
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'kjslfjdslkjflsdkjfnvifudhhfgiyiu'

db = SQLAlchemy(app)

class Subject(db.Model):
  Id = db.Column(db.Integer,primary_key=True)
  title = db.Column(db.String(100),unique=False,nullable=False)
  description = db.Column(db.String(200),unique=False,nullable=False)

class Topic(db.Model):
  Id = db.Column(db.Integer,primary_key=True)
  topic = db.Column(db.String(100),unique=False,nullable=False)
  subject = db.Column(db.String(200),unique=False,nullable=False)

class Post(db.Model):
  Id = db.Column(db.Integer,primary_key=True)
  title = db.Column(db.String(100),unique=False,nullable=False)
  description = db.Column(db.String(500),unique=False,nullable=False)
  code = db.Column(db.String(800),unique=False,nullable=False)
  image = db.Column(db.Integer,unique=False,nullable=True)
  descOut = db.Column(db.String(100),unique=False,nullable=True)
  topicId = db.Column(db.Integer,unique=False,nullable=False)

@app.route('/')
def index():
    return "Hello"
    
@app.route('/@subject')
def subject():
    select = Subject.query.all()
    subjects = {}
    titleD =[]
    descriptionD = []
    for row in select:
        titleD.append(row.title)
        descriptionD.append(row.description)                                                                                                                                                                                                                                                                                                                                                         
    subjects['title'] = titleD
    subjects['description'] = descriptionD

    response = jsonify(subjects)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route('/@topic<string:subject>')
def topic(subject):
    select = Topic.query.filter_by(subject=subject).all()
    topics = {}
    IdD = []
    topicD = []
    subjectD = []
    for row in select:
        IdD.append(row.Id)
        topicD.append(row.topic)
        subjectD.append(row.subject)                                                                                                                                                                                                                                                                                                                                                         
    topics['Id'] = IdD
    topics['topic'] = topicD
    topics['subject'] = subjectD

    response = jsonify(topics)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response 

@app.route('/@post<int:Id>')
def post(Id):
    select = Post.query.filter_by(topicId=Id).all()
    posts = {}
    IdD = []
    titleD = []
    descriptionD = []
    codeD = []
    imageD = []
    descOutD = []
    topicIdD = []
    
    for row in select:
        IdD.append(row.Id)
        titleD.append(row.title)
        descriptionD.append(row.description)
        codeD.append(row.code)
        imageD.append(row.image)
        descOutD.append(row.descOut)
        topicIdD.append(row.topicId)

    posts['Id'] = IdD
    posts['title'] = titleD
    posts['description'] = descriptionD
    posts['code'] = codeD
    posts['image'] = imageD
    posts['descOut'] = descOutD
    posts['topicId'] = topicIdD
    
    response = jsonify(posts)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route('/codebaseadmin')
def admin():
    select = Subject.query.all()
    select1 = Topic.query.all()
    count = Post.query.filter_by().count()
    return render_template('admin.html',subjects=select,topics=select1,count=count)

@app.route('/@get-subject',methods=['GET','POST'])
def get_subject():
    if request.method == 'POST':
        subject = request.form.get('subject')
        description = request.form.get('description')

        entry = Subject(title=subject,description=description)
        db.session.add(entry)
        db.session.commit()
    return redirect('/codebaseadmin')


@app.route('/@get-topic',methods=['GET','POST'])
def get_topic():
    if request.method == 'POST':
        topic = request.form.get('topic')
        subject = request.form.get('subject')

        entry = Topic(topic=topic,subject=subject)
        db.session.add(entry)
        db.session.commit()
    return redirect('/codebaseadmin')

@app.route('/@get-post',methods=['GET','POST'])
def get_post():
    if request.method == 'POST':
        title = request.form.get('title')
        description = request.form.get('description')
        code = request.form.get('code')
        image = request.form.get('image')
        if image == None:
            image = '1'
        descOut = request.form.get('descOut')
        topicId = request.form.get('topicId')

        entry = Post(
            title=title,
            description=description,
            code=code,
            image=image,
            descOut=descOut,
            topicId=topicId
        )
        db.session.add(entry)
        db.session.commit()
    return redirect('/codebaseadmin')

@app.route('/@get-query',methods=['GET','POST'])
def get_query():
    if request.method == 'POST':
        query = request.form.get('query')
        db.engine.execute(query)
    return redirect('/codebaseadmin')

app.run()
'''
SQLALCHEMY_DATABASE_URI
app.run
var HOST = "http://127.0.0.1:5000/"; #PYW
url[7] = 4 
replace(".html","")
C:\Python37\Projects\codebaseF\jinja.js
'''