# Hono Deno Benchmarks with Vercel Analytics & Speed Insights

This directory contains benchmark implementations for Hono on Deno, now with Vercel Web Analytics and Speed Insights support.

## Vercel Analytics & Speed Insights Integration

Vercel Web Analytics and Speed Insights have been configured for this Deno project.

### Configuration Files

- **deno.json**: Configures import maps for `@vercel/analytics` and `@vercel/speed-insights` via esm.sh

### Usage

#### Option 1: HTML Page with Analytics & Speed Insights (Recommended for Web Apps)

See `hono-with-analytics.ts` for a complete example that serves HTML with Vercel Analytics and Speed Insights integrated.

Run the demo:
```bash
deno run --allow-net hono-with-analytics.ts
```

Then visit http://localhost:8000 in your browser to see analytics and performance monitoring in action.

#### Option 2: Module Import (For Custom Integration)

You can import and use Vercel Analytics and Speed Insights in your Deno projects:

```typescript
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Inject analytics tracking
inject({ mode: 'production' });

// Inject speed insights
injectSpeedInsights();
```

### Files

- `hono.ts` - Original benchmark implementation (API only)
- `hono-with-analytics.ts` - Enhanced version with analytics and speed insights enabled web interface
- `deno.json` - Deno configuration with analytics and speed insights import maps
- Other files: Various framework benchmarks (fast, oak, opine, etc.)

### How It Works

1. The `deno.json` file maps `@vercel/analytics` and `@vercel/speed-insights` to the ESM CDN (esm.sh)
2. The HTML page includes module scripts that import and inject both analytics and speed insights
3. Analytics tracks page views and Speed Insights monitors Web Vitals (CLS, FID, LCP, FCP, TTFB, INP) automatically when users visit the page

### Deployment

When deploying to Vercel:
1. Ensure your project is connected to Vercel
2. Enable Web Analytics in your Vercel project dashboard
3. Enable Speed Insights in your Vercel project dashboard
4. Deploy using `vercel` or push to your connected Git repository
5. Both Analytics and Speed Insights will automatically start collecting data in production

### Note

Analytics and Speed Insights only work with browser-based traffic. Pure API endpoints (like those in `hono.ts`) won't generate data unless accessed through a web browser with JavaScript enabled.

For production use, change the analytics mode to `'production'`:
```typescript
inject({ mode: 'production' });
injectSpeedInsights(); // Speed Insights automatically detects the environment
```
