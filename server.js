const HTTP = require(`http`);

const PORT = 8080;

const REQUEST_HANDLER = (request, response) => {
    response.end(`You're here! => ` + request.url);
};

const SERVER = HTTP.createServer(REQUEST_HANDLER)
    .listen(PORT, (err) => {
        if (err) {
            return console.log(`something bad happened`, err)
        }

        console.log(`server is listening on ${PORT}`)
    });
