const app = require("./app/api");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Promotions started on port ${PORT}`);
});
