# Deployment Guide for Render

## Prerequisites
- A GitHub account with your portfolio repository
- A Render account (free tier available)

## Steps to Deploy on Render

### 1. Push Your Code to GitHub
Make sure your portfolio code is pushed to a GitHub repository.

### 2. Create a Render Account
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Verify your email

### 3. Deploy Your Portfolio
1. Click "New +" in your Render dashboard
2. Select "Static Site"
3. Connect your GitHub repository
4. Configure the deployment:
   - **Name**: `your-portfolio-name` (e.g., `aditya-kadam-portfolio`)
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: Leave as default

### 4. Environment Variables (Optional)
If you have any environment variables, add them in the Environment section.

### 5. Deploy
Click "Create Static Site" and wait for the build to complete.

### 6. Custom Domain (Optional)
- Go to your site settings
- Add your custom domain
- Update DNS records as instructed

## Important Notes

- The `_redirects` file ensures client-side routing works properly
- The build process creates a `dist` folder with your optimized site
- Render will automatically redeploy when you push changes to your GitHub repository

## Troubleshooting

If you encounter issues:
1. Check the build logs in Render dashboard
2. Ensure all dependencies are in `package.json`
3. Verify the build command and publish directory are correct
4. Make sure your repository is public or you've connected your GitHub account properly

## Performance Tips

- Images are automatically optimized by Vite
- The build process minifies CSS and JavaScript
- Consider using a CDN for better global performance 