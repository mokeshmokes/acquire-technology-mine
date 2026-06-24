# Port 3000 Conflict Fix & Prevention

## ✅ Issue Resolved

**Problem:** Port 3000 was occupied, forcing dev server to use port 3001

**Solution:** Stopped conflicting process and restarted server on port 3000

---

## 🔧 What Was Done

### 1. Identified Conflicting Process
```powershell
Get-NetTCPConnection -LocalPort 3000
# Found: Process ID 28228
```

### 2. Stopped the Process
```powershell
Stop-Process -Id 28228 -Force
```

### 3. Restarted Dev Server
```bash
npm run dev
# Now running on http://localhost:3000 ✅
```

---

## 🚀 Current Status

```
✓ Port: 3000 (correct)
✓ Status: Running
✓ Ready: 2.1s
✓ No conflicts
```

**Access URLs:**
- Local: http://localhost:3000
- Network: http://192.168.114.1:3000

---

## 🛠️ If Port Conflict Happens Again

### Quick Fix (PowerShell)

**1. Check what's using port 3000:**
```powershell
Get-NetTCPConnection -LocalPort 3000 | Select-Object OwningProcess
```

**2. Stop the process:**
```powershell
Stop-Process -Id <PROCESS_ID> -Force
```

**3. Restart your dev server:**
```bash
npm run dev
```

---

## 🔍 Common Causes

### 1. Previous Dev Server Not Stopped
**Cause:** Closed terminal without stopping server (Ctrl+C)

**Prevention:**
- Always use Ctrl+C to stop dev server
- Don't just close the terminal

### 2. Multiple Projects Running
**Cause:** Another Next.js project using port 3000

**Solution:**
- Stop other projects first
- Or configure different ports for each project

### 3. VS Code Extensions
**Cause:** Some extensions run local servers on port 3000

**Solution:**
- Check extension settings
- Disable unnecessary extensions

### 4. Background Processes
**Cause:** Zombie Node processes still running

**Solution:**
- Kill all Node processes: `Stop-Process -Name node -Force`
- Then restart your server

---

## 📝 PowerShell Commands Reference

### Check Port Usage
```powershell
# Check specific port
Get-NetTCPConnection -LocalPort 3000

# Check all Node processes
Get-Process -Name node

# Check ports 3000-3010
3000..3010 | ForEach-Object {
    Get-NetTCPConnection -LocalPort $_ -ErrorAction SilentlyContinue
}
```

### Kill Processes
```powershell
# Kill specific process by ID
Stop-Process -Id 28228 -Force

# Kill all Node processes
Stop-Process -Name node -Force

# Kill process on specific port
$proc = Get-NetTCPConnection -LocalPort 3000 | Select-Object -ExpandProperty OwningProcess
Stop-Process -Id $proc -Force
```

### Verify Port is Free
```powershell
# Should return nothing if port is free
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
```

---

## 🎯 Prevention Tips

### 1. Always Stop Properly
```bash
# In terminal where dev server is running:
Ctrl + C

# Wait for clean shutdown message
# Then close terminal
```

### 2. Use Process Manager
- Windows Task Manager → Details tab
- Look for `node.exe` processes
- End task if server won't stop

### 3. Configure Custom Port (Optional)
If you want to use a different port:

**In package.json:**
```json
{
  "scripts": {
    "dev": "next dev -p 3001"
  }
}
```

**Or in terminal:**
```bash
npm run dev -- -p 3001
```

### 4. Check Before Starting
```powershell
# Quick check if port 3000 is free
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue

# If it returns nothing, port is free!
```

---

## 🚨 Emergency: Kill All Node Processes

**If server won't stop or keeps conflicting:**

```powershell
# Nuclear option - kills ALL Node processes
Stop-Process -Name node -Force

# Then restart your server
npm run dev
```

**⚠️ Warning:** This stops ALL Node processes on your system, including:
- Other dev servers
- Running Node scripts
- Background Node services

Only use when necessary!

---

## 📊 Port Usage Best Practices

### Development Ports
```
3000 - Primary Next.js dev server (your project)
3001 - Alternative Next.js server
3002 - Another project
5000 - Backend API servers
8080 - Alternative web servers
```

### Port Assignment Strategy
1. Use port 3000 for your main project
2. Assign different ports to other projects
3. Document which project uses which port
4. Keep a port mapping file if you have many projects

---

## ✅ Current Configuration

**Your Project:**
- Name: Acquiring Technology
- Port: 3000 ✅
- URL: http://localhost:3000
- Status: Running

**No Conflicts:** Port 3000 is clear and working correctly

---

## 🔄 Restart Server Commands

### Normal Restart
```bash
# Stop server
Ctrl + C

# Start server
npm run dev
```

### Force Restart (if port conflict)
```powershell
# 1. Check and kill port 3000
$proc = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
if ($proc) { Stop-Process -Id $proc -Force }

# 2. Start server
npm run dev
```

### Clean Restart (full reset)
```bash
# 1. Kill all Node processes
Stop-Process -Name node -Force

# 2. Clear Next.js cache
Remove-Item -Recurse -Force .next

# 3. Start fresh
npm run dev
```

---

## 📚 Additional Resources

### Check All Listening Ports
```powershell
Get-NetTCPConnection -State Listen | 
    Select-Object LocalPort, OwningProcess |
    Sort-Object LocalPort
```

### Find Process Details
```powershell
# Get process name by ID
Get-Process -Id 28228 | Select-Object Name, Id, Path

# Get all Node process details
Get-Process -Name node | Select-Object Id, Name, Path
```

---

## ✅ Verification Checklist

After fixing port conflict:

- [ ] Port 3000 is free (no other processes)
- [ ] Dev server starts without warnings
- [ ] Server shows "http://localhost:3000"
- [ ] Website loads at localhost:3000
- [ ] No "port in use" messages
- [ ] Hot reload works

---

**Issue:** ✅ Fixed  
**Port:** 3000 (correct)  
**Server:** Running  
**URL:** http://localhost:3000  
**Status:** Ready to use!

---

**Last Updated:** June 24, 2026  
**Next Time:** Always use Ctrl+C to stop server properly
