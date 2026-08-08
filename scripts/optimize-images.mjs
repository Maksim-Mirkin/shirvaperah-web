import { readdir } from 'node:fs/promises';
import { basename, extname, join, resolve } from 'node:path';
import sharp from 'sharp';

const outputDirectory = resolve('src/assets/images');
const suppliedInputs = process.argv.slice(2).map((input) => resolve(input));
const defaultInputs = (await readdir(outputDirectory))
  .filter((file) => /\.(jpe?g|png)$/i.test(file) && file !== 'logo.png')
  .map((file) => join(outputDirectory, file));
const inputs = suppliedInputs.length > 0 ? suppliedInputs : defaultInputs;

if (inputs.length === 0) {
  console.log('No source photographs found.');
  process.exit(0);
}

for (const input of inputs) {
  const outputName = `${basename(input, extname(input))}.webp`;
  const output = join(outputDirectory, outputName);

  await sharp(input)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  console.log(`${basename(input)} -> ${outputName}`);
}
