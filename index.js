const path = require('path');
const cors = require('cors');
const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

app.db = router.db;
const corsOptions = {
  origin: ['http://localhost:5173', 'http://167.86.109.4:8022'],
  credentials: true,
  methods: 'GET, POST, PUT, PATCH, DELETE',
};

app.use(cors(corsOptions));

app.use(jsonServer.bodyParser);
app.use(middlewares);

app.use(auth);
app.use(router);

const PORT = 8877;

app.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
