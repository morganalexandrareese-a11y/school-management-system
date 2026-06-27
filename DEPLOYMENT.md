# Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- MongoDB Atlas account (free tier available at https://mongodb.com/cloud/atlas)
- GitHub account with this repository

## Step-by-Step Deployment

### 1. Set Up MongoDB Atlas (Database)
- Go to https://mongodb.com/cloud/atlas
- Create a free account or sign in
- Create a new cluster
- Create a database user (username & password)
- Get your connection string (should look like: `mongodb+srv://username:password@cluster.mongodb.net/database-name`)
- Whitelist your IP address or allow all (0.0.0.0/0 for development)

### 2. Deploy to Vercel
- Go to https://vercel.com/dashboard
- Click "Add New..." → "Project"
- Select "Import Git Repository"
- Find and select `school-management-system`
- Click "Import"

### 3. Configure Environment Variables
In Vercel Project Settings:
- Go to Settings → Environment Variables
- Add the following variables:
  ```
  MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/school-db
  JWT_SECRET=your-secret-key-min-32-characters
  NODE_ENV=production
  CORS_ORIGIN=https://your-vercel-domain.vercel.app
  ```

### 4. Deploy
- Click "Deploy"
- Vercel will automatically build and deploy your app
- Wait for the deployment to complete
- Your app will be live at `https://school-management-system-[random].vercel.app`

## After Deployment

### Test Your API
```bash
# Get your Vercel deployment URL from the dashboard
curl https://your-app-name.vercel.app/api/health
```

### Set Up Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### Monitoring
- Check deployment logs in Vercel dashboard
- Monitor your MongoDB usage in MongoDB Atlas dashboard
- Set up alerts for API errors

## Troubleshooting

**Cold Start Issues:**
- First request may take 5-10 seconds (normal for serverless)
- Subsequent requests are faster

**Database Connection Errors:**
- Verify MongoDB URI in environment variables
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

**CORS Errors:**
- Update CORS_ORIGIN environment variable with your Vercel domain
- Check server.js CORS configuration

**Deployment Fails:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility (Vercel uses Node 18/20 by default)

## Manual Deployment with Vercel CLI

If you prefer command-line:
```bash
npm install -g vercel
vercel login
vercel --prod
```

Then add environment variables when prompted.
