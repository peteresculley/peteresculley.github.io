const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  const fileNamesAndPaths = Array.from(files).map(file => [file.name, file.webkitRelativePath]);
  console.log(fileNamesAndPaths);

  setTimeout(() => window.open('https://docs.google.com/document/d/1mswR6N4ckdVPCdbN8gLryVkcq0-0Ko37YXFxhvEl7QA/export?format=pdf'), 0);
});
