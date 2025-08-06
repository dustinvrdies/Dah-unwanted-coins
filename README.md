
# Dustin's Coin Salvage - Deployment Instructions

## Step 1: Push to GitHub
1. Extract this ZIP on your computer.
2. Go to GitHub and create a new private repository.
3. Upload all files to the repository via the GitHub web interface.

## Step 2: Deploy on Render
1. Go to [Render.com](https://render.com) and sign up or log in.
2. Click "New Web Service" and connect your GitHub repo.
3. For Build Command: `npm install`
4. For Start Command: `npm start`
5. Select the Free Plan and deploy.

## Step 3: Custom Domain Setup
1. After deployment, go to Render's "Custom Domains" tab in your service settings.
2. Add your custom .com domain (buy one via Namecheap, GoDaddy, etc).
3. Render will give you DNS Records (CNAME) to configure on your domain registrar.
4. After DNS propagation, Render will auto-issue an SSL certificate.

## Admin Login
- URL: `/admin-login`
- Username/Password: (Set in .env or directly in DB)

Enjoy your fully live Dustin's Coin Salvage site!

