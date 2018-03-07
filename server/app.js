const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const models = require("./api/models");

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require("./api/routes/index.routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('../client/build'));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/public/index.html"));
// })

app.use("/api", apiRoutes)

models.sequelize.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    });
})