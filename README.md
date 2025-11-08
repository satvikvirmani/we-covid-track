# Covid Track

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" alt="Version" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
  <img src="https://img.shields.io/badge/Gatsby-663399?logo=gatsby&logoColor=white" alt="Gatsby" />
  <img src="https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

> **A comprehensive COVID-19 tracking website** providing real-time pandemic statistics, interactive visualizations, and curated news updates. Built with Gatsby for blazing-fast performance and beautiful dark mode support.

### [Live Demo](https://wecovidtrack.netlify.app)

---

## Preview

![Covid Track Preview](https://res.cloudinary.com/wecloud/image/upload/v1621147239/we-covid-track/logo_kae2ot.webp)

---

## Features

### **Real-Time Statistics**
- **Global Overview**: Worldwide COVID-19 cases, recoveries, active cases, and deaths
- **Country-Specific Data**: Detailed statistics for 249+ countries with search functionality
- **Today's Updates**: Daily new cases, recoveries, and deaths highlighted
- **Animated Trend Graphs**: Beautiful SVG graphs showing data trends

### **Interactive Map**
- **Choropleth Visualization**: Color-coded countries based on case counts
- **Click-to-Explore**: Detailed popups with country flags and statistics
- **Mapbox Integration**: Smooth, responsive map interactions
- **9-Level Color Coding**: From 0 cases to 100M+ cases

### **News Aggregation**
- **COVID-Focused**: Automatically filters health news for pandemic-related content
- **Indian Health News**: Top headlines from India with international relevance
- **Smart Filtering**: Keyword-based filtering for relevance (covid, vaccine, coronavirus, etc.)
- **Source Attribution**: Clear source and publication date for each article

### **User Experience**
- **Dark Mode**: Eye-friendly dark theme with persistent preference
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Fast Loading**: Gatsby static generation and lazy loading
- **Smooth Animations**: Framer Motion for delightful interactions
- **PWA Support**: Install as a mobile or desktop app

---

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/SatvikVirmani/we-covid-track.git

# Navigate to project directory
cd we-covid-track

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
# or
gatsby develop

# Visit http://localhost:8000
```

### Production Build

```bash
# Build for production
npm run build

# Serve production build locally
npm run serve
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Gatsby** | Static site generation and React framework |
| **React** | UI component library |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animation library |
| **Mapbox GL JS** | Interactive mapping |
| **Axios** | HTTP client for API requests |
| **Font Awesome** | Icon library |
| **SASS** | CSS preprocessor |
| **PostCSS** | CSS transformation |

---

## API Sources

### Primary Data Sources

1. **Disease.sh COVID-19 API**
   - Global statistics
   - Country-specific data
   - Historical trends
   - Documentation: [disease.sh](https://disease.sh)

2. **Vaccovid RapidAPI**
   - Worldwide aggregated data
   - Vaccine information
   - Treatment tracking

3. **NewsAPI via Saurav Tech**
   - Health news headlines
   - Category: Health (India)
   - Auto-filtered for COVID relevance

---

## Project Structure

```
we-covid-track/
├── src/
│   ├── components/
│   │   ├── Article.jsx          # News article card
│   │   ├── Countries.js         # Country data (ISO codes)
│   │   ├── CountryData.jsx      # Country statistics display
│   │   ├── CountryInput.jsx     # Country search autocomplete
│   │   ├── Data.jsx             # Global + Country container
│   │   ├── DataColumn.jsx       # Reusable stat column
│   │   ├── Footer.jsx           # Footer component
│   │   ├── GlobalData.jsx       # Global statistics display
│   │   ├── Map.jsx              # Mapbox interactive map
│   │   ├── MiniGraph.jsx        # SVG graph components
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── News.jsx             # News aggregator
│   │   ├── ThemeToggle.jsx      # Dark/light mode toggle
│   │   └── seo.js               # SEO meta tags
│   ├── pages/
│   │   ├── index.js             # Homepage
│   │   ├── map.js               # Map page
│   │   ├── developer.js         # About developer
│   │   └── 404.js               # 404 error page
│   └── styles/
│       ├── global.css           # Global styles + Tailwind
│       └── map.css              # Mapbox styles
├── gatsby-config.js             # Gatsby configuration
├── gatsby-browser.js            # Browser APIs
├── tailwind.config.js           # Tailwind configuration
└── package.json                 # Dependencies and scripts
```

---

## Customization

### Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  gray: {
    700: "#30303F",  // Background dark
    800: "#232332",  // Card dark
    900: "#161625"   // Base dark
  }
}
```

### Mapbox Styling

Replace the Mapbox token in `src/components/Map.jsx`:

```javascript
mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
```

### Default Country

Change the default country in `CountryData.jsx`:

```javascript
componentDidMount() {
  this.fetchCountryData('usa', 'United States')
}
```

---

## Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `gatsby build`
4. Publish directory: `public`

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "deploy": "gatsby build && gh-pages -d public"
npm run deploy
```

---

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Optimizations**:
  - Static site generation
  - Code splitting
  - CSS purging
  - Image lazy loading
  - Asset minification

---

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Ideas

- [ ] Add more data visualizations (charts, graphs)
- [ ] Implement historical data comparison
- [ ] Add vaccination tracking
- [ ] Multi-language support
- [ ] State/province level data
- [ ] Share functionality for social media
- [ ] Offline mode with service workers

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Author

**Satvik Virmani**

- Website: [satvikvirmani.github.io](https://satvikvirmani.github.io)
- Twitter: [@SatvikVirmani](https://twitter.com/SatvikVirmani)
- GitHub: [@SatvikVirmani](https://github.com/SatvikVirmani)
- Medium: [satvikvirmani.medium.com](https://satvikvirmani.medium.com/)
- Email: virmanisatvik01@gmail.com

> *"Created with ❤️ by a 17-year-old high school student passionate about using technology to inform and help during the pandemic."*

---

## Acknowledgments

- [Disease.sh](https://disease.sh) for comprehensive COVID-19 data
- [NewsAPI](https://newsapi.org) for news aggregation
- [Mapbox](https://mapbox.com) for mapping services
- [Gatsby](https://gatsbyjs.com) for the amazing framework
- All contributors and supporters of this project

---

## Show Your Support

If this project helped you, please give it a ⭐️!

---

<p align="center">Made with ❤️ during the COVID-19 pandemic to help people stay informed</p>
