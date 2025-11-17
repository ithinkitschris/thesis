# Thesis Documentation Platform

A simple, scalable documentation platform built with Next.js for tracking thesis progress, research findings, and notes.

## Features

- **Organized Content**: Categorized entries (research, findings, notes, references)
- **Tag-based Organization**: Cross-cutting themes and topics
- **Markdown Support**: Easy writing with full markdown formatting
- **Static Site Generation**: Fast loading and easy deployment
- **Responsive Design**: Works on desktop and mobile
- **File-based Content**: Simple content management through markdown files

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Adding Content

1. Create a new `.md` file in the appropriate category folder:
   - `content/research/` - Research methodology, literature reviews
   - `content/findings/` - Key discoveries and results
   - `content/notes/` - General observations and thoughts
   - `content/references/` - Citations and bibliography

2. Add frontmatter to the top of your file:
```markdown
---
title: "Your Entry Title"
date: "2024-01-15"
tags: ["tag1", "tag2", "tag3"]
excerpt: "Brief description of the entry content."
---

# Your content here...
```

3. Write your content in markdown format
4. Refresh the site to see your updates

### Deployment

#### GitHub Pages

This project is configured for deployment on GitHub Pages:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Configure base path (if needed):**
   - If your repository name is not the root domain (e.g., `username.github.io`), you need to set the base path
   - Open `next.config.mjs` and uncomment/modify the `basePath` line:
   ```javascript
   basePath: '/your-repo-name',
   trailingSlash: true,
   ```

3. **Push to GitHub:**
   - Push your code to the `main` branch
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at `https://username.github.io/repo-name/` (or `https://username.github.io/` if it's your root repository)

4. **Manual deployment:**
   - You can also trigger deployment manually via the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

#### Alternative: Vercel

This project can also be deployed on Vercel:

1. Push your code to a Git repository
2. Connect the repository to Vercel
3. Deploy automatically

## Project Structure

```
thesis/
├── content/              # Markdown content files
│   ├── research/         # Research-related entries
│   ├── findings/         # Key findings and discoveries
│   ├── notes/           # General notes and observations
│   └── references/      # Citations and resources
├── lib/
│   └── content.js       # Content parsing utilities
├── src/
│   └── app/             # Next.js app router pages
└── public/              # Static assets
```

## Customization

The platform is designed to be simple and scalable. You can:

- Add new categories by creating folders in `content/`
- Modify styling in `src/app/globals.css`
- Extend functionality by editing components in `src/app/`
- Add new metadata fields in the frontmatter

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
- [remark](https://remark.js.org/) - Markdown processing