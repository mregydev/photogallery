# Pexels Photo Grid App

This project displays a responsive photo gallery fetched from the Pexels API. It includes virtualization and performance optimizations for smooth user experience on both desktop and mobile.

## 🚀 Running the Project

To start the development server:

npm run dev


## Features
📷 Responsive Grid Layout

Automatically adjusts layout based on screen width:

4 columns on desktop

2 columns on tablets

1 column on mobile

## 💤 Partial Virtualization

Images are not loaded until they enter the viewport

✅ Can be extended to full virtualization by rendering only visible components with scroll tracking

## 🖼 Lazy Image Loading

Images use loading="lazy" to defer network requests until needed

## ⚡ High Performance

Minimal DOM nodes rendered

Prevents layout shift using fixed placeholders

Efficient rendering strategy improves frame rates during scroll

## 🧪 Testing
This project includes support for unit and DOM testing using modern libraries:

✅ Vitest – test runner

✅ @testing-library/react – for component-level testing

✅ @testing-library/jest-dom – for readable DOM assertions

⚠️ Note: Not all components have complete test coverage yet.

## 📊 Core Web Vitals
The app has been tested for Core Web Vitals on both mobile and desktop:

✅ All scores are above 90

🧩 Metrics tested include:

First Contentful Paint (FCP)

Largest Contentful Paint (LCP)

Total Blocking Time (TBT)

Cumulative Layout Shift (CLS)

Performance is achieved through:

Lazy rendering via IntersectionObserver

Minimal layout reflows

Optimized image handling


## 🧭 Future Improvements
🔁 Upgrade to full virtualization with absolute positioning and scroll window tracking

📈 Add test coverage for all core components

🎨 Use skeleton loaders or blur-up effects for smoother UX

