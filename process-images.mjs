import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDir = 'c:/Users/Stefano/CODING/Amplify scratch/src/assets/images/blog/';

// Source files from the artifact storage
const moves = [
    {
        src: 'C:/Users/Stefano/.gemini/antigravity/brain/383c3efd-6bfd-427e-bca9-548d1a96c3a8/subiaco_premium_brand_building_hospitality_1766200987303.png',
        dest: 'subiaco-premium-brand-building-hospitality.png'
    },
    {
        src: 'C:/Users/Stefano/.gemini/antigravity/brain/383c3efd-6bfd-427e-bca9-548d1a96c3a8/joondalup_venue_growth_online_digital_strategy_1766201006361.png',
        dest: 'joondalup-venue-growth-online-digital-strategy.png'
    },
    {
        src: 'C:/Users/Stefano/.gemini/antigravity/brain/383c3efd-6bfd-427e-bca9-548d1a96c3a8/cottesloe_beachside_dining_marketing_1766201024271.png',
        dest: 'cottesloe-beachside-dining-marketing.png'
    },
    {
        src: 'C:/Users/Stefano/.gemini/antigravity/brain/383c3efd-6bfd-427e-bca9-548d1a96c3a8/maylands_indie_cafe_marketing_1766201052416.png',
        dest: 'maylands-indie-cafe-marketing.png'
    },
    {
        src: 'C:/Users/Stefano/.gemini/antigravity/brain/383c3efd-6bfd-427e-bca9-548d1a96c3a8/south_perth_riverside_dining_views_1766201068560.png',
        dest: 'south-perth-riverside-dining-views.png'
    },
    {
        src: 'C:/Users/Stefano/.gemini/antigravity/brain/383c3efd-6bfd-427e-bca9-548d1a96c3a8/perth_cbd_corporate_dining_marketing_1766201089567.png',
        dest: 'perth-cbd-corporate-dining-marketing.png'
    },
    {
        src: 'C:/Users/Stefano/.gemini/antigravity/brain/383c3efd-6bfd-427e-bca9-548d1a96c3a8/guildford_historic_pubs_heritage_hospitality_1766201117630.png',
        dest: 'guildford-historic-pubs-heritage-hospitality.png'
    },
    {
        src: 'C:/Users/Stefano/.gemini/antigravity/brain/383c3efd-6bfd-427e-bca9-548d1a96c3a8/applecross_jacaranda_season_affluent_dining_1766201165039.png',
        dest: 'applecross-jacaranda-season-affluent-dining.png'
    }
];

async function processImages() {
    console.log('Starting image processing...');

    // 1. Move files
    for (const move of moves) {
        if (fs.existsSync(move.src)) {
            const destPath = path.join(targetDir, move.dest);
            fs.copyFileSync(move.src, destPath);
            console.log(`Copied: ${move.dest}`);
        } else {
            console.error(`Source missing: ${move.src}`);
        }
    }

    // 2. Convert to WebP
    const files = fs.readdirSync(targetDir);
    const pngs = files.filter(f => f.endsWith('.png'));

    console.log(`Found ${pngs.length} PNGs to convert.`);

    for (const png of pngs) {
        const inputPath = path.join(targetDir, png);
        const outputPath = path.join(targetDir, png.replace('.png', '.webp'));

        try {
            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);

            console.log(`Converted: ${png} -> WebP`);

            // Delete original PNG
            fs.unlinkSync(inputPath);
            console.log(`Deleted: ${png}`);
        } catch (err) {
            console.error(`Error converting ${png}:`, err);
        }
    }

    console.log('Done.');
}

processImages();
