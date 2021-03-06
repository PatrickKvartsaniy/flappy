import os

from flask import Flask, render_template, url_for

app = Flask(__name__,static_url_path='/static')

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"Serve on port: {port}")
    app.run(host="0.0.0.0",port=port)