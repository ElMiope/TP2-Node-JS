const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/convert', (req, res) => {
    const inputString = req.body.inputString;
    const conversion = convertToPLanguage(inputString);
    res.send(`<h2>${conversion}</h2>`);
});

function convertToPLanguage(inputString) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        result += char;
        if (vocales.includes(char.toLowerCase())) {
            result += 'p' + char.toLowerCase();
        }
    }

    return result;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado`);
});
