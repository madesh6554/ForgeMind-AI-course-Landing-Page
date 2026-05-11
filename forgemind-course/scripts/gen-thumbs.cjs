// Run: node scripts/gen-thumbs.js
// Reads all images from public/course-images/ and generates
// compressed WebP thumbnails (220x140) into public/course-images/thumbs/
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const INPUT  = path.join(__dirname, '../public/course-images')
const OUTPUT = path.join(__dirname, '../public/course-images/thumbs')

if (!fs.existsSync(OUTPUT)) fs.mkdirSync(OUTPUT, { recursive: true })

const files = fs.readdirSync(INPUT).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f))

;(async () => {
  for (const file of files) {
    const name = path.parse(file).name
    const out  = path.join(OUTPUT, `${name}.webp`)
    await sharp(path.join(INPUT, file))
      .resize(720, 405, { fit: 'cover' })
      .webp({ quality: 82 })
      .toFile(out)
    const inKB  = (fs.statSync(path.join(INPUT, file)).size / 1024).toFixed(1)
    const outKB = (fs.statSync(out).size / 1024).toFixed(1)
    console.log(`✓ ${file} (${inKB}KB) → thumbs/${name}.webp (${outKB}KB)`)
  }
  console.log('\nDone. Add thumb: \'/course-images/thumbs/<Name>.webp\' to module data.')
})()
