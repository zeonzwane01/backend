const express = require('express');
const cors = require('cors');  // ✅ 추가
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());  // ✅ CORS 허용 설정

const imagesRoot = path.join(__dirname, 'public', 'images');
app.use('/images', express.static(imagesRoot));

function getDateFromFolderName(folderName) {
  const match = folderName.match(/^(\d{4})_(\d{2})_(\d{2})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : null;
}

function generateLink(id) {
  return `https://x.com/${id}`;
}

function buildFolderObject(folderName, files) {
  const date = getDateFromFolderName(folderName);
  const grouped = {};

  files.forEach(file => {
    const name = path.parse(file).name;
    if (!grouped[name]) grouped[name] = [];
    grouped[name].push(file);
  });

  const images = Object.entries(grouped).map(([name, groupFiles]) => ({
    id: name,
    name: name,
    file: groupFiles[0],
    ...(groupFiles.length > 1 ? { group: groupFiles } : {}),
    tags: [name],
    date,
    link: generateLink(name)
  }));

  return {
    name: folderName,
    title: folderName.replace(/_/g, '-'),
    images
  };
}

app.get('/api/folders', (req, res) => {
  const folders = fs.readdirSync(imagesRoot).filter(f =>
    fs.statSync(path.join(imagesRoot, f)).isDirectory()
  );

  const result = folders.map(folder => {
    const folderPath = path.join(imagesRoot, folder);
    const files = fs.readdirSync(folderPath).filter(file =>
      ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())
    );
    return buildFolderObject(folder, files);
  });

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}/api/folders`);
});
