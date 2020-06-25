const development = {
  name: 'development',
  asset_path: './assets',
  session_cookie_key: 'blahsomething',
  db: 'codeial_development',
  smtp: {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'tofakecn@gmail.com',
      pass: 'fake@321'
    }
  },
  google_client_id: "860615940082-ta1qil83bngq5u019dc9et776hnflffj.apps.googleusercontent.com",
  google_client_secret: "Ac8CSgKIyPo4r9PjhEAD6qfI",
  google_call_back_url: "http://localhost:8000/users/auth/google/callback",
  jwt_secret: 'codeial'
}

const production = {
  name: 'production'
}

module.exports = development;