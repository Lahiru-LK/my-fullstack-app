from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask backend! Deployment successful! now font end can be connected to this backend."})
 
if __name__ == '__main__':
    app.run(debug=True)
