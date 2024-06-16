import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Define sample data
data = {
    'traits': ['organized', 'analytical', 'creative', 'detail-oriented', 'team player'],
    'interests': ['technology', 'art', 'business', 'science', 'sports'],
    'skills': ['programming', 'design', 'leadership', 'research', 'communication'],
    'career': ['Software Developer', 'Graphic Designer', 'Entrepreneur', 'Scientist', 'Athlete']
}

# Generate more sample data
for i in range(20):  # Generate 20 more samples
    data['traits'].append(np.random.choice(['organized', 'analytical', 'creative', 'detail-oriented', 'team player']))
    data['interests'].append(np.random.choice(['technology', 'art', 'business', 'science', 'sports']))
    data['skills'].append(np.random.choice(['programming', 'design', 'leadership', 'research', 'communication']))
    data['career'].append(np.random.choice(['Software Developer', 'Graphic Designer', 'Entrepreneur', 'Scientist', 'Athlete']))

# Create a DataFrame
df = pd.DataFrame(data)

# Save DataFrame to CSV file
df.to_csv('career_data.csv', index=False)

print("Sample dataset saved to 'career_data.csv'")

# Load your dataset (replace with your data loading code)
df = pd.read_csv('career_data.csv')

# Assume 'traits', 'interests', 'skills' are features and 'career' is the target variable
X = df[['traits', 'interests', 'skills']]
y = df['career']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the model (example: Random Forest Classifier)
model = RandomForestClassifier()

# Train the model
model.fit(X_train, y_train)

# Predict on the test set
y_pred = model.predict(X_test)

# Evaluate model performance
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

# Save the model for deployment
import joblib
joblib.dump(model, 'career_prediction_model.joblib')
