# Hono Deno Benchmarks with Vercel Speed Insights

This directory contains Deno benchmark servers for the Hono web framework, now enhanced with Vercel Speed Insights integration.

## Vercel Speed Insights Integration

Vercel Speed Insights has been integrated into the Hono benchmark server to enable performance monitoring when deployed to Vercel.

### What Was Added

1. **package.json** - Created to manage npm dependencies
2. **@vercel/speed-insights** - Installed version 1.3.1
3. **Home Route** - Added a `/` route in `hono.ts` that serves an HTML page with Speed Insights tracking

### How It Works

The integration uses the generic Speed Insights approach suitable for vanilla JavaScript/HTML:

```javascript
// Initialize Speed Insights
window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };

// Load the Speed Insights script
<script defer src="/_vercel/speed-insights/script.js"></script>
```

When deployed to Vercel, this will automatically track Web Vitals metrics including:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

## Running the Server

```bash
# Using Deno directly
deno run --allow-net --allow-read hono.ts

# Using npm script
pnpm run dev
```

Then visit:
- `http://localhost:8000/` - Home page with Speed Insights (HTML view)
- `http://localhost:8000/user` - Benchmark route (text response)
- Other benchmark routes as listed on the home page

## Deployment to Vercel

To enable Speed Insights on Vercel:

1. Deploy this project to Vercel
2. Navigate to your project dashboard
3. Go to the Speed Insights tab
4. Click "Enable Speed Insights"
5. Redeploy your project

The Speed Insights script will then automatically start tracking performance metrics from your deployed application.

## Benchmark Routes

All original benchmark routes remain unchanged and functional:
- `/user`
- `/user/comments`
- `/user/avatar`
- `/user/lookup/email/:address`
- `/event/:id`
- `/event/:id/comments` (GET and POST)
- `/status` (POST)
- `/very/deeply/nested/route/hello/there`
- `/user/lookup/username/:username`
