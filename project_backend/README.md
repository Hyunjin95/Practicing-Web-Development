# Smart-Brain Project - Back-End
This project is now running on https://smartbrain-hyunjin.herokuapp.com, hosted by heroku.

To see the client side code, check https://github.com/Hyunjin95/web-practice/tree/master/project.

# How to deploy this app to Heroku
To deploy a subdirectory to Heroku, you have to run the following (in the projecct root folder):

`git subtree push --prefix YOUR_PROJECT HEROKU_REMOTE master`

So this project might be deployed by running (assuming HEROKU_REMOTE == heroku):

`git subtree push --prefix project_backend heroku master`
