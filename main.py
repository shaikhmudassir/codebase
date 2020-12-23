from flask import Flask, render_template, request, session, redirect
import sys
import os
import json

base_dir = '.'
if hasattr(sys, '_MEIPASS'):
    base_dir = os.path.join(sys._MEIPASS)

app = Flask(__name__,
        static_folder=os.path.join(base_dir, 'static'),
        template_folder=os.path.join(base_dir, 'templates'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/subject', methods = ['get', 'post'])
def subject():
    # Load JSON file
    with open(f'{app.root_path}\database\\subject.json',) as f:
        select = json.load(f)
        length = len(select['title'])

    if request.method == 'POST':
        title = request.form.get('title')
        description = request.form.get('description')
        index = request.form.get('index')
        if index not in ['', None]:
            index = int(request.form.get('index'))
        function = request.form.get('function')

        edit = {}
        if function == 'edit':
            edit['title'] = title
            edit['index'] = index
            edit['description'] = description 
            update_subject(select)
            return render_template('subject-view.html', rows=select, length=length, edit=edit)
        elif function == 'edited':
            select['title'][index] = title
            select['description'][index] = description
            update_subject(select)
        else:
            select['title'].append(title)
            select['description'].append(description)
            update_subject(select)

        jsonObject = json.dumps(select, indent = 2) 
        with open(f'{app.root_path}\database\\subject.json', 'w') as outfile: 
            outfile.write(jsonObject)
        return redirect('/subject')

    return render_template('subject-view.html', rows=select, length=length, edit=None)

@app.route('/topic', methods = ['get', 'post'])
def topic():
    with open(f'{app.root_path}\database\\topic.json',) as f:
        select = json.load(f)
        length = len(select['Id'])

    with open(f'{app.root_path}\database\\subject.json',) as f:
        select2 = json.load(f)
        subjects = select2['title']
        
    if request.method == 'POST':
        Id = request.form.get('Id')
        if Id not in ['', None]:
            Id = int(request.form.get('Id'))
        topic = request.form.get('topic')
        subject = request.form.get('subject')
        index = request.form.get('index')
        if index not in ['', None]:
            index = int(request.form.get('index'))
        function = request.form.get('function')

        edit = {}
        if function == 'edit':
            edit['Id'] = Id
            edit['index'] = index
            edit['topic'] = topic 
            edit['subject'] = subject 
            update_topic(select)
            return render_template('topic-view.html', rows=select, length=length, subjects=subjects, edit=edit)
        elif function == 'edited':
            select['Id'][index] = Id
            select['topic'][index] = topic
            select['subject'][index] = subject
            update_topic(select)
        else:
            select['Id'].append(Id)
            select['topic'].append(topic)
            select['subject'].append(subject)
            update_topic(select)

        jsonObject = json.dumps(select, indent = 2) 
        with open(f'{app.root_path}\database\\topic.json', 'w') as outfile: 
            outfile.write(jsonObject)
        return redirect('/topic')
            
    return render_template('topic-view.html', rows=select, length=length, subjects=subjects, edit=None)


@app.route('/post', methods = ['get', 'post'])
def post():
    with open(f'{app.root_path}\database\\post.json',) as f:
        select = json.load(f)

    with open(f'{app.root_path}\database\\topic.json',) as f:
        select2 = json.load(f)
        topicIds = select2['Id']
        last_topic = str(len(topicIds))
        last_post = select[last_topic]["Id"].pop()

    if request.method == 'POST':
        function = request.form.get('function')
        index = request.form.get('index')
        if index not in ['', None]:
            index = int(request.form.get('index'))
        Id = request.form.get('Id')
        code = request.form.get('code')
        descOut = request.form.get('descOut')
        description = request.form.get('description')
        image = request.form.get('image')
        title = request.form.get('title')
        topicId = request.form.get('topicId')

        if topicId not in ['', None]:
            length = len(select[topicId]['Id'])

        if function == None:
            return render_template('post-view.html', rows=select[topicId], length=length, edit=None, topicIds=topicIds, last_post=last_post)

        edit = {}
        if function == 'edit':
            edit['Id'] = int(Id)
            edit['code'] = code
            edit['descOut'] = descOut 
            edit['description'] = description 
            edit['image'] = int(image) 
            edit['title'] = title 
            edit['topicId'] = int(topicId) 
            edit['index'] = index
            update_post(select)
            return render_template('post-view.html', rows=select[topicId], length=length, edit=edit, topicIds=topicIds, last_post=last_post)
        elif function == 'edited':
            select[topicId]['Id'][index] = int(Id)
            select[topicId]['code'][index] = code
            select[topicId]['descOut'][index] = descOut 
            select[topicId]['description'][index] = description 
            select[topicId]['image'][index] = int(image) 
            select[topicId]['title'][index] = title 
            select[topicId]['topicId'][index] = int(topicId) 
            update_post(select)
        elif function == 'add':
            select[topicId]['Id'].append(int(Id))
            select[topicId]['code'].append(code)
            select[topicId]['descOut'].append(descOut) 
            select[topicId]['description'].append(description) 
            select[topicId]['image'].append(int(image)) 
            select[topicId]['title'].append(title) 
            select[topicId]['topicId'].append(int(topicId))
            update_post(select)

    return render_template('post-view.html', rows=None, length=None, edit=None, topicIds=topicIds, last_post=last_post)

def update_subject(select):
    jsonObject = json.dumps(select, indent = 2) 
    with open(f'{app.root_path}\database\\subject.json', 'w') as outfile: 
        outfile.write(jsonObject)
def update_topic(select):
    jsonObject = json.dumps(select, indent = 2) 
    with open(f'{app.root_path}\database\\topic.json', 'w') as outfile: 
        outfile.write(jsonObject)
def update_post(select):
    jsonObject = json.dumps(select, indent = 2) 
    with open(f'{app.root_path}\database\\post.json', 'w') as outfile: 
        outfile.write(jsonObject)
        

if __name__ == '__main__':
   app.run(debug=True)
    