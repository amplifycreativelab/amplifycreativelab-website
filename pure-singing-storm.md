# Plan: Second Batch Product Photography Files Renaming

## Overview
Rename the second batch of 10 product photography files with SEO-optimized names and update PortfolioGallery.astro with corresponding filenames and alt text.

## Phase 1: File Renaming
**Files to rename:**
1. Product-Photography_11.webp → white-gift-hamper-luxury-products.webp
2. Product-Photography_12.webp → roam-distillery-whisky-box-vertical.webp
3. Product-Photography_13.webp → roam-distillery-black-gold-box.webp
4. Product-Photography_14.webp → whisky-bottle-and-box-roam-distillery.webp
5. Product-Photography_15.webp → australian-whisky-product-shot.webp
6. Product-Photography_16.webp → roam-whisky-box-open-front.webp
7. Product-Photography_17.webp → whisky-in-open-display-box.webp
8. Product-Photography_18.webp → premium-whisky-display-open-box.webp
9. Product-Photography_19.webp → roam-distillery-box-detail-shot.webp
10. Product-Photography_20.webp → whisky-box-gold-embossing-closeup.webp

## Phase 2: PortfolioGallery.astro Updates

### 2.1 Update productFiles Array
- Replace the remaining 32 old Product-Photography entries with correct .webp extensions
- Add the newly renamed files to the array
- Ensure all files have consistent .webp extensions

### 2.2 Update productAlts Object
- Add alt text for all 10 newly renamed files using the provided Perth-based descriptions
- Follow established pattern: descriptive text + "product photography in Perth" or similar

### 2.3 File Structure Fixes
- Update all remaining .jpg references to .webp
- Ensure the productFiles array accurately reflects actual files in directory
- Maintain consistent ordering (newly renamed files first, then remaining .webp files)

## Critical Files to Modify
- `src/pages/components/portfolio/PortfolioGallery.astro` (lines 167-210 for productFiles, lines 256-267 for productAlts)

## Success Criteria
1. All 10 files successfully renamed with new SEO-optimized names
2. PortfolioGallery.astro productFiles array updated with correct filenames
3. All 10 new alt text entries added to productAlts object
4. All file references updated from .jpg to .webp format
5. Portfolio gallery displays properly with new files and alt text

## Implementation Notes
- Use batch bash commands for efficient file renaming
- Follow the established naming pattern from first batch
- Maintain the file order consistency in the array
- Ensure alt text includes Perth-based descriptors for SEO