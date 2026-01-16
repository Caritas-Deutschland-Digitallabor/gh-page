# GitHub Pages Sample Project

A simple, clean, and modern sample project demonstrating how to create and deploy a static website using GitHub Pages.

## 🌐 Live Demo

Once deployed, your site will be available at: `https://[your-username].github.io/[repository-name]/`

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface with gradient hero section
- **Multi-page Navigation**: Includes home and about pages with navigation
- **Interactive Elements**: JavaScript-powered interactivity
- **Jekyll Compatible**: Includes `_config.yml` for Jekyll customization

## 📁 Project Structure

```
gh-page/
├── index.html          # Main landing page
├── about.html          # About page
├── styles.css          # Stylesheet with responsive design
├── script.js           # JavaScript for interactivity
├── _config.yml         # Jekyll configuration
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Enable GitHub Pages (Recommended)

1. **Fork or clone this repository**
2. **Go to repository Settings**
3. **Navigate to Pages section** (in the left sidebar)
4. **Under "Source", select:**
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. **Click Save**
6. **Wait a few minutes** for GitHub to build and deploy your site
7. **Visit your site** at `https://[your-username].github.io/[repository-name]/`

### Option 2: Local Development

You can view this site locally using any simple HTTP server:

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (with http-server):
```bash
npx http-server -p 8000
```

#### Using PHP:
```bash
php -S localhost:8000
```

Then open your browser and visit: `http://localhost:8000`

## 🎨 Customization

### Changing Colors

Edit `styles.css` to modify the color scheme:
- Hero gradient: `.hero` background
- Primary color: `#667eea`
- Secondary color: `#764ba2`
- Dark theme: `#24292e`

### Adding New Pages

1. Create a new HTML file (e.g., `contact.html`)
2. Copy the structure from `index.html` or `about.html`
3. Add a navigation link in all pages:
   ```html
   <li><a href="contact.html">Contact</a></li>
   ```

### Modifying Content

- **Homepage**: Edit `index.html` to change the hero text and features
- **About page**: Edit `about.html` to update project information
- **Styling**: Modify `styles.css` for design changes
- **Interactivity**: Update `script.js` for additional JavaScript functionality

## 📝 Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling with modern features (Grid, Flexbox, Gradients)
- **JavaScript**: Client-side interactivity
- **GitHub Pages**: Free static site hosting
- **Jekyll**: Optional static site generator (supported by GitHub Pages)

## 🔧 Advanced Configuration

### Custom Domain

To use a custom domain with GitHub Pages:

1. Create a file named `CNAME` in the root directory
2. Add your domain name (e.g., `www.example.com`)
3. Configure your DNS provider to point to GitHub Pages

### Jekyll Themes

This project includes a basic `_config.yml` file. You can:
- Choose from [GitHub Pages themes](https://pages.github.com/themes/)
- Use custom Jekyll layouts and includes
- Add front matter to your HTML files

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)

## 🙋 Support

If you have any questions or need help, please open an issue in this repository.

---

**Happy coding!** 🎉