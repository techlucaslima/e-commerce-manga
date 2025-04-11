import firebase_admin
from firebase_admin import credentials, firestore
import os

env_data = {
    "type": "service_account",
    "project_id": os.environ.get("PROJECT_ID"),
    "private_key_id": os.environ.get("PRIVATE_KEY_ID"),
    "private_key": os.environ.get("PRIVATE_KEY"),
    "client_email": os.environ.get("CLIENT_EMAIL"),
    "client_id": os.environ.get("CLIENT_ID"),
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": os.environ.get("CLIENT_X509_CERT_URL"),
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40e-commerce-manga-ca505.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

cred = credentials.Certificate(env_data)
firebase_admin.initialize_app(cred)

db = firestore.client()
