import { Hono } from '../../src/index.ts'
import { RegExpRouter } from '../../src/router/reg-exp-router/index.ts'
import { html } from '../../src/helper/html/index.ts'

const app = new Hono({ router: new RegExpRouter() })

// Serve a demo page with Vercel Analytics integrated
app.get('/', (c) => {
  return c.html(html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hono with Vercel Analytics</title>
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            line-height: 1.6;
          }
          h1 { color: #333; }
          .info { background: #f0f0f0; padding: 1rem; border-radius: 4px; }
          code { background: #e0e0e0; padding: 0.2rem 0.4rem; border-radius: 3px; }
        </style>
      </head>
      <body>
        <h1>Hono + Vercel Analytics Demo</h1>
        <div class="info">
          <p>This page demonstrates Vercel Web Analytics integration with Hono on Deno.</p>
          <p>Analytics tracking is enabled via the inject script below.</p>
        </div>
        <h2>Available API Routes:</h2>
        <ul>
          <li><a href="/user">/user</a></li>
          <li><a href="/user/comments">/user/comments</a></li>
          <li><a href="/user/avatar">/user/avatar</a></li>
          <li><a href="/event/123">/event/:id</a></li>
          <li><a href="/user/lookup/username/john">/user/lookup/username/:username</a></li>
        </ul>
        
        <!-- Vercel Web Analytics -->
        <script type="module">
          // Import and inject Vercel Analytics
          import { inject } from 'https://esm.sh/@vercel/analytics@1.1.1';
          inject({ mode: 'development' });
        </script>
      </body>
    </html>
  `)
})

// API routes
app.get('/user', (c) => c.text('User'))
app.get('/user/comments', (c) => c.text('User Comments'))
app.get('/user/avatar', (c) => c.text('User Avatar'))
app.get('/user/lookup/email/:address', (c) => c.text('User Lookup Email Address'))
app.get('/event/:id', (c) => c.text('Event'))
app.get('/event/:id/comments', (c) => c.text('Event Comments'))
app.post('/event/:id/comments', (c) => c.text('POST Event Comments'))
app.post('/status', (c) => c.text('Status'))
app.get('/very/deeply/nested/route/hello/there', (c) => c.text('Very Deeply Nested Route'))
app.get('/user/lookup/username/:username', (c) => {
  return c.json({ message: `Hello ${c.req.param('username')}` })
})

Deno.serve(app.fetch, {
  port: 8000,
})
