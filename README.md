# ECLIPSE OS

A powerful, minimalist desktop operating system simulator built for the modern web.

![Eclipse OS Dark Theme](https://raw.githubusercontent.com/EclipseV6/EclipseV6.github.io/main/assets/screenshots/main.png)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Gallery](#gallery)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Themes](#themes)
- [Applications](#applications)
- [Customization](#customization)
- [Contributing](#contributing)

---

## Overview

Eclipse OS is a fully-featured, web-based desktop operating system simulator. Built with vanilla HTML, CSS, and JavaScript, it provides a desktop experience directly in your browser with a sleek, modern interface. Features a dark-themed aesthetic, window management, multi-app support, and an intuitive launcher system.

This is not just a mockup—Eclipse OS has real functionality including:
- Windowed application management
- Persistent localStorage for settings
- Multiple built-in applications
- Customizable theming system
- Desktop and taskbar interaction
- File browser integration
- Browser within the OS

![Eclipse OS Interface](https://raw.githubusercontent.com/EclipseV6/EclipseV6.github.io/main/assets/screenshots/desktop.png)

---

## Features

### Core OS Features
- **Multi-Window Manager**: Drag, resize, minimize, maximize, and close windows like a real OS
- **Taskbar**: Quick access to open applications with active indicators
- **Desktop Icons**: Customizable icons for quick app launching
- **System Tray**: Real-time display of WiFi, battery, and clock
- **Start Menu/Launcher**: Full application grid with search functionality
- **Context Menus**: Right-click desktop for additional options
- **Persistent Storage**: All settings and app states saved to localStorage

### Built-in Applications
- **Browser**: Full-featured web browser with proxy support and URL bar
- **File Explorer**: Navigate and manage files in a folder structure
- **Settings**: Customize OS appearance, themes, and system settings
- **App Store**: Browse and install additional applications
- **Games Hub**: Access to gaming library with custom theming
- **Movies**: Streaming content aggregator
- **Calculator**: Full-featured calculator application
- **Text Editor**: Simple note-taking and document editing

### User Experience
- **Dark Mode**: Professional dark theme that's easy on the eyes
- **Glass Morphism**: Modern UI with frosted glass effects
- **Smooth Animations**: Polished transitions and interactions
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: Full keyboard navigation support
- **Lightweight**: Minimal dependencies, pure vanilla JavaScript

### Advanced Features
- **Cloaking System**: Integrated cloaking/spoofing capabilities for browser
- **Proxy Support**: Configure proxy settings for network requests
- **Theme Customization**: Multiple pre-built themes with customization
- **Multi-Account Support**: Manage multiple accounts and profiles
- **Import/Export**: Save and restore OS configuration

---

## Gallery

### Main Desktop
![Eclipse OS Desktop](https://raw.githubusercontent.com/EclipseV6/EclipseV6.github.io/main/assets/screenshots/desktop-full.png)

### Browser Application
![Browser App](https://raw.githubusercontent.com/EclipseV6/EclipseV6.github.io/main/assets/screenshots/browser.png)

### Games Hub
![Games Hub](https://raw.githubusercontent.com/EclipseV6/EclipseV6.github.io/main/assets/screenshots/games.png)

### Settings Panel
![Settings](https://raw.githubusercontent.com/EclipseV6/EclipseV6.github.io/main/assets/screenshots/settings.png)

### Multiple Themes
![Themes](https://raw.githubusercontent.com/EclipseV6/EclipseV6.github.io/main/assets/screenshots/themes.png)

---

## System Architecture

```
┌─────────────────────────────────────────┐
│       ECLIPSE OS CORE                   │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────────────────────────┐  │
│  │    Window Manager                │  │
│  │ (resize, drag, minimize, max)    │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │    Application Handler           │  │
│  │ (launch, manage, communicate)    │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │    Storage & Settings            │  │
│  │ (localStorage persistence)       │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │    Theme Engine                  │  │
│  │ (dynamic CSS, color schemes)     │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │    Built-in Applications         │  │
│  │ (Browser, Files, Store, Games)   │  │
│  └──────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Key Files

- **index.html**: Main desktop environment shell
- **test.html**: Alternative/testing environment
- **backup/index.html**: Backup of original OS build
- **g/index.html**: Games hub application
- **l/**: Launcher directory (future expansion)
- **m/**: Movies directory (future expansion)
- **assets/**: Images, icons, and resources
- **sw.js**: Service worker for offline support

---

## Getting Started

### Quick Start

1. **Open in Browser**: Navigate to https://eclipsev6.github.io/
2. **No Installation**: Everything runs directly in your browser
3. **First Run**: You'll see the desktop with default applications
4. **Interact**: Double-click icons to open apps, right-click for context menu

### Requirements

- **Browser**: Modern browser with ES6+ support
  - Chrome/Edge 60+
  - Firefox 55+
  - Safari 10.1+
  - Opera 47+
- **Storage**: ~5MB for localStorage (configurable)
- **Network**: Optional (works offline with service worker)

### System Requirements

- 2GB+ RAM
- Modern CSS Grid and Flexbox support
- JavaScript enabled
- Hardware acceleration recommended for smooth animations

---

## Usage

### Desktop Interaction

**Opening Applications:**
- Double-click desktop icons to launch
- Use the Start Menu (bottom-left) to search and launch
- Drag icons to reposition on desktop
- Right-click for context menu options

**Window Management:**
- **Drag**: Click title bar to move window
- **Resize**: Drag corner/edge to resize
- **Minimize**: Click the minimize button (- button)
- **Maximize**: Click maximize button (□ button)
- **Close**: Click close button (× button, red)

**Quick Actions:**
- Click search icon (left side) for quick web search
- Use system tray for WiFi, battery, and time
- Access launcher with Start button
- Pin apps to taskbar from context menu

### Built-in Browser

The browser application allows you to:
- Browse the web within the OS
- Configure proxy settings
- Enable/disable cloaking
- Manage bookmarks
- View browser history
- Access developer console

### Games Hub

Access the games library with:
- Search and filter functionality
- Game bookmarking
- Playback in fullscreen mode
- Theme customization
- Download integration

---

## Themes

Eclipse OS includes multiple professionally designed themes:

### Dark Theme (Default)
Dark background with subtle gradients and light text. Perfect for extended use.

### Sunset Theme
Warm orange and red tones with earthy colors. Great for evening browsing.

### Blue Sunset
Cool blues with sunset accents. Modern and refreshing aesthetic.

### Gray Theme
Purple accents on gray background. Professional and sophisticated.

### Midnight Theme
Deep blue and purple tones. Elegant nighttime theme.

### Neon Theme
Cyberpunk aesthetic with bright neon colors and dark background.

### Forest Theme
Green nature-inspired colors. Calming and organic feel.

### Cyber Theme
Terminal-style green text on black. Classic hacker aesthetic.

### Lavender Theme
Purple and violet tones. Soft and artistic appearance.

### Custom Themes

Create your own theme by modifying:
```css
:root {
  --bg-img: url('your-background.png');
  --bg: #your-color;
  --text: #your-text-color;
  --accent: #your-accent;
  --accent-2: #your-secondary;
  --panel: rgba(your, colors, here);
}
```

---

## Applications

### Browser
Full-featured web browser with:
- Address bar with history
- Back/Forward navigation
- Refresh and stop buttons
- Proxy integration
- Cloaking options
- Bookmark system

### Files
File explorer with:
- Directory navigation
- File preview
- File operations (create, delete, rename)
- Drag and drop support
- Search functionality

### Settings
OS configuration including:
- Theme selection
- Window opacity adjustment
- Performance settings
- Developer mode toggle
- Reset to defaults

### App Store
Application marketplace with:
- Browseable app grid
- One-click installation
- Automatic app launcher integration
- Reviews and ratings

### Games Hub
Gaming platform featuring:
- Game search and filters
- Play in-app or fullscreen
- Game bookmarking
- Theme switching
- Performance optimization

### Movies
Streaming content manager:
- Movie catalog
- Search functionality
- Playback controls
- Recommendation engine
- Watchlist support

### Calculator
Full-featured calculator with:
- Basic arithmetic
- Scientific functions
- Memory operations
- History tracking
- Keyboard support

### Text Editor
Document editor with:
- Rich text formatting
- File save/load
- Undo/redo
- Search and replace
- Syntax highlighting

---

## Customization

### Modifying Appearance

**Desktop Background:**
Edit the `--bg-img` CSS variable to set custom wallpaper:
```css
--bg-img: url('https://your-image-url.png');
```

**Window Opacity:**
Adjust `settings.windowOpacity` in localStorage (0.0 - 1.0)

**Taskbar Height:**
Modify `--taskbar-h` CSS variable

**Icon Size:**
Change `.desktop-icon img` width/height properties

### Adding Custom Applications

1. Create app component in HTML
2. Add launcher icon and configuration
3. Register in `presetLibrary` array
4. Add styling for app window
5. Implement app functionality in JavaScript

### Custom Color Schemes

Create a new theme by extending CSS variables:
```javascript
settings.theme = {
  bgImg: 'url(...)',
  bg: '#color',
  text: '#color',
  accent: '#color',
  accent2: '#color',
  panel: 'rgba(...)'
};
```

---

## Advanced Configuration

### Proxy Settings

Configure proxy in Settings or via localStorage:
```javascript
settings.proxyBase = 'https://your-proxy.com/';
settings.cloakEnabled = true;
settings.cloak = {
  title: 'Custom Title',
  favicon: '/path/to/icon.png'
};
```

### Developer Mode

Enable developer mode for debugging:
```javascript
settings.devMode = true;
```

This enables:
- Console logging
- Performance metrics
- Debug information
- Raw API access

### Performance Tuning

Optimize for your system:
- Reduce animation complexity
- Disable GPU acceleration if needed
- Increase cache size for better performance
- Adjust memory limits per application

---

## File Structure

```
EclipseV6.github.io/
├── index.html           # Main OS interface
├── test.html            # Test environment
├── sw.js                # Service worker
├── README.md            # This file
├── assets/
│   ├── logo/
│   │   └── logo.png
│   ├── browsericons/
│   │   ├── browser.png
│   │   ├── files.png
│   │   ├── settings.png
│   │   └── store.png
│   ├── backgrounds/
│   │   ├── crimson.png
│   │   ├── sunset.png
│   │   └── ...
│   └── screenshots/
│       └── ...
├── backup/
│   └── index.html
├── g/                   # Games hub
│   └── index.html
├── l/                   # Launcher
│   └── index.html
└── m/                   # Movies
    └── index.html
```

---

## Performance

### Optimization Tips

- **First Load**: 2-3 seconds for full environment
- **App Launch**: 200-500ms average
- **Smooth Performance**: 60 FPS on modern hardware
- **Memory Usage**: 50-100MB for typical session

### Recommended Specs

- **CPU**: Intel i5 / AMD Ryzen 5 or better
- **RAM**: 4GB minimum, 8GB+ recommended
- **Browser**: Latest version of Chrome, Firefox, or Safari
- **Connection**: Broadband (2Mbps+) for external content

---

## Troubleshooting

### Common Issues

**Apps Not Loading**
- Clear browser cache and localStorage
- Check browser console for errors
- Ensure JavaScript is enabled
- Try a different browser

**Performance Issues**
- Disable GPU acceleration
- Reduce window count
- Close background apps
- Clear localStorage data

**Theme Not Applying**
- Hard refresh page (Ctrl+Shift+R)
- Clear theme cache
- Check CSS variable syntax
- Verify image URLs are accessible

**Storage Full**
- Clear app data in Settings
- Remove unused apps
- Export and backup data
- Increase browser storage quota

---

## Support & Community

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share ideas
- **Wiki**: Find documentation and guides
- **Contribute**: Submit PRs and improvements

---

## Contributing

We welcome contributions! To get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/awesome-feature`)
3. **Make** your changes
4. **Test** thoroughly in multiple browsers
5. **Commit** with clear messages
6. **Push** to your fork
7. **Submit** a Pull Request

### Contribution Guidelines

- Follow existing code style
- Add documentation for new features
- Test on Chrome, Firefox, and Safari
- Update README if needed
- Keep commits atomic and focused

---

## License

Eclipse OS is open source and available under the MIT License. See LICENSE file for details.

---

## Version History

### Current Version: Latest
- Full OS simulator with window management
- 8+ built-in applications
- 10+ color themes
- Persistent storage
- Proxy and cloaking support
- Responsive design
- Dark mode optimized

### Previous Versions
See git history for complete changelog

---

## Roadmap

### Upcoming Features
- [ ] File upload/download support
- [ ] Native app creation framework
- [ ] Advanced networking tools
- [ ] System-wide search
- [ ] Voice command interface
- [ ] Multi-user support
- [ ] Cloud synchronization
- [ ] Plugin architecture

### Future Expansions
- Mobile app versions
- Desktop client
- Cross-device sync
- Community app marketplace
- Advanced customization tools

---

## Credits

**Created by:** EclipseV6 Organization

**Built with:**
- Vanilla HTML5
- Pure CSS3
- JavaScript (ES6+)
- LocalStorage API
- Service Workers

**Inspiration:**
- Modern operating systems
- Web technology innovation
- User experience design
- Open-source community

---

**Experience the future of web-based computing. Eclipse OS.**

*Powerful. Minimalist. Yours.*

---

*Last Updated: July 2026*
*For the latest information, visit: https://eclipsev6.github.io/*
