# Eclipse OS

A desktop operating system simulator that runs entirely in your browser.

[Try it now](https://eclipsev6.github.io/) • [Issues](https://github.com/EclipseV6/EclipseV6.github.io/issues) • [Discuss](https://github.com/EclipseV6/EclipseV6.github.io/discussions)

---

## Features

- Full window management (drag, resize, minimize, maximize)
- 8+ built-in applications (Browser, Files, Settings, Games, Calculator, Text Editor)
- 10+ customizable themes
- Persistent local storage
- 100% vanilla JavaScript, no dependencies
- Works offline with service worker
- Responsive design (desktop, tablet, mobile)

---

## Quick Start

Open https://eclipsev6.github.io/ in any modern browser. No installation needed.

**Requirements:**
- Chrome 60+, Firefox 55+, Safari 10.1+, or Opera 47+
- ~5MB localStorage space

---

## Usage

- **Open apps:** Double-click desktop icons or use Start Menu
- **Move windows:** Drag title bar
- **Resize:** Drag corners or edges
- **Minimize/Maximize:** Click - or □ buttons
- **Context menu:** Right-click desktop

---

## Built-in Apps

- Browser: Full-featured web browser with proxy support
- Files: Navigate and manage file structure
- Settings: Customize themes and system preferences
- Games Hub: Browse and play games
- Calculator: Full-featured calculator
- Text Editor: Write and edit notes
- App Store: Install additional applications
- Movies: Streaming content

---

## Customization

**Change theme:**
```javascript
settings.theme = 'Neon'; // Dark, Sunset, Lavender, Cyber, etc.
```

**Adjust window opacity:**
```javascript
settings.windowOpacity = 0.95; // 0.0 - 1.0
```

**Custom background:**
```css
--bg-img: url('https://your-image.png');
```

---

## Tech Stack

- HTML5, CSS3, JavaScript ES6+
- LocalStorage for persistence
- Service Workers for offline support

---

## Contributing

1. Fork the repo
2. Create a feature branch
3. Make changes and test in multiple browsers
4. Submit a Pull Request

---

## License

MIT License

---

**Built with vanilla web technologies.**

For more info, visit: https://eclipsev6.github.io/
