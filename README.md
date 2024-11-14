
# Lendsqr Dashboard

This project is a web-based dashboard built for Lendsqr. It features a user-friendly interface for managing loan applications, user profiles, and more. The application is built using React, TypeScript, and a range of modern web development tools. It also integrates with APIs to fetch and display user data, ensuring a smooth and dynamic user experience.

## Features

- **User Management**: View and manage users, including their loan statuses.
- **Responsive Design**: Optimized for both desktop and mobile screens, with a collapsible sidebar on mobile devices.
- **Search Functionality**: Includes a search box to quickly filter user data.
- **Notifications**: Displays notifications related to the users or system updates.
- **API Integration**: Fetches user data dynamically from an external API and stores it locally for offline use.
- **Dynamic Sidebar**: Sidebar visibility is toggled with a hamburger menu on mobile screens.
- **Customizable Layout**: Sidebar, header, and main content sections adjust based on the screen size and user actions.

## Tech Stack

- **Frontend**:
  - React
  - TypeScript
  - CSS/Sass
  - React Router
  - React Icons
  - `useSWR` for data fetching
  - `jest` for unit testing

- **Backend**:
  - APIs for fetching user data (integrated through SWR)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/lendsqr-dashboard.git
   cd lendsqr-dashboard
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn start
   ```

   This will launch the app at `http://localhost:3000`.

## Running Tests

To run the tests using Jest, run the following command:

```bash
yarn test
```

Make sure that the tests are set up in the `__tests__` folder or wherever you have organized your test files.

## File Structure

- `src/` – Contains all the application source code
  - `components/` – Reusable UI components like buttons, forms, etc.
  - `pages/` – Contains page components like Dashboard, User Management, etc.
  - `assets/` – Stores static files like images, fonts, etc.
  - `hooks/` – Custom hooks for reusable logic
  - `utils/` – Utility functions
  - `App.tsx` – Main entry point for the React app
  - `index.tsx` – Renders the React app
  - `styles/` – Global CSS/Sass styles
  - `setupTest.ts` – Jest setup for testing

## Configuration

### Jest Setup

The project uses Jest for unit testing with TypeScript. You can customize the Jest configuration in the `jest.config.ts` file.

### API Integration

Data is fetched from an external endpoint using the `useSWR` hook, with data stored in `localStorage` for offline access. The component will fetch new data whenever the stored data is cleared or unavailable.

## Contributing

Feel free to fork this repository and create a pull request with your changes. We welcome contributions!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Run the tests to ensure everything works
5. Create a pull request

## License

This project is licensed under the MIT License.
