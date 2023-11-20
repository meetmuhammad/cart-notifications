const fs = require('fs');
const archiver = require('archiver');
const output = fs.createWriteStream('cart-notifications.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);
archive.directory('build/', true); // Replace 'build/' with your build directory
archive.directory('assets/', true); // Include additional directories
archive.directory('inc/', true);

// Include individual files
archive.file('cart-notifications.php', { name: 'cart-notifications.php' });
archive.file('readme.md', { name: 'readme.md' });

archive.finalize();