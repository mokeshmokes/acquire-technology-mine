# Troubleshooting Guide

## Common Issues & Solutions

---

## 1. Webpack Module Error

### Error:
```
__webpack_modules__[moduleId] is not a function
Runtime TypeError
```

### Cause:
Stale build cache or corrupted webpack modules

### Solution:
```bash
# Method 1: Use clean script
npm run clean
npm run dev

# Method 2: Manual cleanup
Remove-Item -Recurse -Force .next
npm run dev

# Method 3: Deep clean
npm run clean:build
```

### Prevention:
- Use `npm run clean:dev` when switching branches
- Run clean script after pulling major changes
- Clear cache if you see webpack errors

---

## 2. Hydration Error

### Error:
```
A tree hydrated but some attributes of the server rendered HTML 
didn't match the client properties
```

### Cause:
- Math.random() in render
- Date/time values during render
- Browser-specific APIs in render
- Inline styles with dynamic values

### Solution:
✅ **Already Fixed:**
- Particles use `isMounted` pattern
- Random values in `useState` initialization
- Client-only rendering for dynamic content

### If it returns:
1. Check for `Math.random()` in component render
2. Check for `Date.now()` or `new Date()` in render
3. Ensure `window` or `document` are in `useEffect`
4. Use `isMounted` pattern for client-only content

---

## 3. Video Not Playing

### Issue:
Videos don't autoplay or show black screen

### Cause:
- Browser autoplay restrictions
- Missing video files
- Incorrect file paths
- Video format issues

### Solution:
```typescript
// Already implemented:
- Videos are muted (required for autoplay)
- playsInline attribute for mobile
- Proper error handling
- safePlay() function
```

### Verify:
1. Check videos exist: `/public/videos/course-vedio1.mp4`
2. Check videos exist: `/public/videos/course-video.mp4`
3. Check browser console for 404 errors
4. Try in different browser

---

## 4. Port Already in Use

### Error:
```
Port 3000 is in use
```

### Solution:
```bash
# Next.js automatically uses next available port (3001)
# If you need to free port 3000:

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or just use port 3001:
http://localhost:3001
```

---

## 5. Build Fails

### Error:
```
Error: Build failed
```

### Causes & Solutions:

#### TypeScript Errors:
```bash
npm run lint
# Fix reported type errors
```

#### Missing Dependencies:
```bash
npm install
```

#### Cache Issues:
```bash
npm run clean:build
```

#### Out of Memory:
```bash
# Increase Node memory
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

---

## 6. Performance Issues

### Issue:
Slow animations, choppy scrolling

### Solutions:

#### Check GPU Acceleration:
- Animations use `transform` and `opacity`
- `will-change` property set
- Hardware acceleration enabled

#### Reduce Motion:
System respects `prefers-reduced-motion`

#### Check Console:
Look for performance warnings

---

## 7. Module Not Found

### Error:
```
Module not found: Can't resolve 'module-name'
```

### Solution:
```bash
# Reinstall dependencies
npm install

# Clear cache and reinstall
npm run clean
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 8. Styles Not Applying

### Issue:
Tailwind classes not working

### Solution:
```bash
# Rebuild
npm run build
npm run dev

# Check tailwind.config.ts content paths
# Verify className syntax
```

---

## Quick Fix Commands

### Start Fresh:
```bash
npm run clean:dev
```

### Deep Clean:
```bash
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
npm install
npm run dev
```

### Force Rebuild:
```bash
npm run clean:build
npm run start
```

### Check for Errors:
```bash
npm run lint
npm run build
```

---

## Error Boundary

The app now has error boundaries that will:
- Catch runtime errors
- Display user-friendly message
- Provide refresh option
- Log errors to console

### Location:
`components/ErrorBoundary.tsx`

### Usage:
Already wrapped around main app in `app/page.tsx`

---

## Development Workflow

### Normal Development:
```bash
npm run dev
# Make changes
# Hot reload works automatically
```

### After Git Pull:
```bash
npm install  # If package.json changed
npm run clean:dev  # If major changes
```

### Before Deployment:
```bash
npm run lint
npm run build
npm run start  # Test production build
```

### If Things Break:
```bash
npm run clean:build  # Nuclear option
```

---

## Debugging Tips

### 1. Check Browser Console
- Open DevTools (F12)
- Look for errors in Console tab
- Check Network tab for 404s

### 2. Check Terminal
- Look for build errors
- Check for warnings
- Verify compilation success

### 3. Check Files
- Verify video files in `/public/videos/`
- Check component imports
- Verify file names match

### 4. Check Environment
- Node version: 18+ recommended
- npm version: 9+ recommended
- Windows: Use PowerShell or CMD

---

## Prevention Checklist

Before committing changes:
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] No console errors
- [ ] Test in browser
- [ ] Videos play correctly
- [ ] Animations smooth
- [ ] Responsive on mobile

---

## Getting Help

### Information to Provide:
1. Error message (full text)
2. Browser console screenshot
3. Terminal output
4. Steps to reproduce
5. Branch/commit info

### Useful Commands:
```bash
# Node version
node --version

# npm version
npm --version

# Next.js version
npm list next

# Full dependency tree
npm list

# Check for vulnerabilities
npm audit
```

---

## Cache Locations

### Next.js:
- `.next/` - Build output and cache
- `.next/cache/` - Webpack cache

### Node:
- `node_modules/.cache/` - Various caches

### Clean All:
```bash
npm run clean
```

---

## Known Issues

### 1. Port 3000 Often Used
**Why:** Other dev servers running  
**Fix:** Next.js auto-uses 3001  
**Result:** No action needed

### 2. First Load Slow
**Why:** Webpack compiling on first request  
**Fix:** Normal behavior  
**Result:** Subsequent loads fast

### 3. Hot Reload Delays
**Why:** Large component changes  
**Fix:** Wait for compilation  
**Result:** Patience required

---

## Emergency Reset

If nothing else works:

```bash
# 1. Stop all Node processes
taskkill /F /IM node.exe

# 2. Deep clean
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules

# 3. Reinstall
npm install

# 4. Rebuild
npm run build

# 5. Start fresh
npm run dev
```

---

## Prevention Scripts

Added to `package.json`:

```json
{
  "scripts": {
    "clean": "Clean cache",
    "clean:dev": "Clean and start dev",
    "clean:build": "Clean and build"
  }
}
```

Use these regularly to prevent cache issues!

---

## Support Checklist

Before asking for help:

1. ✅ Tried `npm run clean:dev`
2. ✅ Checked browser console
3. ✅ Verified video files exist
4. ✅ Ran `npm run lint`
5. ✅ Tested in incognito mode
6. ✅ Restarted VS Code
7. ✅ Read this guide

---

**Last Updated:** June 25, 2026  
**Status:** All known issues resolved  
**Version:** 1.0.0
