const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directory = path.join(__dirname, 'src', 'assets', 'images', 'blog');

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach(async (file, index) => {
        if (path.extname(file).toLowerCase() === '.png') {
            const inputPath = path.join(directory, file);
            const outputPath = path.join(directory, path.basename(file, '.png') + '.webp');

            try {
                await sharp(inputPath)
                    .webp({ quality: 85 })
                    .toFile(outputPath);

                console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);

                // Delete the original png file
                fs.unlink(inputPath, (err) => {
                    if (err) console.error(`Error deleting ${file}:`, err);
                });

            } catch (error) {
                console.error(`Error converting ${file}:`, error);
            }
        }
    });
});
