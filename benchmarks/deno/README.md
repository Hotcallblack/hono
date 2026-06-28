# Hono Deno Benchmarks with Vercel Web Analytics

This directory contains benchmark implementations for various Deno web frameworks, with Vercel Web Analytics integration.

## 🚀 Quick Start

### Prerequisites

- [Deno](https://deno.land/) installed on your system
- A Vercel account (for analytics to work in production)

### Running Locally

1. **Install dependencies** (if using npm packages):
   ```bash
   npm install
   ```

2. **Run the Hono server**:
   ```bash
   deno run --allow-net --allow-read --allow-env hono.ts
   ```

3. **Visit the application**:
   Open [http://localhost:8000](http://localhost:8000) in your browser

## 📊 Vercel Web Analytics

This project is configured with Vercel Web Analytics to track page views and user interactions.

### What's Included

- **Package**: `@vercel/analytics` package added to `package.json`
- **HTML Integration**: The `index.html` file includes the Vercel Analytics script
- **Server Setup**: The Hono server serves the HTML page at the root route

### How It Works

The analytics integration uses the Vercel Insights script, which automatically tracks:
- Page views
- User sessions
- Navigation events
- Performance metrics

### Deployment to Vercel

1. **Enable Analytics**:
   - Go to your [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project
   - Navigate to Analytics tab
   - Click "Enable Web Analytics"

2. **Deploy**:
   ```bash
   vercel deploy
   ```

3. **View Analytics**:
   After deployment, visit your project's Analytics page in the Vercel dashboard to see real-time insights.

### Configuration Files

- **`package.json`**: Contains the `@vercel/analytics` dependency
- **`deno.json`**: Deno configuration with npm imports and compiler options
- **`index.html`**: Demo page with analytics script integrated
- **`hono.ts`**: Updated Hono server that serves the HTML page

## 🧪 Available Benchmarks

This directory includes benchmark implementations for:

- **Hono**: Web framework built on Web Standards
- **Oak**: Middleware framework for Deno
- **Fast**: Fast web framework for Deno
- **Faster**: Even faster web framework
- **Opine**: Express-like framework for Deno
- **Magalo**: Lightweight web framework

Each benchmark file implements the same set of routes for fair comparison.

## 📝 API Routes

The following API routes are available for benchmarking:

- `GET /` - Home page with analytics demo
- `GET /user` - User endpoint
- `GET /user/comments` - User comments
- `GET /user/avatar` - User avatar
- `GET /user/lookup/email/:address` - Email lookup
- `GET /event/:id` - Event by ID
- `GET /event/:id/comments` - Event comments
- `POST /event/:id/comments` - Create event comment
- `POST /status` - Status endpoint
- `GET /very/deeply/nested/route/hello/there` - Deep route test
- `GET /user/lookup/username/:username` - Username lookup (returns JSON)

## 🔧 Development

### Running Tests

From the project root:
```bash
deno test --allow-read --allow-env --allow-write --allow-net
```

### Linting

From the project root:
```bash
npm run lint
```

## 📚 Learn More

- [Hono Documentation](https://hono.dev)
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Deno Documentation](https://docs.deno.com)

## 📄 License

This project is part of the Hono web framework and follows the same license.
