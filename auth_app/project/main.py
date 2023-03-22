from flask import Blueprint, render_template, request, flash
from flask_login import login_required, current_user
from . import db
import sqlite3


main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/profile')
@login_required
def profile(): # sqlite studio
    try:   
        connection = sqlite3.connect('mydatabase.db')
        cur = connection.cursor()
        cur.execute("INSERT INTO node01 (temp, hum) VALUES (?, ?)",
                    (request.args.get('temperature1'), request.args.get('humidity1'))
                    )


        connection.commit()
        connection.close()
        flash('Data was successfully inserted!')
    except Exception as exc:
        print ("Can't upload because %s" % exc)
    return render_template('profile.html', name=current_user.name)