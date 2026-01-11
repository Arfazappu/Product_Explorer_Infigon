# Product Explorer Dashboard

## Live Demo

[View Live Demo](#https://product-explorer-infigon.vercel.app/)

## Features Implemented

#### 1. Product Listing Page
- ✓ Fetches product data from [FakeStore API](https://fakestoreapi.com/products)
- ✓ Responsive grid layout displaying:
  - Product image
  - Product title
  - Price
  - Category badge
- ✓ Loading state with skeleton loaders
- ✓ Error state with user-friendly error message and retry option

#### 2. Search & Filtering
- ✓ Client-side search by product title (real-time)
- ✓ Category filter with button-based UI
- ✓ Combined filtering (search + category)
- ✓ Clear search functionality with debounce feature

#### 3. Product Details Page
- ✓ Dynamic routing: `/products/[id]`
- ✓ Displays:
  - Large product image
  - Complete title
  - Full description
  - Price
  - Category
  - Star rating with review count
- ✓ Back navigation to product listing
- ✓ Implemented using Next.js App Router dynamic routes

#### 4. Favorites Feature
- ✓ Mark/unmark products as favorites with heart icon
- ✓ Favorite Context is maintained to keep the favorites consitent across the application 
- ✓ Favorites persist across sessions using localStorage
- ✓ "🩷" Button navigates to favorites page displaying the favorites items
- ✓ Favorites counter badge

#### 5. Responsive Design
- ✓ Mobile-first approach using Tailwind CSS
- ✓ Fully responsive across all devices:
  - **Mobile**: 2 column layout
  - **Tablet**: 3-column grid
  - **Large Desktop**: 4-column grid

### Bonus Features

- ✓ **Sort by Price**: Ascending and descending price sorting

## Setup Instructions

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arfazappu/Product_Explorer_Infigon
   cd product-explorer-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if using yarn:
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   or:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

5. **Build for production** (optional)
   ```bash
   npm run build
   npm start
   ```