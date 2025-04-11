from firestore import db
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/set-manga", methods=["POST"])
def save_manga():
    dados = request.get_json()

    doc_ref = db.collection("livros").document(dados["titulo"])
    doc_ref.set({"titulo": dados["titulo"],
                "imagem": dados["imagem"],
                "siopse": dados["sinopse"],
                "autor": dados["autor"],
                "tipo": dados["tipo"]})
    
    return "OK"

@app.route("/get-manga", methods=["GET"])
def get_manga():
    manga_ref = db.collection("livros")
    docs = manga_ref.stream()
    manga_list = []
    print("Requisição feita")

    for doc in docs:
        manga_list.append(doc.to_dict())

    return jsonify(manga_list)
