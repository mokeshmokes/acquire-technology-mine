# 🏗️ Component Architecture

## Visual Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                          <Header />                              │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ <Logo />   <DesktopNavigation />   <ActionButtons />     │  │
│  │             <MobileNavigation />                          │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Detailed Component Breakdown

### 📱 Header Component
**Type**: Client Component  
**File**: `components/navigation/Header.tsx`  
**Purpose**: Main container with scroll behavior

```tsx
<Header>
  ├─ useScrollHeader() hook
  ├─ Glassmorphism effects
  ├─ Sticky positioning
  └─ Children:
      ├─ <Logo />
      ├─ <DesktopNavigation />  (hidden on mobile)
      ├─ <ActionButtons />       (hidden on mobile)
      └─ <MobileNavigation />    (hidden on desktop)
</Header>
```

**Features**:
- Scroll detection
- State: `isScrolled`, `isVisible`
- Conditional styling
- Smooth transitions

---

### 🎨 Logo Component
**Type**: Client Component  
**File**: `components/navigation/Logo.tsx`  
**Purpose**: Animated brand identity

```tsx
<Logo>
  ├─ Link wrapper (href="/")
  ├─ SVG icon with gradient
  ├─ Company wordmark
  ├─ Subtitle text
  └─ Hover animations
</Logo>
```

**Animations**:
- Scale on hover (1.05x)
- Scale on tap (0.95x)
- Color transitions
- Spring physics

---

### 🖥️ Desktop Navigation Component
**Type**: Client Component  
**File**: `components/navigation/DesktopNavigation.tsx`  
**Purpose**: Main navigation for desktop

```tsx
<DesktopNavigation>
  ├─ useMegaMenu() hook
  ├─ Map through mainNavigation[]
  └─ For each item:
      ├─ <NavigationItem />
      └─ Conditional render:
          ├─ <MegaMenu type="courses" />
          ├─ <MegaMenu type="resources" />
          └─ <DropdownMenu />
</DesktopNavigation>
```

**State Management**:
- `activeMenu`: Currently open menu
- `isOpen`: Menu visibility
- `menuRef`: Click outside detection

**Features**:
- Mouse enter/leave detection
- Keyboard navigation
- ESC key handler
- Outside click handler

---

### 📋 Navigation Item Component
**Type**: Client Component  
**File**: `components/navigation/NavigationItem.tsx`  
**Purpose**: Individual menu item with animations

```tsx
<NavigationItem>
  ├─ Link wrapper
  ├─ Label text
  ├─ ChevronDown (conditional)
  ├─ Animated underline
  └─ Glow effect (when active)
</NavigationItem>
```

**Props**:
```typescript
{
  label: string
  href: string
  hasMegaMenu?: boolean
  hasDropdown?: boolean
  isActive?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}
```

**Animations**:
- Underline scaleX (0 → 1)
- Chevron rotation (0° → 180°)
- Color transitions
- Glow effect

---

### 🎯 Mega Menu Component
**Type**: Client Component  
**File**: `components/navigation/MegaMenu.tsx`  
**Purpose**: Large dropdown for courses/resources

```tsx
<MegaMenu type="courses" | "resources">
  ├─ AnimatePresence wrapper
  ├─ Glass effect container
  └─ Grid layout (3 columns):
      └─ Map through categories:
          ├─ Category header
          └─ Map through items:
              ├─ Icon
              ├─ Title
              ├─ Description/Subtitle
              └─ Arrow indicator
</MegaMenu>
```

**Props**:
```typescript
{
  type: 'courses' | 'resources'
  isOpen: boolean
}
```

**Data Sources**:
- `coursesMegaMenu[]` from `data/navigation.ts`
- `resourcesMegaMenu[]` from `data/navigation.ts`

**Animations**:
- Fade in/out
- Translate Y
- Stagger effect (100ms delay per column)
- Item hover effects

---

### 📂 Dropdown Menu Component
**Type**: Client Component  
**File**: `components/navigation/DropdownMenu.tsx`  
**Purpose**: Compact dropdown for "More"

```tsx
<DropdownMenu>
  ├─ AnimatePresence wrapper
  ├─ Glass effect container
  └─ Map through moreMenu[]:
      ├─ Category header
      ├─ Border separator
      └─ Map through items:
          ├─ Icon
          └─ Title
</DropdownMenu>
```

**Features**:
- Positioned absolute
- Right-aligned
- Border separators
- Icon transitions

---

### 🔍 Search Bar Component
**Type**: Client Component  
**File**: `components/navigation/SearchBar.tsx`  
**Purpose**: Global search modal

```tsx
<SearchBar>
  ├─ Search button (trigger)
  └─ Modal (when open):
      ├─ Backdrop overlay
      ├─ Glass container
      ├─ Search icon
      ├─ Input field
      ├─ Close button
      └─ Results area (future)
</SearchBar>
```

**State**:
- `isOpen`: Modal visibility
- `searchQuery`: Search input
- `inputRef`: Auto-focus

**Features**:
- ESC to close
- Click outside to close
- Auto-focus input
- Smooth animations

---

### 🎬 Action Buttons Component
**Type**: Client Component  
**File**: `components/navigation/ActionButtons.tsx`  
**Purpose**: Right-side CTA buttons

```tsx
<ActionButtons>
  ├─ <SearchBar />
  ├─ <NavigationButton> Phone
  ├─ <NavigationButton> WhatsApp
  ├─ <NavigationButton> Apply Now
  ├─ <NavigationButton> Book Counselling
  └─ <NavigationButton> Student Portal
</ActionButtons>
```

---

### 🔘 Navigation Button Component
**Type**: Client Component  
**File**: `components/navigation/NavigationButton.tsx`  
**Purpose**: Reusable action button

```tsx
<NavigationButton>
  ├─ Motion wrapper
  └─ Link or Button:
      ├─ Icon (optional)
      └─ Label text
</NavigationButton>
```

**Props**:
```typescript
{
  label: string
  href?: string
  icon?: LucideIcon
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  onClick?: () => void
}
```

**Variants**:
- `primary`: Red background + glow
- `secondary`: Medium red
- `outline`: Border only
- `ghost`: Transparent

---

### 📱 Mobile Navigation Component
**Type**: Client Component  
**File**: `components/navigation/MobileNavigation.tsx`  
**Purpose**: Slide-in sidebar for mobile

```tsx
<MobileNavigation>
  ├─ Hamburger button
  └─ Sidebar (when open):
      ├─ Backdrop overlay
      ├─ Sidebar container
      ├─ Close button
      ├─ Accordion menu:
      │   └─ Map through mainNavigation[]:
      │       ├─ Simple link OR
      │       └─ Accordion with submenu:
      │           ├─ Courses submenu
      │           ├─ Resources submenu
      │           └─ More submenu
      └─ CTA buttons (3x)
</MobileNavigation>
```

**State**:
- `isOpen`: Sidebar visibility
- `expandedMenu`: Current accordion

**Features**:
- Slide-in animation
- Prevent body scroll
- Touch-friendly
- Nested categories

---

## 🪝 Custom Hooks

### useScrollHeader
**File**: `hooks/useScrollHeader.ts`  
**Purpose**: Detect scroll position and direction

```typescript
Returns: {
  isScrolled: boolean    // > 50px
  isVisible: boolean     // Scroll direction
}
```

**Logic**:
- Listen to scroll events
- Track last scroll position
- Show header when scrolling up
- Hide when scrolling down fast
- Always show when near top

---

### useMegaMenu
**File**: `hooks/useMegaMenu.ts`  
**Purpose**: Manage mega menu state

```typescript
Returns: {
  activeMenu: string | null
  isOpen: boolean
  menuRef: RefObject
  openMenu: (id: string) => void
  closeMenu: () => void
  closeMenuImmediately: () => void
}
```

**Features**:
- Mouse enter/leave detection
- Delayed close (150ms)
- ESC key handler
- Click outside handler
- Cleanup on unmount

---

## 📊 Data Structure

### navigation.ts
**File**: `data/navigation.ts`  
**Purpose**: Centralized navigation configuration

```typescript
Export                  Type                    Usage
─────────────────────────────────────────────────────────
mainNavigation[]        NavigationItem[]        Main menu
coursesMegaMenu[]       MegaMenuCategory[]      Courses
resourcesMegaMenu[]     ResourceCategory[]      Resources
moreMenu[]             MoreMenuCategory[]      More dropdown
actionButtons[]        ActionButton[]          CTAs
```

---

## 🎨 Type Definitions

### navigation.ts
**File**: `types/navigation.ts`  
**Purpose**: TypeScript interfaces

```typescript
NavigationItem {
  label: string
  href: string
  hasMegaMenu?: boolean
  hasDropdown?: boolean
}

MegaMenuItem {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

MegaMenuCategory {
  category: string
  items: MegaMenuItem[]
}

ResourceItem {
  icon: LucideIcon
  title: string
  subtitle: string
  href: string
}

// ... and more
```

---

## 🔄 Data Flow

```
┌──────────────────────────────────────────────────────────┐
│                    data/navigation.ts                     │
│  (Single source of truth for all menu content)           │
└────────────────────┬─────────────────────────────────────┘
                     │
        ┌────────────┼────────────┬─────────────┐
        │            │            │             │
        v            v            v             v
┌─────────────┐ ┌────────┐ ┌──────────┐ ┌──────────┐
│ Desktop     │ │ Mega   │ │ Dropdown │ │ Mobile   │
│ Navigation  │ │ Menu   │ │ Menu     │ │ Nav      │
└─────────────┘ └────────┘ └──────────┘ └──────────┘
```

**Benefits**:
- ✅ Single source of truth
- ✅ Type-safe
- ✅ Easy to update
- ✅ Reusable across components
- ✅ No duplication

---

## 🎯 Component Communication

### Parent → Child (Props)
```
Header → Logo (no props)
Header → DesktopNavigation (no props)
DesktopNavigation → NavigationItem (label, href, etc.)
DesktopNavigation → MegaMenu (type, isOpen)
```

### Child → Parent (Callbacks)
```
NavigationItem → DesktopNavigation (onMouseEnter, onMouseLeave)
SearchBar → ActionButtons (state managed internally)
MobileNavigation → Header (state managed internally)
```

### Hooks (Shared State)
```
useScrollHeader → Header
useMegaMenu → DesktopNavigation
```

---

## 🚀 Performance Optimizations

### Server Components
- ✅ Logo (mostly static)
- ✅ Layout structure
- ✅ Static content

### Client Components
- ✅ Interactive menus
- ✅ Scroll detection
- ✅ Animation triggers
- ✅ Event handlers

### Memoization
```typescript
// Future optimization opportunities
useMemo() for computed values
useCallback() for event handlers
React.memo() for expensive components
```

---

## 📦 Component Dependencies

```
Header
├─ framer-motion (animations)
├─ @/lib/utils (cn function)
├─ @/hooks/useScrollHeader
└─ Child components

Navigation Components
├─ framer-motion
├─ lucide-react (icons)
├─ next/link
└─ @/data/navigation

Hooks
├─ react (useState, useEffect, etc.)
└─ No external dependencies
```

---

**Architecture Documentation Complete** ✅
