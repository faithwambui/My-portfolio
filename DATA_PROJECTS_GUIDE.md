# 📊 Data Analytics Projects - Implementation Guide

This guide provides step-by-step instructions for building the data analytics projects featured in your portfolio. These projects range from beginner to intermediate level and use real datasets.

---

## 🟢 BEGINNER PROJECTS

### Project 1: Sales Performance Dashboard

**What You'll Build:** An interactive Power BI dashboard analyzing retail sales data

**Dataset:** 
- [Kaggle: Superstore Sales](https://www.kaggle.com/datasets/vivek468/superstore-dataset-final)
- Or [Sample Superstore.xls](https://community.tableau.com/s/question/0D54T00000CWeX8SAL/sample-superstore-sales-excelxls)

**Tools Needed:**
- Power BI Desktop (Free)
- Excel

**Steps:**

1. **Data Preparation (Excel)**
   - Open the dataset
   - Check for missing values
   - Create calculated columns: Profit Margin = Profit/Sales
   - Save as clean CSV

2. **Power BI Dashboard**
   ```
   Import Data:
   - Load CSV into Power BI
   - Check data types (dates, numbers, text)
   
   Create Measures:
   - Total Sales = SUM(Sales)
   - Total Profit = SUM(Profit)
   - Profit Margin % = DIVIDE([Total Profit], [Total Sales], 0) * 100
   - YoY Growth = (Current Year Sales - Previous Year Sales) / Previous Year Sales
   
   Visualizations:
   - KPI Cards: Total Sales, Total Profit, Profit Margin%
   - Line Chart: Sales trend over time
   - Map: Sales by region
   - Bar Chart: Top 10 products by sales
   - Pie Chart: Sales by category
   - Table: Regional performance metrics
   ```

3. **Publish**
   - Publish to Power BI Service (create free account)
   - Get shareable link
   - Add link to portfolio

**Learning Outcomes:**
- Data cleaning and preparation
- DAX formulas
- Creating interactive dashboards
- Visual design principles

---

### Project 2: Customer Churn Analysis

**What You'll Build:** Python analysis identifying why customers leave

**Dataset:** 
- [Kaggle: Telco Customer Churn](https://www.kaggle.com/datasets/blastchar/telco-customer-churn)

**Tools Needed:**
- Python 3.x
- Jupyter Notebook
- Libraries: pandas, matplotlib, seaborn, numpy

**Complete Code:**

```python
# Import libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Load data
df = pd.read_csv('Telco-Customer-Churn.csv')

# 1. EXPLORATORY DATA ANALYSIS
print("Dataset Info:")
print(df.info())
print("\nChurn Distribution:")
print(df['Churn'].value_counts(normalize=True))

# 2. DATA CLEANING
# Convert TotalCharges to numeric
df['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce')
df = df.dropna()

# 3. CHURN RATE CALCULATION
churn_rate = df['Churn'].value_counts(normalize=True)['Yes'] * 100
print(f"\nOverall Churn Rate: {churn_rate:.2f}%")

# 4. VISUALIZATIONS

# Churn by Contract Type
plt.figure(figsize=(10, 6))
sns.countplot(data=df, x='Contract', hue='Churn')
plt.title('Churn by Contract Type')
plt.savefig('churn_by_contract.png')
plt.show()

# Churn by Monthly Charges
plt.figure(figsize=(10, 6))
df.boxplot(column='MonthlyCharges', by='Churn')
plt.title('Monthly Charges Distribution by Churn')
plt.suptitle('')
plt.savefig('charges_by_churn.png')
plt.show()

# Churn by Tenure
plt.figure(figsize=(10, 6))
sns.histplot(data=df, x='tenure', hue='Churn', bins=30, kde=True)
plt.title('Tenure Distribution by Churn')
plt.savefig('tenure_by_churn.png')
plt.show()

# 5. KEY INSIGHTS
print("\n=== KEY FINDINGS ===")

# Churn by contract
print("\nChurn Rate by Contract Type:")
contract_churn = df.groupby('Contract')['Churn'].apply(
    lambda x: (x=='Yes').sum() / len(x) * 100
)
print(contract_churn)

# Average charges comparison
print("\nAverage Monthly Charges:")
print(df.groupby('Churn')['MonthlyCharges'].mean())

# Tenure comparison
print("\nAverage Tenure (months):")
print(df.groupby('Churn')['tenure'].mean())

# 6. CORRELATION ANALYSIS
# Create numeric version of Churn
df['Churn_Binary'] = (df['Churn'] == 'Yes').astype(int)

# Correlation heatmap
numeric_cols = ['tenure', 'MonthlyCharges', 'TotalCharges', 'Churn_Binary']
plt.figure(figsize=(8, 6))
sns.heatmap(df[numeric_cols].corr(), annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Matrix')
plt.savefig('correlation_matrix.png')
plt.show()

# 7. SUMMARY REPORT
print("\n=== CHURN ANALYSIS SUMMARY ===")
print(f"Total Customers: {len(df)}")
print(f"Churned Customers: {(df['Churn']=='Yes').sum()}")
print(f"Churn Rate: {churn_rate:.2f}%")
print("\nTop Risk Factors:")
print("1. Month-to-month contracts have highest churn")
print("2. Higher monthly charges correlate with churn")
print("3. Short tenure customers more likely to churn")
```

**Deliverables:**
- Jupyter notebook with analysis
- 4-5 visualization images
- Summary findings document
- GitHub repository

---

### Project 3: E-commerce Product Analytics

**What You'll Build:** Web scraping and price analysis tool

**Dataset:** You'll scrape live data from e-commerce sites

**Tools Needed:**
- Python 3.x
- Libraries: beautifulsoup4, requests, pandas, plotly

**Complete Code:**

```python
import requests
from bs4 import BeautifulSoup
import pandas as pd
import plotly.express as px
import time

# NOTE: This is an educational example. Always check robots.txt and terms of service
# For portfolio, you can use a pre-scraped dataset instead

def scrape_sample_products():
    """
    For demonstration, using a sample dataset
    In production, you'd scrape from actual sites
    """
    
    # Sample data (replace with actual scraping or use CSV)
    data = {
        'Product': [
            'Laptop Dell XPS 13', 'Laptop HP Spectre', 'Laptop Lenovo ThinkPad',
            'Laptop MacBook Air', 'Laptop ASUS ZenBook', 'Laptop Acer Swift',
            'Laptop Microsoft Surface', 'Laptop Razer Blade', 'Laptop MSI Prestige',
            'Laptop LG Gram'
        ],
        'Price': [999, 1099, 850, 1199, 799, 699, 1299, 1599, 1399, 1149],
        'Rating': [4.5, 4.3, 4.6, 4.7, 4.2, 4.0, 4.4, 4.8, 4.3, 4.1],
        'Category': ['Laptop'] * 10,
        'Brand': ['Dell', 'HP', 'Lenovo', 'Apple', 'ASUS', 
                 'Acer', 'Microsoft', 'Razer', 'MSI', 'LG']
    }
    
    return pd.DataFrame(data)

# Load or scrape data
df = scrape_sample_products()

print("Dataset Preview:")
print(df.head())
print(f"\nTotal Products: {len(df)}")

# ANALYSIS 1: Price Distribution
fig1 = px.histogram(df, x='Price', nbins=10, 
                    title='Laptop Price Distribution',
                    labels={'Price': 'Price ($)', 'count': 'Number of Products'})
fig1.write_html('price_distribution.html')
fig1.show()

# ANALYSIS 2: Price by Brand
fig2 = px.box(df, x='Brand', y='Price', 
              title='Price Range by Brand',
              color='Brand')
fig2.write_html('price_by_brand.html')
fig2.show()

# ANALYSIS 3: Price vs Rating
fig3 = px.scatter(df, x='Price', y='Rating', 
                  size='Price', color='Brand',
                  hover_data=['Product'],
                  title='Price vs Rating Analysis')
fig3.write_html('price_vs_rating.html')
fig3.show()

# STATISTICS
print("\n=== PRICE STATISTICS ===")
print(f"Average Price: ${df['Price'].mean():.2f}")
print(f"Median Price: ${df['Price'].median():.2f}")
print(f"Price Range: ${df['Price'].min()} - ${df['Price'].max()}")
print(f"\nAverage Rating: {df['Rating'].mean():.2f}")

print("\n=== BRAND ANALYSIS ===")
brand_stats = df.groupby('Brand').agg({
    'Price': ['mean', 'min', 'max'],
    'Rating': 'mean'
}).round(2)
print(brand_stats)

# INSIGHTS
print("\n=== KEY INSIGHTS ===")
print(f"1. Best Value: {df.loc[df['Rating']/df['Price']*1000 == (df['Rating']/df['Price']*1000).max(), 'Product'].values[0]}")
print(f"2. Highest Rated: {df.loc[df['Rating'].idxmax(), 'Product']}")
print(f"3. Most Affordable: {df.loc[df['Price'].idxmin(), 'Product']}")
print(f"4. Premium Option: {df.loc[df['Price'].idxmax(), 'Product']}")

# Save results
df.to_csv('product_analysis_results.csv', index=False)
print("\n✅ Analysis complete! Files saved.")
```

**Alternative: Use Real Dataset**
- [Kaggle: Amazon Products Dataset](https://www.kaggle.com/datasets/karkavelrajaj/amazon-sales-dataset)

---

## 🟡 INTERMEDIATE PROJECTS

### Project 4: Social Media Sentiment Analysis

**What You'll Build:** NLP classifier for tweet sentiment

**Dataset:**
- [Kaggle: Twitter Sentiment Analysis](https://www.kaggle.com/datasets/kazanova/sentiment140)

**Complete Code:**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report, confusion_matrix
import re
from wordcloud import WordCloud
import nltk

# Download required NLTK data
nltk.download('stopwords')
from nltk.corpus import stopwords

# Load dataset (assuming CSV with 'text' and 'sentiment' columns)
# For Sentiment140 dataset
df = pd.read_csv('tweets.csv', encoding='latin-1', 
                 names=['target', 'id', 'date', 'flag', 'user', 'text'])

# Keep only relevant columns
df = df[['text', 'target']]

# Convert: 0 (negative) to 0, 4 (positive) to 1
df['sentiment'] = df['target'].replace({0: 0, 4: 1})
df = df[['text', 'sentiment']]

# Sample for faster processing (optional)
df = df.sample(50000, random_state=42)

print("Dataset Info:")
print(df['sentiment'].value_counts())

# TEXT PREPROCESSING
def clean_text(text):
    # Remove URLs
    text = re.sub(r'http\S+|www\S+|https\S+', '', text)
    # Remove user mentions
    text = re.sub(r'@\w+', '', text)
    # Remove special characters and numbers
    text = re.sub(r'[^A-Za-z\s]', '', text)
    # Convert to lowercase
    text = text.lower()
    # Remove extra whitespace
    text = ' '.join(text.split())
    return text

df['clean_text'] = df['text'].apply(clean_text)

# Remove stopwords
stop_words = set(stopwords.words('english'))
df['clean_text'] = df['clean_text'].apply(
    lambda x: ' '.join([word for word in x.split() if word not in stop_words])
)

print("\nSample cleaned texts:")
print(df[['text', 'clean_text']].head(3))

# SPLIT DATA
X_train, X_test, y_train, y_test = train_test_split(
    df['clean_text'], df['sentiment'], 
    test_size=0.2, random_state=42
)

# VECTORIZATION
vectorizer = TfidfVectorizer(max_features=5000)
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# TRAIN MODEL
model = MultinomialNB()
model.fit(X_train_vec, y_train)

# PREDICTIONS
y_pred = model.predict(X_test_vec)

# EVALUATION
print("\n=== MODEL PERFORMANCE ===")
print("\nClassification Report:")
print(classification_report(y_test, y_pred, 
                          target_names=['Negative', 'Positive']))

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=['Negative', 'Positive'],
            yticklabels=['Negative', 'Positive'])
plt.title('Confusion Matrix')
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.savefig('confusion_matrix.png')
plt.show()

# WORD CLOUDS
# Positive tweets
positive_text = ' '.join(df[df['sentiment']==1]['clean_text'])
wordcloud_pos = WordCloud(width=800, height=400, 
                          background_color='white').generate(positive_text)

plt.figure(figsize=(10, 5))
plt.imshow(wordcloud_pos, interpolation='bilinear')
plt.axis('off')
plt.title('Most Common Words in Positive Tweets')
plt.savefig('wordcloud_positive.png')
plt.show()

# Negative tweets
negative_text = ' '.join(df[df['sentiment']==0]['clean_text'])
wordcloud_neg = WordCloud(width=800, height=400,
                          background_color='white').generate(negative_text)

plt.figure(figsize=(10, 5))
plt.imshow(wordcloud_neg, interpolation='bilinear')
plt.axis('off')
plt.title('Most Common Words in Negative Tweets')
plt.savefig('wordcloud_negative.png')
plt.show()

# TEST ON NEW TEXT
def predict_sentiment(text):
    clean = clean_text(text)
    clean = ' '.join([w for w in clean.split() if w not in stop_words])
    vec = vectorizer.transform([clean])
    pred = model.predict(vec)[0]
    prob = model.predict_proba(vec)[0]
    
    sentiment = 'Positive' if pred == 1 else 'Negative'
    confidence = prob[pred] * 100
    
    return sentiment, confidence

# Example predictions
test_texts = [
    "I love this product! It's amazing!",
    "This is the worst experience ever.",
    "Not sure how I feel about this."
]

print("\n=== SAMPLE PREDICTIONS ===")
for text in test_texts:
    sentiment, confidence = predict_sentiment(text)
    print(f"\nText: {text}")
    print(f"Sentiment: {sentiment} ({confidence:.2f}% confident)")
```

---

### Project 5: Financial Market Forecasting

**What You'll Build:** Stock price forecasting with ARIMA

**Dataset:** Live data from yFinance API

**Complete Code:**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import yfinance as yf
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from sklearn.metrics import mean_squared_error, mean_absolute_error
import warnings
warnings.filterwarnings('ignore')

# DOWNLOAD STOCK DATA
ticker = 'AAPL'  # Apple stock
start_date = '2020-01-01'
end_date = '2024-01-01'

print(f"Downloading {ticker} stock data...")
data = yf.download(ticker, start=start_date, end=end_date)

# Use Close price
df = pd.DataFrame(data['Close'])
df.columns = ['Price']
print(f"\nData points: {len(df)}")
print(df.head())

# EXPLORATORY ANALYSIS
plt.figure(figsize=(12, 6))
plt.plot(df.index, df['Price'])
plt.title(f'{ticker} Stock Price Over Time')
plt.xlabel('Date')
plt.ylabel('Price ($)')
plt.grid(True)
plt.savefig('stock_price_history.png')
plt.show()

# Calculate returns
df['Returns'] = df['Price'].pct_change()
df['Returns'].hist(bins=50, figsize=(10, 6))
plt.title('Distribution of Daily Returns')
plt.xlabel('Returns')
plt.savefig('returns_distribution.png')
plt.show()

# TIME SERIES DECOMPOSITION
from statsmodels.tsa.seasonal import seasonal_decompose

decomposition = seasonal_decompose(df['Price'], model='multiplicative', period=30)
fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1, figsize=(12, 10))

decomposition.observed.plot(ax=ax1)
ax1.set_ylabel('Observed')
decomposition.trend.plot(ax=ax2)
ax2.set_ylabel('Trend')
decomposition.seasonal.plot(ax=ax3)
ax3.set_ylabel('Seasonal')
decomposition.resid.plot(ax=ax4)
ax4.set_ylabel('Residual')

plt.tight_layout()
plt.savefig('time_series_decomposition.png')
plt.show()

# SPLIT DATA
train_size = int(len(df) * 0.8)
train, test = df['Price'][:train_size], df['Price'][train_size:]

print(f"\nTraining set: {len(train)} days")
print(f"Test set: {len(test)} days")

# ARIMA MODEL
# Find best parameters (p, d, q)
# Using (5, 1, 0) as starting point
model = ARIMA(train, order=(5, 1, 0))
model_fit = model.fit()

print("\n=== MODEL SUMMARY ===")
print(model_fit.summary())

# FORECAST
forecast = model_fit.forecast(steps=len(test))
forecast_index = test.index

# VISUALIZATION
plt.figure(figsize=(12, 6))
plt.plot(train.index, train, label='Training Data', color='blue')
plt.plot(test.index, test, label='Actual Test Data', color='green')
plt.plot(forecast_index, forecast, label='Forecast', color='red', linestyle='--')
plt.title(f'{ticker} Stock Price Forecast')
plt.xlabel('Date')
plt.ylabel('Price ($)')
plt.legend()
plt.grid(True)
plt.savefig('forecast_results.png')
plt.show()

# EVALUATE MODEL
mse = mean_squared_error(test, forecast)
rmse = np.sqrt(mse)
mae = mean_absolute_error(test, forecast)
mape = np.mean(np.abs((test - forecast) / test)) * 100

print("\n=== FORECAST ACCURACY ===")
print(f"RMSE: ${rmse:.2f}")
print(f"MAE: ${mae:.2f}")
print(f"MAPE: {mape:.2f}%")

# FORECAST NEXT 30 DAYS
future_forecast = model_fit.forecast(steps=30)
future_dates = pd.date_range(start=df.index[-1] + pd.Timedelta(days=1), 
                             periods=30)

plt.figure(figsize=(12, 6))
plt.plot(df.index[-90:], df['Price'][-90:], label='Historical', color='blue')
plt.plot(future_dates, future_forecast, label='30-Day Forecast', 
         color='red', linestyle='--')
plt.title(f'{ticker} Stock Price - 30-Day Forecast')
plt.xlabel('Date')
plt.ylabel('Price ($)')
plt.legend()
plt.grid(True)
plt.savefig('future_forecast.png')
plt.show()

print("\n=== 30-DAY FORECAST ===")
forecast_df = pd.DataFrame({
    'Date': future_dates,
    'Forecasted Price': future_forecast
})
print(forecast_df.head(10))
```

---

### Project 6: Healthcare Data Insights

**What You'll Build:** Patient readmission prediction model

**Dataset:**
- [Kaggle: Diabetes Readmission](https://www.kaggle.com/datasets/brandao/diabetes)

**Complete Code:**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix, roc_curve, roc_auc_score
import warnings
warnings.filterwarnings('ignore')

# LOAD DATA
df = pd.read_csv('diabetic_data.csv')

print("Dataset Shape:", df.shape)
print("\nColumns:", df.columns.tolist())
print("\nFirst few rows:")
print(df.head())

# DATA CLEANING
# Remove columns with too many missing values
df = df.replace('?', np.nan)
missing_pct = (df.isnull().sum() / len(df)) * 100
print("\nMissing Values (%):")
print(missing_pct[missing_pct > 0].sort_values(ascending=False))

# Drop columns with >50% missing
cols_to_drop = missing_pct[missing_pct > 50].index
df = df.drop(columns=cols_to_drop)

# Define target variable
# readmitted: <30 days = 1 (high risk), >30 or No = 0 (low risk)
df['readmitted_binary'] = df['readmitted'].apply(
    lambda x: 1 if x == '<30' else 0
)

print(f"\nReadmission Distribution:")
print(df['readmitted_binary'].value_counts(normalize=True))

# FEATURE SELECTION
features_to_use = [
    'time_in_hospital', 'num_lab_procedures', 'num_procedures',
    'num_medications', 'number_outpatient', 'number_emergency',
    'number_inpatient', 'number_diagnoses', 'age', 'A1Cresult',
    'insulin', 'diabetesMed'
]

# Keep only available features
features_to_use = [f for f in features_to_use if f in df.columns]
df_model = df[features_to_use + ['readmitted_binary']].copy()

# ENCODE CATEGORICAL VARIABLES
le = LabelEncoder()
categorical_cols = df_model.select_dtypes(include=['object']).columns

for col in categorical_cols:
    if col != 'readmitted_binary':
        df_model[col] = le.fit_transform(df_model[col].astype(str))

# Handle missing values
df_model = df_model.fillna(df_model.median())

print("\nFeatures used:", features_to_use)

# EXPLORATORY ANALYSIS
# Age distribution by readmission
if 'age' in df_model.columns:
    plt.figure(figsize=(10, 6))
    sns.countplot(data=df, x='age', hue='readmitted_binary')
    plt.title('Age Distribution by Readmission')
    plt.xticks(rotation=45)
    plt.savefig('age_by_readmission.png')
    plt.show()

# Correlation heatmap
plt.figure(figsize=(12, 10))
corr = df_model.corr()
sns.heatmap(corr, annot=False, cmap='coolwarm', center=0)
plt.title('Feature Correlation Matrix')
plt.tight_layout()
plt.savefig('correlation_matrix.png')
plt.show()

# PREPARE DATA FOR MODELING
X = df_model.drop('readmitted_binary', axis=1)
y = df_model['readmitted_binary']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print(f"\nTraining set: {X_train.shape[0]} patients")
print(f"Test set: {X_test.shape[0]} patients")

# TRAIN MODEL
model = LogisticRegression(max_iter=1000, random_state=42)
model.fit(X_train_scaled, y_train)

# PREDICTIONS
y_pred = model.predict(X_test_scaled)
y_pred_proba = model.predict_proba(X_test_scaled)[:, 1]

# EVALUATION
print("\n=== MODEL PERFORMANCE ===")
print("\nClassification Report:")
print(classification_report(y_test, y_pred, 
                          target_names=['Low Risk', 'High Risk']))

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=['Low Risk', 'High Risk'],
            yticklabels=['Low Risk', 'High Risk'])
plt.title('Confusion Matrix')
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.savefig('confusion_matrix_healthcare.png')
plt.show()

# ROC Curve
fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba)
auc_score = roc_auc_score(y_test, y_pred_proba)

plt.figure(figsize=(8, 6))
plt.plot(fpr, tpr, label=f'ROC Curve (AUC = {auc_score:.2f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random Classifier')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curve')
plt.legend()
plt.grid(True)
plt.savefig('roc_curve.png')
plt.show()

print(f"\nROC-AUC Score: {auc_score:.2f}")

# FEATURE IMPORTANCE
feature_importance = pd.DataFrame({
    'Feature': X.columns,
    'Importance': abs(model.coef_[0])
}).sort_values('Importance', ascending=False)

plt.figure(figsize=(10, 6))
sns.barplot(data=feature_importance.head(10), x='Importance', y='Feature')
plt.title('Top 10 Most Important Features')
plt.tight_layout()
plt.savefig('feature_importance.png')
plt.show()

print("\n=== TOP RISK FACTORS ===")
print(feature_importance.head(10))

# SAMPLE PREDICTIONS
print("\n=== SAMPLE PATIENT PREDICTIONS ===")
sample_indices = np.random.choice(X_test.index, 5, replace=False)
samples = X_test.loc[sample_indices]
samples_scaled = scaler.transform(samples)
predictions = model.predict(samples_scaled)
probabilities = model.predict_proba(samples_scaled)[:, 1]

for i, idx in enumerate(sample_indices):
    risk = "HIGH RISK" if predictions[i] == 1 else "LOW RISK"
    print(f"\nPatient {i+1}:")
    print(f"  Risk Level: {risk}")
    print(f"  Readmission Probability: {probabilities[i]:.2%}")
```

---

## 📚 Additional Resources

### Datasets
- [Kaggle](https://www.kaggle.com/datasets)
- [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php)
- [Google Dataset Search](https://datasetsearch.research.google.com/)
- [Data.gov](https://data.gov/)

### Learning
- [Kaggle Learn](https://www.kaggle.com/learn)
- [DataCamp](https://www.datacamp.com/)
- [Coursera - Data Science Courses](https://www.coursera.org/)

### Tools
- [Jupyter Notebook](https://jupyter.org/)
- [Google Colab](https://colab.research.google.com/) (Free GPU)
- [Power BI Desktop](https://powerbi.microsoft.com/)
- [Tableau Public](https://public.tableau.com/)

---

## 🎯 Portfolio Tips

1. **Documentation**: Always include:
   - Problem statement
   - Data description
   - Methodology
   - Results and insights
   - Visualizations

2. **GitHub Repository Structure**:
   ```
   project-name/
   ├── README.md
   ├── data/
   │   └── dataset.csv
   ├── notebooks/
   │   └── analysis.ipynb
   ├── visualizations/
   │   ├── chart1.png
   │   └── chart2.png
   └── requirements.txt
   ```

3. **Make It Visual**: Employers love:
   - Clean, professional charts
   - Interactive dashboards
   - Clear insights highlighted

4. **Show Impact**: Always include:
   - Business value
   - Actionable recommendations
   - Model performance metrics

Good luck building your projects! 🚀
