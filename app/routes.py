from flask import render_template, request, jsonify

from app import app
from chatbot_utils.chat import get_response

@app.route("/")
def index():
    return render_template("index.html")

# ChatBot routes
@app.route("/chatbot")
def index_get():
    return render_template("chatbot.html")

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    
    response = get_response(text)
    message = {"answer": response}
    
    return jsonify(message)
