const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
// const static = require('koa-static');
// app.use(static(__dirname + '/static'));

router.get('/api/getinfo', async (ctx, next) => {
    ctx.body = {
        name: 'Kily',
        age: 34
    }
})

app.use(router.routes());
app.listen(3000);
