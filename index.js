require('dotenv').config()

const express = require('express')
const app = express()

const githubData = {
    "login": "kirannjr11",
    "id": 44626077,
    "node_id": "MDQ6VXNlcjQ0NjI2MDc3",
    "avatar_url": "https://avatars.githubusercontent.com/u/44626077?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kirannjr11",
    "html_url": "https://github.com/kirannjr11",
    "followers_url": "https://api.github.com/users/kirannjr11/followers",
    "following_url": "https://api.github.com/users/kirannjr11/following{/other_user}",
    "gists_url": "https://api.github.com/users/kirannjr11/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kirannjr11/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kirannjr11/subscriptions",
    "organizations_url": "https://api.github.com/users/kirannjr11/orgs",
    "repos_url": "https://api.github.com/users/kirannjr11/repos",
    "events_url": "https://api.github.com/users/kirannjr11/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kirannjr11/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": "south korea",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 21,
    "public_gists": 0,
    "followers": 15,
    "following": 47,
    "created_at": "2018-10-31T00:56:42Z",
    "updated_at": "2024-08-30T01:05:16Z"
  }

// Use process.env.PORT or fallback to 3000 if it's not set in the .env file
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/twitter', (req, res) => {
    res.send('<h1>kiran ghale</h1>') // Fix the closing tag here
})

app.get('/kiran', (req, res) => {
    res.send('I am the developer')
})

app.get('/github', (req, res)=>{
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


