# 🎬 React Movies App

This is a React web application for browsing and discovering trending and popular movies. Built using React, TypeScript, and Material UI, this app provides a beautiful and responsive interface for exploring the latest films, viewing movie details, and experiencing a rich movie discovery journey.

## 🚀 Features

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| 🔥 Trending Movies     | Browse trending movies (daily/weekly) with beautiful movie slides            |
| 🌟 Popular Movies      | Explore popular movies with rich details and pagination support              |
| 📝 Movie Details       | Detailed view for each movie: title, rating, description, and more           |
| 🎨 Custom Theme        | Stylish UI built with Material UI and custom fonts                           |
| ⚡️ Fast & Modern       | Powered by Vite, React Query, and efficient API integration                  |

## 🏗️ Project Structure

| Path                                   | Description                           |
|-----------------------------------------|---------------------------------------|
| `src/main.tsx`                         | App entry point and providers         |
| `src/modules/home`                      | Home page modules, hooks, and services|
| `src/modules/movieDetails`              | Movie details view and logic          |
| `src/modules/shared`                    | Shared components, theme, constants   |

## ⚙️ Tech Stack

| Tool/Library         | Purpose                          |
|----------------------|----------------------------------|
| React                | UI Library                       |
| TypeScript           | Typed JS                         |
| Vite                 | Fast build tool                  |
| Material UI          | UI components & theming          |
| React Query          | Data fetching & caching          |
| axios                | API calls                        |

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DiaaHSharqawi/React-movies-app.git
   cd React-movies-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment variables**
   - Create a `.env` file in the root directory.
   - Add your [TMDB API Access Token](https://www.themoviedb.org/documentation/api):
     ```
     VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
     VITE_TMDB_ACCESS_TOKEN=your_tmdb_token
     VITE_BEARER_TOKEN_PREFIX=Bearer
     ```

4. **Run the project**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in your browser**
   - Visit [http://localhost:5173](http://localhost:5173) 🚀

## 🧩 Main Components

| Component                                | Description                                  |
|-------------------------------------------|----------------------------------------------|
| `<Root />`                               | App layout and main routes                   |
| `HeroTrendingMovieSlide`                  | Trending movie hero slide                    |
| `PopularMoviesSection`                    | Section for displaying popular movies        |
| `MovieDetailsContent`                     | Detailed view for a selected movie           |

## 📦 API Integration

- Uses [TMDB API](https://www.themoviedb.org/documentation/api) for movie data.
- Handles authentication via Bearer token.

## 🎨 Theming

- Custom theme via Material UI (`themes.ts`) using the "SanukRound" font.
- Responsive and modern design.

## 📂 File Overview

| File/Folder                                 | Purpose                         |
|---------------------------------------------|---------------------------------|
| `src/index.css`                             | Global styles and font loading  |
| `src/modules/shared/theme/themes.ts`        | Material UI theme config        |
| `src/modules/shared/services/api.tsx`       | Axios API setup with interceptors|
| `src/modules/home/hooks/`                   | React Query hooks for data      |
| `src/modules/home/services/`                | API services (fetching movies)  |
| `src/modules/movieDetails/`                 | Movie details page and logic    |

## ✅ Linting

- Configured with ESLint for TypeScript, React, and best practices.

## 🤝 Contributing

Feel free to open issues or pull requests!  
Your feedback and contributions are welcome.

## 📄 License

This project is for educational and showcase purposes.  
[MIT License](LICENSE)

---

Made with ❤️ by [DiaaHSharqawi](https://github.com/DiaaHSharqawi)
