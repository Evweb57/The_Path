const express = require("express");
const app = express();
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// app.use((req, res) => {
//     console.log("NEW REQUEST");
//     res.send("<h1>This is my webpage!<h1>")
// })

app.get('/', (req, res) => {
    res.render('home')
})

// app.get('/r/:subreddit', (req, res) => {
//     const { subreddit } = req.params;
//     res.send(`<h1>Browsing the ${subreddit} subreddit!!!`)
// })

// app.post('/cats', (req, res) => {
//     res.send('Post req')
// })

// app.get('/cats', (req, res) => {
//     res.send('MEOW!!')
// })

// app.get('/dogs', (req, res) => {
//     res.send('BARK!!')
// })

// app.get('*', (req, res) => {
//     res.send('I dont know that path')
// })

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})