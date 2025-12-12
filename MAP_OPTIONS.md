# Interactive Map Options for K Gill Plumbing

## Current Implementation: Google Maps (Default)

The website now includes a fully interactive Google Maps implementation with the following features:

### Features:
- **Real interactive Google Maps** showing actual Hertfordshire locations
- **Custom styled map** with subtle colours matching the site design
- **Interactive markers** that respond to clicks and hover
- **Auto-panning** to selected locations with smooth animations
- **Bouncing animation** on selected markers
- **Info windows** showing location details
- **Dynamic height matching** - map height automatically adjusts to match the location list
- **Fallback support** - if Google Maps fails to load, shows a styled SVG map

### Setup Required:
1. Obtain a Google Maps API key (see GOOGLE_MAPS_SETUP.md)
2. Add to `.env.local`: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-key`
3. Deploy with environment variable set in Vercel

## Alternative: Leaflet/OpenStreetMap (No API Key Required)

If you prefer not to use Google Maps, there's also a Leaflet implementation available:

### To Use Leaflet Instead:

1. Install dependencies:
```bash
npm install leaflet react-leaflet @types/leaflet
```

2. Add Leaflet CSS to `app/layout.tsx`:
```tsx
import 'leaflet/dist/leaflet.css'
```

3. In `app/page.tsx`, replace the import:
```tsx
// Replace this:
import InteractiveServiceMap from '@/components/sections/InteractiveServiceMap'

// With this:
import InteractiveServiceMapLeaflet from '@/components/sections/InteractiveServiceMapLeaflet'
```

### Leaflet Benefits:
- No API key required
- Completely free (uses OpenStreetMap)
- No usage limits
- Open source

### Google Maps Benefits:
- Better satellite imagery
- More detailed map data
- Street View integration possible
- More familiar to users
- Better performance

## Recommendation

Use **Google Maps** for the best user experience. The free tier ($200/month credit) is more than sufficient for most business websites. Only switch to Leaflet if:
- You cannot obtain a Google Maps API key
- You have privacy concerns about Google
- You expect extremely high traffic (>28,000 map loads/month)

## Current Status

The website is currently configured to use **Google Maps with automatic fallback** to a static SVG map if no API key is provided. This ensures the site works immediately while you set up the Google Maps integration.