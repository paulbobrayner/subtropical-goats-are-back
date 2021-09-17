const app = require("./app.js");

const { PORT = 9080 } = process.env;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
