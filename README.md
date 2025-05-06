# React Q&A Guide

A React application that displays a Q&A style guide covering HTML, CSS, JavaScript, React, and TypeScript. Users can browse, filter, and paginate through questions, and view individual posts.

## Features

- **Data-driven UI**: Loads Q&A items from `src/data/q_a_guide.json`  
- **Pagination**: Displays 5 items per page with Previous/Next controls  
- **Filtering**: Clickable tags to filter by language and difficulty  
- **Bookmarkable URLs**: Filter and page state stored in URL query parameters  
- **Routing**: Uses React Router v6 for navigation between front page and `/post/:id`  
- **Reusable Components**:  
  - `ShortPost` (post preview)  
  - `Framsida` (front page)  
  - `Tag` (filter button)  
  - `TagList` (filter sidebar)  
  - `PostPage` (single post view)  

## Prerequisites

- Node.js v14 or newer  
- npm v6+ or Yarn  

## Installation

```bash
git clone <repository_url>
cd <project-folder>
npm install       # or yarn install
```

## Running Locally

```bash
npm start         # or yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build     # or yarn build
```

## Project Structure

```
project-root/
├── public/
├── src/
│   ├── components/
│   │   ├── ShortPost.jsx     # Preview card component
│   │   ├── Tag.jsx           # Single filter button
│   │   └── TagList.jsx       # Sidebar of filter tags
│   ├── data/
│   │   └── q_a_guide.json    # Q&A dataset
│   ├── pages/
│   │   ├── Framsida.jsx      # Front page with pagination & filters
│   │   └── PostPage.jsx      # Individual Q&A view
│   ├── App.jsx               # Router & layout
│   └── index.jsx             # Entry point
├── package.json
└── README.md
```

## Configuration

- **Excerpt length**: In `ShortPost.jsx`, adjust the `EXCERPT_LENGTH` constant (default ≈100 characters ≈15 words).  
- **Filters & Pagination**: Controlled via URL query parameters:  
  - `?lang=JavaScript&lang=HTML`  
  - `?level=beginner`  
  - `?page=2`  

## Available Scripts

In the project directory, run:

```bash
npm start        # run in development mode  
npm test         # launch test runner  
npm run build    # bundle for production  
npm run eject    # one-way operation  
```
