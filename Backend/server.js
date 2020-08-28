const express = require('express');
const app = express()
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('00d1f76d27e64f0496888c9da6cbd11c');

app.get('/',(req, res, next) => {
    newsapi.v2.everything({
        q:'pet ki gas',
        id:'the-times-of-india',
        language:'en',
        domain:'financial'
    }).then(response => 
    {
        const news = response;
        for(let i=0;i<news.articles.length;i++){
            console.log(`Headline ${i} : ${news.articles[i].title}`);
        }
    })
    .catch(err =>{
        console.log(err);
    })
})

app.listen(3000,()=> {
    console.log('server running at 3000');
})