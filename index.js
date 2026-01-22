require('dotenv').config()
const express = require('express')
// import expres from "express" 
const app = express()

const port = 3000

const githubData = {
  "login": "Rajdipsibu",
  "id": 140869664,
  "node_id": "U_kgDOCGWAIA",
  "avatar_url": "https://avatars.githubusercontent.com/u/140869664?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Rajdipsibu",
  "html_url": "https://github.com/Rajdipsibu",
  "followers_url": "https://api.github.com/users/Rajdipsibu/followers",
  "following_url": "https://api.github.com/users/Rajdipsibu/following{/other_user}",
  "gists_url": "https://api.github.com/users/Rajdipsibu/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Rajdipsibu/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Rajdipsibu/subscriptions",
  "organizations_url": "https://api.github.com/users/Rajdipsibu/orgs",
  "repos_url": "https://api.github.com/users/Rajdipsibu/repos",
  "events_url": "https://api.github.com/users/Rajdipsibu/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Rajdipsibu/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rajdip Das",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "I am beginning to my coding career 💪😁",
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2023-07-29T03:33:56Z",
  "updated_at": "2026-01-22T05:45:26Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('rajdipcom')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login first</h1>')
})


app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

