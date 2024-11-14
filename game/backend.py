from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Store the score
score = {"player1": 0, "player2": 0}

@app.route('/get_score', methods=['GET'])
def get_score():
    return jsonify(score)

@app.route('/update_score', methods=['POST'])
def update_score():
    global score
    data = request.json
    score['player1'] = data.get('player1', score['player1'])
    score['player2'] = data.get('player2', score['player2'])
    return jsonify(score)

if __name__ == '__main__':
    app.run(debug=True)
