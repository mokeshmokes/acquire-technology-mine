# Course Images Directory

## Upload Your Course Images Here

This directory contains placeholder images for the Free Courses section. Replace these files with your own high-quality course images.

### Required Images:

1. **html-coding-editor.jpg** - HTML Course
   - Recommended: Modern coding editor showing HTML5 code
   - Size: 1200x800px or 16:9 aspect ratio
   - Format: JPG or PNG

2. **css-ui-design.jpg** - CSS Course
   - Recommended: Beautiful UI design or CSS code
   - Size: 1200x800px or 16:9 aspect ratio
   - Format: JPG or PNG

3. **javascript-code.jpg** - JavaScript Course
   - Recommended: JavaScript code editor or browser console
   - Size: 1200x800px or 16:9 aspect ratio
   - Format: JPG or PNG

4. **bootstrap-responsive.jpg** - Bootstrap Course
   - Recommended: Responsive website preview on multiple devices
   - Size: 1200x800px or 16:9 aspect ratio
   - Format: JPG or PNG

5. **react-dashboard.jpg** - React Course
   - Recommended: Modern React dashboard or component library
   - Size: 1200x800px or 16:9 aspect ratio
   - Format: JPG or PNG

6. **nextjs-saas.jpg** - Next.js Course
   - Recommended: Premium SaaS dashboard or Next.js project
   - Size: 1200x800px or 16:9 aspect ratio
   - Format: JPG or PNG

7. **angular-app.jpg** - Angular Course
   - Recommended: Angular application or enterprise dashboard
   - Size: 1200x800px or 16:9 aspect ratio
   - Format: JPG or PNG

8. **typescript-vscode.jpg** - TypeScript Course
   - Recommended: VS Code showing TypeScript code
   - Size: 1200x800px or 16:9 aspect ratio
   - Format: JPG or PNG

### Image Guidelines:

#### Aspect Ratio:
- **16:9 ratio** (e.g., 1200x800, 1920x1080, 1600x900)
- This ensures consistent card heights

#### Quality:
- High resolution (at least 1200px width)
- Clear and sharp
- Good lighting
- Professional appearance

#### Style:
- Dark theme preferred (matches Acquiring Technology branding)
- Technology-focused
- Modern and clean
- Avoid cluttered images

#### Colors:
- Dark reds work well with the theme
- Dark backgrounds
- Contrast with white/light text
- Avoid bright greens, blues, yellows

#### File Size:
- Optimize for web (under 500KB per image)
- Use tools like TinyPNG or Squoosh
- Balance quality vs file size

### How to Replace:

1. **Upload your images** to this directory (`/public/images/courses/`)
2. **Use exact filenames** listed above
3. **Verify** the images appear correctly on the site
4. **Delete** placeholder images if no longer needed

### Technical Details:

- Images are loaded using Next.js `Image` component
- Automatic optimization by Next.js
- Lazy loading enabled
- Responsive images served
- Dark red tint overlay applied automatically
- Gradient overlay applied for text readability

### Card Image Showcase:

The top 45% of each card is dedicated to the image:
- Rounded top corners (24px border radius)
- Soft gradient overlay
- Dark red tint
- Continuous floating animation
- Zoom + rotate on hover
- Mouse parallax effect
- Premium cinematic feel

### Image Animations:

**On First Appear:**
- Fade in: opacity 0 → 1
- Zoom out: scale 1.25 → 1
- Slide up: translateY 30px → 0
- Blur clear: blur 12px → 0
- Duration: 1.2 seconds

**Continuous:**
- Subtle floating: translateY 0 → -6px → 0
- Duration: 4 seconds
- Infinite loop

**On Hover:**
- Zoom: scale 1.08
- Rotate: 1 degree
- Dark red glow appears
- Mouse parallax tracking

### Example Sources for Stock Images:

- Unsplash (unsplash.com) - Free high-quality images
- Pexels (pexels.com) - Free stock photos
- Pixabay (pixabay.com) - Free images and videos
- Your own screenshots - Most authentic!

### Taking Your Own Screenshots:

1. Open your code editor (VS Code, etc.)
2. Set dark theme
3. Open relevant code file
4. Take high-res screenshot
5. Crop to 16:9 ratio
6. Optimize file size
7. Upload here

---

**Important:** Keep the exact filenames or update them in `/data/freeCourses.ts` if you change them.
