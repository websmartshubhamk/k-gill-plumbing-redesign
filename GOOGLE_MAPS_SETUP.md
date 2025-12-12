# Google Maps Setup for K Gill Plumbing Website

## Overview
The service areas component now supports real interactive Google Maps integration to display Hertfordshire locations. When a Google Maps API key is not available, it falls back to a static SVG map.

## Setup Instructions

### 1. Get a Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Maps JavaScript API**:
   - Navigate to "APIs & Services" → "Library"
   - Search for "Maps JavaScript API"
   - Click on it and press "Enable"

4. Create credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

### 2. Configure API Key Restrictions (Recommended)

For security, restrict your API key:

1. In the Credentials page, click on your API key
2. Under "Application restrictions":
   - Select "HTTP referrers (websites)"
   - Add your allowed referrers:
     ```
     https://your-domain.com/*
     https://www.your-domain.com/*
     http://localhost:3000/*  (for development)
     ```

3. Under "API restrictions":
   - Select "Restrict key"
   - Choose "Maps JavaScript API"

### 3. Add API Key to Your Project

1. Open `.env.local` in your project root
2. Add your API key:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key-here
   ```

### 4. Deploy to Vercel

When deploying to Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` with your API key

## Features

### Interactive Map Features:
- Real Google Maps with custom styling
- Interactive markers for each service location
- Click markers to see location details
- Selected location bounces and enlarges
- Map automatically pans to selected locations
- Info windows with location descriptions

### Responsive Design:
- Map height automatically matches the location list height
- Mobile-friendly with proper touch interactions
- Smooth transitions and animations

### Fallback Support:
- If Google Maps fails to load or no API key is provided
- Displays a styled SVG map representation
- All interactive features still work with the static map

## Customisation

### Map Styling
The map uses a subtle, professional style. To modify, edit the `styles` array in `InteractiveServiceMap.tsx`:

```javascript
styles: [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }]
  },
  // Add more style rules
]
```

### Markers
Custom SVG markers are used with brand colours:
- Blue (`#1e40af`) for selected locations
- Red (`#ef4444`) for unselected locations

### Service Locations
To add or modify locations, edit the `serviceLocations` array in `InteractiveServiceMap.tsx`:

```javascript
const serviceLocations: Location[] = [
  { 
    name: 'Hitchin', 
    coordinates: { lat: 51.9487, lng: -0.2806 }, 
    description: 'Our main base of operations' 
  },
  // Add more locations
]
```

## Troubleshooting

### Map Not Loading
1. Check browser console for errors
2. Verify API key is correctly set in `.env.local`
3. Ensure Maps JavaScript API is enabled in Google Cloud Console
4. Check API key restrictions match your domain

### Billing
Google Maps requires a billing account but provides $200 monthly free usage, which covers:
- ~28,000 map loads per month
- Perfect for most small-medium business websites

## Cost Optimisation
- The map only loads when users visit the homepage
- Consider lazy loading if needed
- Monitor usage in Google Cloud Console