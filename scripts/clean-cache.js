#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const foldersToDelete = [
    '.next',
    'node_modules/.cache',
];

console.log('🧹 Cleaning build cache...\n');

foldersToDelete.forEach((folder) => {
    const folderPath = path.join(process.cwd(), folder);

    if (fs.existsSync(folderPath)) {
        try {
            fs.rmSync(folderPath, { recursive: true, force: true });
            console.log(`✅ Deleted: ${folder}`);
        } catch (error) {
            console.log(`⚠️  Could not delete ${folder}: ${error.message}`);
        }
    } else {
        console.log(`ℹ️  Not found: ${folder}`);
    }
});

console.log('\n✨ Cache cleaned successfully!');
console.log('Run "npm run dev" to start fresh.\n');
