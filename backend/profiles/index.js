const app = require("./app/api");

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Profiles started on port ${PORT}`);
});
