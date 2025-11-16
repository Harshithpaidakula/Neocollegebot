# NeoCampus AI - Setup Guide

## 📋 Prerequisites

### System Requirements
- **Operating System**: Windows 10/11, macOS 10.14+, or Linux Ubuntu 18.04+
- **Web Browser**: Chrome 70+, Firefox 65+, Safari 12+, or Edge 79+
- **Storage**: Minimum 5MB free space
- **Internet**: Required for initial download only

### Software Requirements
- **Text Editor** (Optional for modifications):
  - VS Code (Recommended)
  - Sublime Text
  - Atom
  - Notepad++
- **Web Browser** (Any modern browser)
- **Local Server** (Optional):
  - Live Server extension for VS Code
  - Python HTTP server
  - Node.js HTTP server

## 🚀 Installation Methods

### Method 1: Direct Browser Opening (Easiest)

1. **Download Project Files**
   ```
   Download all files:
   - index.html
   - styles.css
   - script.js
   - README.md
   - PROJECT_REPORT.md
   - SETUP_GUIDE.md
   ```

2. **Create Project Folder**
   ```
   Create a folder named "NeoCampus-AI"
   Place all downloaded files in this folder
   ```

3. **Open in Browser**
   ```
   Double-click on index.html
   OR
   Right-click → Open with → Your preferred browser
   ```

4. **Start Using**
   ```
   The application will open in your browser
   Start chatting with NeoCampus AI immediately!
   ```

### Method 2: VS Code with Live Server (Recommended for Development)

1. **Install VS Code**
   - Download from: https://code.visualstudio.com/
   - Install the application

2. **Install Live Server Extension**
   ```
   1. Open VS Code
   2. Go to Extensions (Ctrl+Shift+X)
   3. Search for "Live Server"
   4. Install the extension by Ritwick Dey
   ```

3. **Open Project**
   ```
   1. File → Open Folder
   2. Select your "NeoCampus-AI" folder
   3. Files will appear in the sidebar
   ```

4. **Start Live Server**
   ```
   1. Right-click on index.html
   2. Select "Open with Live Server"
   3. Application opens in browser automatically
   ```

5. **Benefits of Live Server**
   ```
   - Auto-refresh on file changes
   - Local server environment
   - Better development experience
   - CORS issues avoided
   ```

### Method 3: Python HTTP Server

1. **Check Python Installation**
   ```bash
   python --version
   # or
   python3 --version
   ```

2. **Navigate to Project Directory**
   ```bash
   cd path/to/NeoCampus-AI
   ```

3. **Start HTTP Server**
   ```bash
   # For Python 3.x
   python -m http.server 8000
   
   # For Python 2.x
   python -m SimpleHTTPServer 8000
   ```

4. **Open in Browser**
   ```
   Navigate to: http://localhost:8000
   ```

### Method 4: Node.js HTTP Server

1. **Install Node.js**
   - Download from: https://nodejs.org/
   - Install the application

2. **Install HTTP Server Package**
   ```bash
   npm install -g http-server
   ```

3. **Navigate to Project Directory**
   ```bash
   cd path/to/NeoCampus-AI
   ```

4. **Start Server**
   ```bash
   http-server -p 8000
   ```

5. **Open in Browser**
   ```
   Navigate to: http://localhost:8000
   ```

## 🛠️ Configuration and Customization

### Updating College Information

1. **Edit JavaScript File**
   ```javascript
   // Open script.js in text editor
   // Find svsKnowledgeBase object
   // Update information as needed
   ```

2. **Common Updates**
   ```javascript
   // Update contact information
   location: "New address and contact details",
   
   // Update admission information
   engineering: "Updated B.Tech admission process",
   
   // Update facilities
   campus: "Updated facility descriptions"
   ```

3. **Save and Refresh**
   ```
   Save the file
   Refresh browser to see changes
   ```

### Customizing Appearance

1. **Edit CSS File**
   ```css
   /* Open styles.css in text editor */
   /* Modify colors, fonts, or layouts */
   ```

2. **Common Customizations**
   ```css
   /* Change color scheme */
   body {
       background: linear-gradient(135deg, #new-color1, #new-color2);
   }
   
   /* Update font family */
   body {
       font-family: 'Your-Preferred-Font', sans-serif;
   }
   
   /* Modify button colors */
   .send-button {
       background: linear-gradient(135deg, #new-color1, #new-color2);
   }
   ```

3. **Save and Refresh**
   ```
   Save the file
   Refresh browser to see changes
   ```

### Adding New Features

1. **Modify HTML Structure**
   ```html
   <!-- Add new elements to index.html -->
   <div class="new-feature">
       <!-- Your new feature content -->
   </div>
   ```

2. **Add Corresponding Styles**
   ```css
   /* Add styles in styles.css */
   .new-feature {
       /* Your styling */
   }
   ```

3. **Implement Functionality**
   ```javascript
   // Add JavaScript functions in script.js
   function newFeature() {
       // Your functionality
   }
   ```

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: Application Not Loading
**Symptoms**: Blank page or error messages
**Solutions**:
```
1. Check if all files are in the same folder
2. Ensure file names are exactly as specified
3. Try a different browser
4. Check browser console for errors (F12)
```

#### Issue 2: Styling Not Applied
**Symptoms**: Plain HTML without styling
**Solutions**:
```
1. Verify styles.css is in the same folder as index.html
2. Check for typos in CSS file name
3. Clear browser cache (Ctrl+F5)
4. Check CSS file for syntax errors
```

#### Issue 3: Chat Not Working
**Symptoms**: Messages not sending or receiving
**Solutions**:
```
1. Verify script.js is in the same folder
2. Check browser console for JavaScript errors
3. Ensure JavaScript is enabled in browser
4. Try refreshing the page
```

#### Issue 4: Mobile Display Issues
**Symptoms**: Layout problems on mobile devices
**Solutions**:
```
1. Ensure viewport meta tag is present
2. Test on different mobile browsers
3. Check CSS media queries
4. Verify responsive design breakpoints
```

### Browser-Specific Issues

#### Chrome Issues
```
- Clear cache and cookies
- Disable extensions temporarily
- Check Developer Tools (F12) for errors
```

#### Firefox Issues
```
- Clear cache and cookies
- Disable add-ons temporarily
- Check Web Console for errors
```

#### Safari Issues
```
- Clear cache and cookies
- Check Web Inspector for errors
- Ensure latest Safari version
```

## 📱 Mobile Setup

### Android Devices
1. **Transfer Files**
   ```
   - Use USB cable or cloud storage
   - Copy files to phone storage
   - Create "NeoCampus-AI" folder
   ```

2. **Open in Browser**
   ```
   - Use Chrome or Firefox
   - Navigate to file location
   - Tap on index.html
   ```

### iOS Devices
1. **Transfer Files**
   ```
   - Use AirDrop or cloud storage
   - Save to Files app
   - Create "NeoCampus-AI" folder
   ```

2. **Open in Browser**
   ```
   - Use Safari or Chrome
   - Navigate to file location
   - Tap on index.html
   ```

## 🌐 Deployment Options

### GitHub Pages (Free Hosting)
1. **Create GitHub Repository**
2. **Upload Project Files**
3. **Enable GitHub Pages**
4. **Access via Provided URL**

### Netlify (Free Hosting)
1. **Create Netlify Account**
2. **Drag and Drop Files**
3. **Get Instant Live URL**
4. **Automatic HTTPS**

### Local Network Sharing
1. **Start Local Server**
2. **Find IP Address**
3. **Share IP:Port with Others**
4. **Access from Network Devices**

## 📊 Performance Optimization

### Loading Speed
```html
<!-- Optimize images -->
<img src="image.jpg" loading="lazy" alt="Description">

<!-- Minify CSS and JS for production -->
<!-- Use compression tools -->
```

### Browser Caching
```html
<!-- Add cache headers for static files -->
<meta http-equiv="Cache-Control" content="public, max-age=3600">
```

### Mobile Performance
```css
/* Use CSS transforms for animations */
transform: translateY(-5px);

/* Optimize touch interactions */
touch-action: manipulation;
```

## 🔐 Security Best Practices

### File Security
```
- Keep files in designated project folder
- Don't modify core functionality unless necessary
- Regular backups of working versions
```

### Browser Security
```
- Use HTTPS when possible
- Keep browsers updated
- Be cautious with browser extensions
```

## 📞 Support and Help

### Getting Help
1. **Check Documentation**: README.md and PROJECT_REPORT.md
2. **Browser Console**: F12 to check for errors
3. **Community Resources**: Stack Overflow, MDN Web Docs
4. **College Support**: Contact your instructor or IT department

### Reporting Issues
When reporting issues, include:
```
- Browser version and operating system
- Exact error messages
- Steps to reproduce the problem
- Screenshots if applicable
```

---

**Setup Guide Version**: 1.0  
**Last Updated**: [Current Date]  
**Compatibility**: All modern browsers  
**Support**: Educational use at SVS Group of Institutions

*For additional assistance, contact your course instructor or technical support team.*