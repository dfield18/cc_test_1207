# Vercel Deployment Guide

This guide will help you deploy the Credit Card Recommendation Chatbot to Vercel and fix common issues.

## Required Environment Variables

You **must** set the following environment variables in Vercel for the chatbot to work:

### 1. OPENAI_API_KEY (Required)

This is the most critical variable. Without it, the chatbot will not work.

**How to set it in Vercel:**
1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Click **Add New**
4. Name: `OPENAI_API_KEY`
5. Value: Your OpenAI API key (starts with `sk-...`)
6. Select all environments (Production, Preview, Development)
7. Click **Save**

**Where to get your OpenAI API key:**
- Go to https://platform.openai.com/api-keys
- Sign in or create an account
- Click "Create new secret key"
- Copy the key (you'll only see it once!)

### 2. Optional Environment Variables

These have defaults but can be customized:

- `GOOGLE_SHEET_ID` - Default: `19ioGC8Oj8ej7QP_MG87FyMuAC3AdgGwRrEuKk5wZHZI`
- `CARD_NAME_COLUMN` - Default: `credit_card_name`
- `CARD_URL_COLUMN` - Default: `url_application`
- `CHAT_MODEL` - Default: `gpt-3.5-turbo`
- `TOP_N_CARDS` - Default: `8`

## Common Issues and Solutions

### Issue 1: "OpenAI API key not configured"

**Problem:** The `OPENAI_API_KEY` environment variable is not set in Vercel.

**Solution:**
1. Follow the steps above to set `OPENAI_API_KEY` in Vercel
2. After setting it, **redeploy** your application:
   - Go to **Deployments** tab
   - Click the three dots (⋯) on the latest deployment
   - Click **Redeploy**

### Issue 2: "Request timed out" or chatbot doesn't respond

**Problem:** On the first request, the app needs to generate embeddings for all credit cards, which can take 30-60 seconds. Vercel's Hobby plan has a 10-second timeout.

**Solutions:**

**Option A: Wait and retry (Quick fix)**
- The first request will timeout, but it starts generating embeddings
- Wait 1-2 minutes, then try again
- Subsequent requests will be faster

**Option B: Pre-generate embeddings (Recommended)**
1. Run the embedding generation script locally:
   ```bash
   npm run generate-embeddings
   ```
2. Commit the `data/embeddings.json` file to your repository
3. Push to GitHub - Vercel will use the pre-generated embeddings

**Option C: Upgrade to Vercel Pro**
- Pro plan has 60-second timeout
- Better for production workloads

### Issue 3: Chatbot works locally but not on Vercel

**Checklist:**
1. ✅ Is `OPENAI_API_KEY` set in Vercel environment variables?
2. ✅ Did you redeploy after setting environment variables?
3. ✅ Check Vercel function logs for errors:
   - Go to **Deployments** → Click on a deployment → **Functions** tab
   - Look for error messages in the logs
4. ✅ Check browser console for errors (F12 → Console tab)

### Issue 4: "Failed to fetch data from Google Sheets"

**Problem:** The Google Sheet might not be public or the sheet ID is incorrect.

**Solution:**
1. Ensure your Google Sheet is set to "Anyone with the link can view"
2. Verify the `GOOGLE_SHEET_ID` environment variable matches your sheet ID
3. Test the sheet URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv`

## Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push
   ```

2. **Connect to Vercel** (if not already connected)
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Set Environment Variables**
   - In project settings, add `OPENAI_API_KEY`
   - Add any other custom variables if needed

4. **Deploy**
   - Vercel will automatically deploy on push
   - Or manually trigger from the dashboard

5. **Verify Deployment**
   - Visit your Vercel URL
   - Try asking a question
   - Check function logs if there are issues

## Testing After Deployment

1. Open your Vercel deployment URL
2. Ask a simple question like: "What's the best card for travel?"
3. Check the browser console (F12) for any errors
4. Check Vercel function logs if the request fails

## Monitoring

- **Function Logs:** Vercel Dashboard → Deployments → Functions tab
- **Real-time Logs:** Use `vercel logs` CLI command
- **Error Tracking:** Check the browser console for client-side errors

## Need Help?

If you're still experiencing issues:
1. Check Vercel function logs for detailed error messages
2. Verify all environment variables are set correctly
3. Ensure you've redeployed after setting environment variables
4. Check that your OpenAI API key is valid and has credits

