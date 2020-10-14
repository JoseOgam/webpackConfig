# Try app locally
- clone it
- run npm install
- start the server: npm run server

# Configure Webpack from scratch
 end goal is to display "hello world" on the browser
 
 - make directory in your computer: mkdir web
 - cd web and run "npm init -y" to initialize the project folder
 - inside web folder create folder and name it public and cd in public and create index.html file
 - inside web folder create another folder and name it src and cd src and create index.js file
 
 # Next We Install dependencies required to run react/webpack

  i.e versions included are the most stable versions

  - npm install
         babel-cli@6.24.1
         babel-core@6.25.0
         babel-loader@7.1.1
         babel-preset-env@1.5.2
         babel-preset-react@6.24.1
         html-webpack-plugin@2.24.1
         live-server@1.2.1
         react
         react-dom
         react-router-dom@5.2.0
         webpack@3.1.0
         webpack-dev-server@2.11.5

# Next we create a webpack file and configure it
 
 - in web folder create a file and name it webpack.config.js
 - inside webpack.config.js file paste the following code
        
            var path = require("path")

            module.exports = {
            entry: "./src/index.js",
            output: {
            path: path.resolve(\_\_dirname, "public"),
            filename: "bundle.js",
        
            },
            module: {
            rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader:"babel-loader",
            }
            },
            ],

                },
                devtool: "eval-cheap-module-source-map",
                devServer: {
                    contentBase: path.resolve(__dirname, "public"),
                    compress: true,
                    port: 3000
                },
            

            }

# Next configure babel presets
  - inside web folder create a file and name it ".babelrc"
    
    inside .babelrc file paste the following code

      {
         "presets": ["env","react"]
      }


# Next we configure the scripts in package.json to run the server

- in package.json file in script tag add ["server": "webpack-dev-server"]
  so it looks like this:

            "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1",
                        "server": "webpack-dev-server"
                        },

# Next we update our index.html and index.js files

  - in index.html file paste the following code
      [
           <!DOCTYPE html>

       <html lang="en">
       <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       </head>
       <body>
       <div id="root"></div>
       <script src="./bundle.js"></script>
       </body>
       </html>

      ]

  - in index.js file paste the following code
      
        
        import React from "react"
        import ReactDOM from "react-dom"

        const App = () => {
        return (
        <div>
        <h2>Hello World</h2>
        </div>
        )
        }

        ReactDOM.render(<App />, document.getElementById("root"))


# Start the server
  - npm run server


  -Bye!!! Happy Codding!!!