const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function compressImages(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = path.join(directory, file);
      const outputPath = path.join(directory, `${path.basename(file, ext)}.webp`);
      
      const stats = fs.statSync(inputPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      
      console.log(`Converting: ${file} (${sizeMB} MB)`);
      
      try {
        await sharp(inputPath)
          .resize(1920, 1920, { 
            fit: 'inside', 
            withoutEnlargement: true 
          })
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        const newStats = fs.statSync(outputPath);
        const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
        const savings = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);
        
        console.log(`  → ${path.basename(outputPath)} (${newSizeMB} MB) - ${savings}% smaller\n`);
      } catch (err) {
        console.error(`  Error processing ${file}:`, err.message);
      }
    }
  }
}

async function main() {
  console.log('=== Compressing Art Images ===\n');
  await compressImages('./public/img/art');
  
  console.log('\n=== Compressing Project Images ===\n');
  await compressImages('./public/img/project_images');
  
  console.log('\n=== Compressing Other Large Images ===\n');
  await compressImages('./public/img');
  
  console.log('\nDone! You can now delete the original large files if the webp versions look good.');
}

main().catch(console.error);

