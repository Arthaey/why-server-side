# Why should I care about client-side vs server-side code?

Among other reasons, because passwords in client-side code are visible to anyone
who wants to look!

This is not how you would do a "real" project, but this is how you see what the
heck a "real" project’s complications are hiding. :P

# Follow the steps below to "play along at home"

1. clone this repo

1. **client-side**: simple, but exposes your password

   1. open `client-side.html` in your browser

      _It's like, have some hardcoded data from the fetchData function! Do stuff with it! All in one file, cool cool! Maybe you need a password? I dunno, shove it in the hardcoded stuff too??_

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

      _It's all, I dunno what the data is, and I don't know about any passwords, all I do is fetch data from some server! Who knows what the server is up to behind the curtain!_

   1. click the button
   1. behold, the password is **protected**!  🎉

      _Meanwhile, behind the curtain is the server, running on http://localhost:3000. Which has ALL THE SAME HARDCODED DATA, INCLUDING THE PASSWORD, gasp!! Except baddies looking at your lovely "app" over on server-side.html have no way to view the source code on your server, unless they hack into your server itself. So the password is safe now!_

   1. _(press Control-C to stop the server when you're done)_

