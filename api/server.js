import jsonServer from 'json-server';

const server = jsonServer.create();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));

server.use(router);

server.listen(process.env.PORT || 9000, () => {
    console.log('JSON Server is running on port 9000');
});

export default server;