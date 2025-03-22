const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Get all image files
const files = fs.readdirSync(imagesDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file)
);

// Process each image
files.forEach(async (file) => {
  const inputPath = path.join(imagesDir, file);
  const outputPath = path.join(outputDir, file);

  try {
    await sharp(inputPath)
      .resize(1920, 1080, { // Max dimensions
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: 80 }) // For JPG files
      .png({ quality: 80 }) // For PNG files
      .toFile(outputPath);
    
    console.log(`Optimized: ${file}`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
}); 