# Bug Fix Report: Hero Video Not Rendering

## Bug Description
Hero background video not visible - only dark overlay showing.

## Root Cause
**File:** `components/hero/CinematicVideoBackground.tsx`

**Issue:** Video wrapped in div with `z-index: -2` combined with parent section's `overflow-hidden`

```tsx
// BROKEN CODE:
<div style={{ zIndex: -2 }}>  // ← Negative z-index
    <video style={{ zIndex: -2 }}>
```

**Why it failed:**
- Negative z-index renders element BEHIND parent's background
- Parent section has `overflow-hidden`
- Video rendered behind section background → clipped by overflow → invisible

## Fix Applied
**Removed wrapper div, applied z-index: 0 directly to video**

```tsx
// FIXED CODE:
<video
    className="absolute inset-0 w-full h-full object-cover"
    style={{ zIndex: 0 }}  // ← Changed from -2 to 0
>
```

## Changes Made
1. Removed unnecessary wrapper div
2. Changed z-index from -2 to 0
3. Removed redundant inline styles
4. Removed unused `isLoaded` state variable

## Stack Order (Working)
```
z-10: Content
z-1:  Overlay + Glow
z-0:  Video (NOW VISIBLE)
```

## Build Status
✅ Build successful (2.4s)
✅ Zero errors
✅ Zero warnings

## Files Modified
- `components/hero/CinematicVideoBackground.tsx` (13 lines changed)
