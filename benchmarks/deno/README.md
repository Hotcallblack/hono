# Hono Deno Benchmarks with Vercel Analytics & Speed Insights

This directory contains benchmark implementations for Hono on Deno, now with Vercel Web Analytics and Speed Insights support.

## Vercel Analytics Integration

Vercel Web Analytics has been configured for this Deno project.

## Vercel Speed Insights Integration

Vercel Speed Insights has been configured to track Core Web Vitals and performance metrics.

### Configuration Files

- **deno.json**: Configures import maps for `@vercel/analytics` and `@vercel/speed-insights` via esm.sh

### Usage

#### Option 1: HTML Page with Analytics (Recommended for Web Apps)

See `hono-with-analytics.ts` for a complete example that serves HTML with Vercel Analytics integrated.

Run the demo:
```bash
deno run --allow-net hono-with-analytics.ts
```

Then visit http://localhost:8000 in your browser to see analytics in action.

#### Option 2: HTML Page with Speed Insights (Performance Monitoring)

See `hono-with-speed-insights.ts` for a complete example that serves HTML with Vercel Speed Insights integrated.

Run the demo:
```bash
deno run --allow-net hono-with-speed-insights.ts
```

Then visit http://localhost:8000 in your browser to see Speed Insights tracking Core Web Vitals.

#### Option 3: Module Import (For Custom Integration)

You can import and use Vercel Analytics in your Deno projects:

```typescript
import { inject } from '@vercel/analytics';

// Inject analytics tracking
inject({ mode: 'production' });
```

You can also import Speed Insights:

```typescript
import { injectSpeedInsights } from '@vercel/speed-insights';

// Inject Speed Insights tracking
injectSpeedInsights({ 
  debug: true // Enable debug mode for development
});
```

### Files

- `hono.ts` - Original benchmark implementation (API only)
- `hono-with-analytics.ts` - Enhanced version with Vercel Analytics web interface
- `hono-with-speed-insights.ts` - Enhanced version with Vercel Speed Insights performance monitoring
- `deno.json` - Deno configuration with analytics and speed insights import maps
- Other files: Various framework benchmarks (fast, oak, opine, etc.)

### How It Works

1. The `deno.json` file maps `@vercel/analytics` and `@vercel/speed-insights` to the ESM CDN (esm.sh)
2. The HTML pages include module scripts that import and inject the respective tracking tools
3. **Analytics** tracks page views and user interactions automatically
4. **Speed Insights** monitors Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP) for performance analysis

### Deployment

When deploying to Vercel:
1. Ensure your project is connected to Vercel
2. Enable Web Analytics in your Vercel project dashboard
3. Enable Speed Insights in your Vercel project dashboard
4. Deploy using `vercel` or push to your connected Git repository
5. Both Analytics and Speed Insights will automatically start collecting data in production

### Note

Both Analytics and Speed Insights only work with browser-based traffic. Pure API endpoints (like those in `hono.ts`) won't generate data unless accessed through a web browser with JavaScript enabled.

For production use:
- **Analytics**: Change the mode to `'production'`:
```typescript
inject({ mode: 'production' });
```

- **Speed Insights**: Set debug to `false` or omit it for production:
```typescript
injectSpeedInsights(); // debug is false by default
```
