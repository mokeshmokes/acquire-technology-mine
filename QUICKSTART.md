# 🚀 Quick Start Guide

Get the Acquiring Technology navigation system running in 3 minutes!

## Step 1: Install Dependencies (2 minutes)

Open your terminal in the project folder:

```bash
npm install
```

> **Windows Users**: If you get an execution policy error, run this first:
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

## Step 3: Open Browser (30 seconds)

Navigate to: **http://localhost:3000**

## ✅ What You Should See

- 🎨 Premium dark red header with glassmorphism
- 📱 Responsive navigation (try resizing!)
- ✨ Smooth hover animations
- 🖱️ Interactive mega menus
- 📲 Mobile sidebar navigation

## 🎯 Test These Features

1. **Hover over "Courses"** → See the mega menu
2. **Hover over "Resources"** → See another mega menu
3. **Click "More"** → See the dropdown
4. **Click the search icon** → Search modal opens
5. **Resize browser** → Mobile menu appears
6. **Scroll down** → Header gets glass effect

## 📝 Next Steps

Want to customize?

### Add a Course
Edit `data/navigation.ts`:

```typescript
{
  icon: Code2,
  title: 'Your Course Name',
  description: 'Short description',
  href: '/courses/your-course',
}
```

### Change Colors
Edit `tailwind.config.ts`:

```typescript
primary: {
  DEFAULT: '#7A0019', // Your color here
}
```

### Add Menu Item
Edit `data/navigation.ts`:

```typescript
{ 
  label: 'New Page', 
  href: '/new-page' 
}
```

## 🏗️ Production Build

When ready to deploy:

```bash
npm run build
npm start
```

## 📚 Full Documentation

- **README.md** - Complete overview
- **SETUP.md** - Detailed setup guide
- **FEATURES.md** - All features explained
- **INSTALLATION.txt** - Step-by-step instructions

## 🎨 Key Features at a Glance

✅ Next.js 16 App Router  
✅ React 19  
✅ TypeScript  
✅ Tailwind CSS  
✅ Framer Motion animations  
✅ Fully responsive  
✅ WCAG accessible  
✅ Premium glassmorphism  
✅ Mega menus  
✅ Mobile navigation  
✅ Search functionality  

## 💡 Pro Tips

1. **Auto-reload**: Changes auto-refresh in dev mode
2. **TypeScript**: Get type checking as you code
3. **Data-driven**: All menus configured in `data/navigation.ts`
4. **Accessible**: Full keyboard navigation support
5. **Performance**: Uses Server Components where possible

## 🐛 Issues?

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Module errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors?**
```bash
npm run lint
```

## 📞 Need Help?

- 📧 Email: support@acquiringtech.com
- 📱 Phone: +1-555-0123
- 📖 Docs: See README.md

---

**You're all set! Happy coding! 🎉**
