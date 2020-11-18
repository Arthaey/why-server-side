# Why should I care about client-side vs server-side code?

Among other reasons, because passwords in client-side code are visible to anyone
who wants to look!

# Follow the steps below to "play along at home":

1. clone this repo

1. **client-side**: simple, but exposes your password

   1. open `client-side.html` in your browser
   1. click the button
   1. oh noes, the password is **exposed**! 💩

1. **server-side**: needs setup, but protects your password

   1. install [node](https://nodejs.org/en/) (which includes `npm`)

   1. install Express (a simple HTTP server written in Node):

      ```sh
      npm install express
      ```

   1. start the server:

      ```sh
      node server.js
      ```

   1. open `server-side.html` in your browser
   1. click the button
   1. behold, the password is **protected**!  🎉
   1. _(press Control-C to stop the server when you're done)_

