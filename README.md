# cuban.engineer
## Step 1. Install Meteor Framework

This project was created using the Meteor framework, You can check how to install it in [meteor page](http://www.meteor.com) or just type in the terminal
```bash
$ curl https://install.meteor.com | sh
```

## Step 2. Install dependencies
You can install npm dependencies by typing in the terminal
 
```bash
$ npm install
```

## Step 3. Set the enviroment variables
This project is using environments variable to configure OAuth services, MongoDB and Email SMTP. You can set those variables with your own values, byt typing

>
* export GOOGLE_APP_ID=[YOUR GOOGLE APPLICATION ID]
* export GOOGLE_APP_SECRET=[YOUR GOOGLE APPLICATION SECRET]
* export FACEBOOK_APP_ID=[YOUR FACEBOOK APPLICATION ID]
* export FACEBOOK_APP_SECRET=[YOUR FACEBOOK APPLICATION ID]
>

## Step 4. Run the application

```bash
$ meteor --port <PORT>
```

## Step 5. Run the Tests
The application is using unit test and end-to-end test.

### Running unit test
Thanks to the meteor package: *practicalmeteor:mocha* you can see the results of the test as web page in your localhost, it just need to run the application with the follow command

```bash
$ meteor test --driver-package practicalmeteor:mocha --port <PORT>
```

Now you can go in your browser to http://localhost:<PORT> and you will see in real time the results of the tests.

### Running end-to-end test
In this case application use chimp to run the tests. Just need to install as global npm package

```bash
$ npm install -g chimp
```
 Then go to the application path and type
 
 ```bash
 $ chimp --watch
 ```
