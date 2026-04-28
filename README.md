# BlogHub

BlogHub is a web-based blogging platform that allows users to create, publish, and manage blog posts. It provides a clean interface for writers to share articles and for readers to discover content.

## Features

- **Create & publish posts** – write and format blog articles with ease
- **User authentication** – sign up, log in, and manage your own posts
- **Browse & read** – explore posts from other authors on the platform
- **Comment system** – engage with posts through comments
- **Responsive design** – works on desktop and mobile browsers

## Tech Stack

- **Runtime:** Node.js
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js (Express)
- **Database:** MongoDB (or your preferred database)
- **Package manager:** npm / yarn

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js) or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dhruv535-Fr/BlogHub.git
cd BlogHub

# Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

### Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```bash
cp .env.example .env
```

## Project Structure

```
BlogHub/
├── public/          # Static assets (CSS, images, client-side JS)
├── src/
│   ├── routes/      # Express route handlers
│   ├── models/      # Database models
│   ├── controllers/ # Business logic
│   └── views/       # Template files
├── .env.example     # Example environment variables
├── .gitignore
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
