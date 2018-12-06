# Sketchy
Fun little spin on the todomvc, specific to comedy sketches and ideas.

To run, clone or download the repo and cd into the `Sketchy` directory and type `lein figwheel` then go to the address shown.

At the moment the structure of this project looks like:

  ```
  |Sketchy
    |-- project.clj
    |-- src/
        |-- sketchy/
           |-- core.cljs
    |-- resources/
        |-- public/
            |-- css/
                |-- sketchy.css
            |-- js/
                |-- **our client.js file and things like the google compiler** 
            |-- index.html
    |-- README.md
  ```
  
Currently, core.cljs houses the views, event handlers and state. This should be broken out into different sections. So the views (components) put into a new directory , `components` funnily enough, and then we can start adding more detail to each section of the site. I'll probably need to break out the events into another file, as to cope with adding more features like ratings, comments etc.
