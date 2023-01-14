from flask import Blueprint, render_template

home1 = Blueprint(__name__, "home")

@home1.route("/")
def home():
    return render_template("index.html")



