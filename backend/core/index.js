const app = require("./app/api");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Core started on port ${PORT}`);
});
