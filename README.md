# Xi Peng - Personal Academic Website

This repository contains the source code for Xi Peng's personal academic website. The website showcases Xi's academic profile, research interests, and publications in the fields of VR/AR, perceptual computer graphics, computational imaging, and machine learning.

## Features

- Responsive design that works well on desktop and mobile devices
- Modern, clean UI with subtle animations
- Optimized for performance and accessibility
- SEO-friendly structure
- Publication listing with visual thumbnails and links to papers

## Technology Stack

- HTML5
- CSS3 (with modern features like CSS variables, flexbox)
- Vanilla JavaScript (no frameworks)

## Project Structure

```
├── index.html              # Main HTML file
├── stylesheet.css          # CSS styles
├── script.js               # JavaScript functionality
├── images/                 # Image assets
│   ├── Xi Peng.jpg         # Profile photo
│   ├── Icon.jpg            # Favicon
│   └── ...                 # Publication images
└── data/                   # Publication PDFs and other data files
    └── papers/             # PDF files of publications
```

## Getting Started

### Local Development

To run this website locally:

1. Clone this repository:
   ```
   git clone https://github.com/SEEXPENG/SEEXPENG.github.io.git
   cd SEEXPENG.github.io
   ```

2. Open `index.html` in your browser:
   - You can use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code
   - Or simply open the file directly in your browser

### Deployment

This website is designed to be hosted on GitHub Pages:

1. Push your changes to the main branch of your GitHub repository
2. GitHub Pages will automatically build and deploy your site
3. Your site will be available at `https://username.github.io`

## Customization

### Adding a New Publication

To add a new publication:

1. Add the publication image to the `images/` directory
2. Add the PDF (if available) to the `data/papers/` directory
3. Add a new publication entry to `index.html` following the existing pattern:

```html
<div class="publication-item">
  <div class="publication-image">
    <img src="images/your-publication-image.jpg" alt="Description of research" width="240" height="160">
  </div>
  <div class="publication-info">
    <papertitle>Your Publication Title</papertitle>
    <br>
    <span class="author-highlight">Xi Peng</span>, Co-author One, Co-author Two
    <br>
    <span class="venue-badge">VENUE</span> <span class="year-badge">YEAR</span>
    <br>
    <div class="publication-links">
      <a href="path/to/paper.pdf">Paper</a>
      <a href="path/to/project/page">Project Page</a>
    </div>
  </div>
</div>
```

### Updating Personal Information

Personal information can be updated in the `index.html` file. Look for the profile section marked with `id="about"`.

## Performance Optimizations

This website includes several performance optimizations:

- Resource preloading for critical assets
- Deferred JavaScript loading
- Debounced scroll event handling
- Image dimension specifications
- Optimized text rendering
- Lazy resource cleanup

## Accessibility Features

Accessibility features include:

- Skip to content link
- ARIA labels
- Keyboard navigation support
- Focus indicators
- Semantic HTML structure
- Sufficient color contrast

## Browser Compatibility

The website is compatible with modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is available for personal use. The design and code structure may be used as a template with proper attribution.

## Acknowledgments

- Original template inspiration from [Jon Barron](https://jonbarron.info/)
- Font families: Inter and Playfair Display from Google Fonts
