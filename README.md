# Spencer's Portfolio

A personal portfolio website built with React to showcase projects, experience, and contact information. The site supports light/dark themes and is deployed via GitHub Pages.

Live site: http://spencer119.github.io/portfolio

## Tech Stack

- React 18 (Create React App)
- UI: NextUI v1
- Styling: Emotion (@emotion/react, @emotion/styled)
- Theming: next-themes (light/dark mode)
- Routing: react-router-dom v5
- Tooling: react-scripts (CRA), gh-pages (deployment)
- Testing: @testing-library/react, @testing-library/jest-dom, @testing-library/user-event
- Performance: web-vitals

## Getting Started

Prerequisites:
- Node.js (LTS recommended)
- npm or yarn

Install dependencies:
- npm: npm install
- yarn: yarn install

Run the development server:
- npm: npm start
- yarn: yarn start

The app will start at http://localhost:3000 and reload on changes.

## Available Scripts

- Start (dev): npm start / yarn start
- Test: npm test / yarn test
- Build (production): npm run build / yarn build
- Deploy to GitHub Pages: npm run deploy / yarn deploy
- Eject (one-way): npm run eject / yarn eject

## Deployment (GitHub Pages)

This project is configured for GitHub Pages with the homepage set to:
- http://spencer119.github.io/portfolio

Deploy steps:
1. Build the app: npm run build
2. Publish the build: npm run deploy
3. In your repository settings, enable GitHub Pages and select the gh-pages branch as the source.

Notes:
- Routing uses react-router-dom v5 APIs.
- UI components are built with NextUI; theming is handled by next-themes and Emotion.
