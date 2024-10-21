
```markdown
# Dashboard

A simple Next.js web application that fetches and visualizes website visit data and customer data from a CRM.

## Features

- Dashboard with website visit statistics and customer data visualization
- (Note: Authentication features were not implemented due to time constraints)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-next-app.git
   cd dashboard
```

2. Install Dependencies:

```shellscript
npm install
```




### Setting up Mockaroo

1. Sign up for a Mockaroo account at [https://www.mockaroo.com/](https://www.mockaroo.com/).
2. Import the schemas:

1. Navigate to the `files/schema` folder in the project.
2. Import `users_schema.json` and `traffic_schema.json` into your Mockaroo account.



3. Set up datasets:

1. In your Mockaroo account, create new datasets using the imported schemas.
2. Use the CSV files located in `files/datasets` (`activity.csv` and `traffic.csv`) to populate your Mockaroo datasets.



4. Generate API endpoints:

1. In Mockaroo, create API endpoints for both the users and traffic datasets.
2. Note down the API URLs and your Mockaroo API key.



5. Configure environment variables:

1. Create a `.env.local` file in the root of your project.
2. Add the following variables:

```plaintext
MOCKAROO_API_KEY=your_api_key_here
USERS_API_URL=your_users_api_url_here
TRAFFIC_API_URL=your_traffic_api_url_here
```







### Running the Application

Start the development server:

```shellscript
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

The project includes a `files` folder in the root directory:

```plaintext
files/
├── schema/
│   ├── users_schema.json
│   └── traffic_schema.json
└── datasets/
    ├── activity.csv
    └── traffic.csv
```

- The `schema` folder contains the JSON schema files for users and traffic data.
- The `datasets` folder contains CSV files with sample data for activities and traffic.


## Note on API Usage

If you've exhausted your free trial on Mockaroo, you can use the provided CSV files in the `files/datasets` folder as a fallback. Implement a local data fetching mechanism in your Next.js API routes to read from these CSV files instead of making requests to Mockaroo.

## Note on Authentication

Due to time constraints, authentication features (sign-in and sign-up pages) were not implemented in this version of the application. The focus was on creating the dashboard and data visualization components.