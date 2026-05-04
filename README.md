# Chaotic Daily Oracle

A viral-style daily tarot/oracle card generator website designed for high traffic, SEO, and ad monetization.

## Features

- Daily oracle card pulls with 50+ unique chaotic cards
- Mobile-first responsive design
- SEO optimized with meta tags
- Ad placeholders ready for Google AdSense
- Google Analytics integration
- Fast loading vanilla HTML/CSS/JS

## Files

- `index.html` - Homepage with card generator
- `blog.html` - Blog template
- `about.html` - About page
- `styles.css` - Stylesheet
- `script.js` - JavaScript for card functionality

## Deployment Instructions

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your Git repository (push this code to GitHub first) or drag & drop the folder
4. Vercel will auto-detect it as a static site
5. Deploy!

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Sites" > "Deploy manually"
3. Drag & drop the entire project folder
4. Netlify will deploy it instantly

## Setup Instructions

1. Replace `GA_TRACKING_ID` in HTML files with your actual Google Analytics tracking ID
2. Replace ad placeholder comments with your Google AdSense code
3. Customize the oracle cards array in `script.js` if desired
4. Update copyright year if needed

## Adding More Cards

To add more oracle cards, edit the `oracleCards` array in `script.js`. Each card object should have:
- `title`: Card name
- `message`: Main message
- `vibe`: Today's vibe description
- `avoid`: What to avoid
- `doInstead`: What to do instead

## Monetization

- AdSense placeholders are marked in the code
- Place banner ads above/below card, in blog content, and sticky footer
- Consider affiliate links for related products

## SEO Tips

- Update meta descriptions for each page
- Add more structured content to blog posts
- Submit sitemap to Google Search Console
- Use descriptive alt text for any future images