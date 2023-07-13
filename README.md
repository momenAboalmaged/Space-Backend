# Space - Workspace Reservation and Management App
Space is a mobile application designed to simplify the reservation and management of workspaces. It addresses the challenge of finding suitable workspaces by providing users with detailed information about the nearest and highly-rated options that meet their specific needs. The app utilizes GPS technology to suggest the closest workspaces based on the user's location, optimizing their time and reducing costs by avoiding overcrowded workspaces.

# Features

- Detailed Workspace Information: Users can access comprehensive information about available workspaces, including location, amenities, pricing, and user ratings.
- Location-Based Recommendations: Utilizing GPS technology, the app suggests the nearest workspaces based on the user's current location, making it easier to find suitable options.
- User Preferences: Users can set their specific workspace preferences, such as quiet environments, availability of Wi-Fi, meeting room access, etc. The app takes these preferences into account when recommending workspaces.
- Reservation Management: Users can reserve workspaces directly through the app, ensuring their desired workspace is available when they need it.
- User Authentication and Authorization: Secure user authentication and authorization mechanisms are implemented to ensure data privacy and protect user information.
- File Upload and Storage: The app utilizes Multer and Cloudinary to handle file uploads, such as profile pictures or workspace images.
- Error Handling: Robust error handling mechanisms are implemented to provide a smooth and user-friendly experience.
- Data Validation: JOI validation is used to validate user input and ensure data integrity.
- Database: The app employs MongoDB as the NoSQL database for efficient data storage and retrieval.
- API Testing: Postman is used for API testing and development, ensuring the app's functionality and reliability.
- Email Notifications: Users receive email notifications for various events, such as reservation confirmations or updates.
- MVC Architecture: The app follows the Model-View-Controller architectural pattern for organized and maintainable code.



# Installation
To install and set up the Space app, follow these steps:

1. Clone the repository: git clone <repository-url>
2. Navigate to the project directory: cd space-app
3. Install the dependencies: npm install
4. Configure the environment variables:
. Create a .env file based on the provided .env.example.
. Set the necessary environment variables, such as database credentials, API keys, and email configuration.
5. Start the application: npm start

Make sure you have Node.js and MongoDB installed on your system before proceeding with the installation.
