from keras.models import load_model
from PIL import Image
import numpy as np
import json
import sys
import os

# Load trained model
# Current directory of this file (backhend/)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Paths to model and class names
MODEL_PATH = os.path.join(BASE_DIR, "civicfix_model4.h5")
CLASS_NAMES_PATH = os.path.join(BASE_DIR, "class_names.json")

# Load model
model = load_model(MODEL_PATH)

# Load class names
with open(CLASS_NAMES_PATH, "r") as f:
    class_names = json.load(f)

# MODEL_PATH = r"C:\Dont touch me !!!\GIthub\CivicFix_Project\backend\civicfix_model4.h5"
# model = load_model(MODEL_PATH)
# img_path= r"C:\\Dont touch me !!!\\GIthub\\CivicFix\\Test_rgb.jpg"

# Load class names
# with open(r"C:\Dont touch me !!!\GIthub\CivicFix_Project\backend\class_names.json", "r") as f:
#     class_names = json.load(f)

def predict_image(img_path):
    img = Image.open(img_path).convert("RGB")
    img = img.resize((128, 128))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    predictions = model.predict(img_array)
    predicted_class = class_names[np.argmax(predictions[0])]
    confidence = float(np.max(predictions[0]) * 100)
    return predicted_class, confidence

# Example usage
# if __name__ == "__main__":
#     if len(sys.argv) < 2:
#         print("⚠️ Please provide an image path: python predict.py test.jpg")
#     else:
#         img_path = sys.argv[1]
# pred, conf = predict_image(img_path)
# print(f"Predicted issue: {pred} ({conf:.2f}%)")