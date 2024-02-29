const app = require("./app/api");

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`Contact started on port ${PORT}`);
});
