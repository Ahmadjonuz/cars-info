# Car Information Website

A modern web application for browsing and searching car information, built with Next.js, Supabase, and Tailwind CSS.

## Features

- 🚗 Comprehensive car catalog with detailed specifications
- 🔍 Advanced search functionality with multiple filters
- 🌓 Dark/Light mode support
- 🔐 User authentication (login/register)
- 🌐 Multi-language support (English and Uzbek)
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend**: Next.js 14, React
- **Styling**: Tailwind CSS, Shadcn UI
- **Backend**: Supabase
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/car-info-website.git
cd car-info-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
![image](https://github.com/user-attachments/assets/8ae6667c-d842-4637-bc68-fe33d1b56307)

![image](https://github.com/user-attachments/assets/2188ddb3-79e4-45c6-b452-86a6c42ac59b)



## Project Structure
├── app/ # Next.js app directory
│ ├── auth/ # Authentication pages
│ ├── cars/ # Car listing pages
│ └── search/ # Search functionality
├── components/ # React components
│ ├── ui/ # UI components
│ └── providers/ # Context providers
├── lib/ # Utility functions and data
├── public/ # Static assets
└── styles/ # Global styles
