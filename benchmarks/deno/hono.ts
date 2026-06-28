import { Hono } from '../../src/index.ts'
import { RegExpRouter } from '../../src/router/reg-exp-router/index.ts'

const app = new Hono({ router: new RegExpRouter() })

// Home route with Vercel Speed Insights
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hono Deno Benchmark - Speed Insights Demo</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.6;
    }
    h1 { color: #E36002; }
    .routes {
      background: #f5f5f5;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 2rem;
    }
    .routes a {
      display: block;
      color: #0070f3;
      text-decoration: none;
      padding: 0.5rem 0;
    }
    .routes a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>🔥 Hono Deno Benchmark Server</h1>
  <p>This server is running with Vercel Speed Insights enabled.</p>
  
  <div class="routes">
    <h2>Available Routes:</h2>
    <a href="/user">/user</a>
    <a href="/user/comments">/user/comments</a>
    <a href="/user/avatar">/user/avatar</a>
    <a href="/user/lookup/email/test@example.com">/user/lookup/email/:address</a>
    <a href="/event/123">/event/:id</a>
    <a href="/event/123/comments">/event/:id/comments</a>
    <a href="/very/deeply/nested/route/hello/there">/very/deeply/nested/route/hello/there</a>
    <a href="/user/lookup/username/johndoe">/user/lookup/username/:username</a>
  </div>
  
  <script>
    window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
  </script>
  <script defer src="/_vercel/speed-insights/script.js"></script>
</body>
</html>
  `)
})

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
