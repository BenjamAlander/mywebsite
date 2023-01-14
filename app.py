from flask import Flask
from home import home1

app = Flask(__name__, template_folder='template')
app.register_blueprint(home1, url_prefix="/")


if __name__ == '__main__':
    app.run(debug=True, port=80)