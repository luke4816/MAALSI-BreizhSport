const app = require("./app/api");

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Auth started on port ${PORT}`);
});
