# Quantitative Hedge Fund Rankings

A modern, interactive website displaying quantitative hedge fund rankings by Assets Under Management (AUM) and annual returns for China and United States.

## Features

- 📊 **Dual Rankings**: View funds ranked by AUM or Annual Returns
- 🌍 **Country Filtering**: Filter by United States, China, or view all countries
- 🔍 **Founder Information**: Click on any fund name to view detailed founder information including:
  - Founder name (English & Chinese)
  - Founder photo
  - Education background
  - Career history
- 📱 **Responsive Design**: Beautiful, modern UI that works on all devices
- 🎨 **Modern Styling**: Gradient design with smooth animations

## Data

The website includes data for:
- **18 US Quantitative Hedge Funds** including Renaissance Technologies, Two Sigma, Citadel, Bridgewater Associates, and more
- **15 Chinese Quantitative Hedge Funds** including 幻方量化 (High-Flyer), 明汯投资 (Minghong), 九坤投资 (Ubiquant), and other top Chinese quant funds

All data is based on publicly available information from 2024-2025.

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd .cursor-tutor
```

2. Start a local server:
```bash
# Using Python 3
python3 -m http.server 3000

# Or using Node.js (if you have http-server installed)
npx http-server -p 3000
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # Styling and responsive design
├── script.js      # Interactive functionality
├── data.js        # Hedge fund data (US & China)
└── README.md      # This file
```

## Technologies Used

- HTML5
- CSS3 (with modern features like gradients, animations, flexbox, grid)
- Vanilla JavaScript (no frameworks required)

## Features in Detail

### Ranking Tables
- **AUM Rankings**: Sorted by Assets Under Management in descending order
- **Returns Rankings**: Sorted by Annual Returns in descending order

### Founder Modal
Click on any fund name to open a detailed modal showing:
- Fund name (English & Chinese)
- Founder's name (English & Chinese)
- Founder's photo
- Education background
- Career history

### Statistics Summary
Real-time calculation of:
- Total number of funds (based on current filter)
- Average AUM
- Average Returns

## Data Sources

US fund data is based on publicly available information from financial reports and industry publications.

Chinese fund data is based on:
- Chinese financial media reports
- Fund ranking websites (私募排排网, etc.)
- Public disclosures from fund management companies
- Social media and industry discussions

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to submit issues or pull requests if you have updates to the data or suggestions for improvements.
