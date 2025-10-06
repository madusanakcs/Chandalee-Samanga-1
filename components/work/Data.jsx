import WorkA from '../../src/assets/analysis_image.jpg'; // Placeholder for analysis project image
import WorkB from '../../src/assets/ml_model_image.png'; // Placeholder for ML project image

export const projectsData = [
    {
        id: 1,
        image: WorkB,
        title: 'Predicting Diabetes Risk using Logistic Regression',
        category: 'Data Science / ML',
        sourceUrl: 'https://github.com/your-profile/diabetes-risk-prediction', // Update with actual GitHub link
        status: 'completed',
        description: 'Analyzed the Diabetes dataset to compute statistical properties and identify key risk factors. Implemented a Logistic Regression model from scratch to train, evaluate performance (accuracy, precision, recall), and predict diabetes risk on unseen test data.',
        tools: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
    },
    {
        id: 2,
        image: WorkA,
        title: 'Lifestyle and Productivity Analysis of University Students',
        category: 'Data Analysis',
        sourceUrl: 'https://github.com/your-profile/student-productivity-analysis', // Update with actual GitHub link
        status: 'ongoing',
        description: 'Analyzed survey data on sleep, exercise, and academic productivity. Used statistical methods (correlation, t-tests) and visualizations to identify patterns and lifestyle factors affecting student performance, deriving actionable insights for optimization.',
        tools: ['Python', 'Pandas', 'Statistical Analysis', 'Data Visualization'],
    },
    // You can add a third entry here, perhaps a SQL/Excel based project.
    // {
    //     id: 3,
    //     image: WorkC,
    //     title: 'Sales Data Analysis & Dashboard',
    //     category: 'Business Intelligence',
    //     sourceUrl: 'https://github.com/your-profile/sales-dashboard',
    //     status: 'completed',
    //     description: 'Cleaned and transformed transactional sales data using SQL and Excel. Created a dynamic dashboard to track key performance indicators (KPIs) like monthly revenue, customer segments, and regional performance.',
    //     tools: ['SQL', 'Advanced Excel', 'Data Cleaning', 'Visualization'],
    // },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'Data Analysis',
    },
    {
        name: 'Data Science / ML',
    },
    {
        name: 'Business Intelligence', // Added this as a common category for DA
    },
];