# Hono Deno Benchmarks with Vercel Analytics

This directory contains benchmark implementations for Hono on Deno, now with Vercel Web Analytics support.

## Vercel Analytics Integration

Vercel Web Analytics has been configured for this Deno project.

### Configuration Files

- **deno.json**: Configures import maps for `@vercel/analytics` via esm.sh

### Usage

#### Option 1: HTML Page with Analytics (Recommended for Web Apps)

See `hono-with-analytics.ts` for a complete example that serves HTML with Vercel Analytics integrated.

Run the demo:
```bash
deno run --allow-net hono-with-analytics.ts
```

Then visit http://localhost:8000 in your browser to see analytics in action.

#### Option 2: Module Import (For Custom Integration)

You can import and use Vercel Analytics in your Deno projects:

```typescript
import { inject } from '@vercel/analytics';

// Inject analytics tracking
inject({ mode: 'production' });
```

### Files

- `hono.ts` - Original benchmark implementation (API only)
- `hono-with-analytics.ts` - Enhanced version with analytics-enabled web interface
- `deno.json` - Deno configuration with analytics import map
- Other files: Various framework benchmarks (fast, oak, opine, etc.)

### How It Works

1. The `deno.json` file maps `@vercel/analytics` to the ESM CDN (esm.sh)
2. The HTML page includes a module script that imports and injects analytics
3. Analytics tracks page views and web vitals automatically when users visit the page

### Deployment

When deploying to Vercel:
1. Ensure your project is connected to Vercel
2. Enable Web Analytics in your Vercel project dashboard
3. Deploy using `vercel` or push to your connected Git repository
4. Analytics will automatically start collecting data in production

### Note

Analytics only works with browser-based traffic. Pure API endpoints (like those in `hono.ts`) won't generate analytics data unless accessed through a web browser with JavaScript enabled.

For production use, change the mode to `'production'`:
```typescript
inject({ mode: 'production' });
```
