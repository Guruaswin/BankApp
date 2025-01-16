const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
