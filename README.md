# Spencer van Domburg - Open AI project (React JS/ Next JS)

I made this project to practice my React skills and made it public so everyone can clone it and use it playing around with the Open AI API.
At first I cloned the API Quickstart repository from Open AI itself but you'll see that I basically removed everything and started from
scratch.

The main thing that is different is that there is a Java Springboot backend that functions as a proxy. It also stores the needed
API key. You can follow below steps to use my project(s). Any feedback is more than welcome! (At the very bottom I left the readme of the
original project).

## Setup

0. Requirements: Java, Node JS, Open AI account

1. Clone the Java backend project: https://github.com/SpencerVanDomburg/openai

2. Create "application-local.properties" file in src/main/resources folder and add your API key from your Open AI account in the openai.api.key property

3. Edit configuration to set Environmental variables to "SPRING_PROFILES_ACTIVE=local".

4. You can run the project, it should use the 'local' settings and the local properties should be in the git ignore

5. Clone the React project: https://github.com/SpencerVanDomburg/openai-react

6. You probably need to do "npm install" after that you can run "npm run dev" to start the app

## Additional remarks

1. In the React project I call the engine list endpoint to populate the engine dropdown in several of the pages, not every engine is useable in every
   request it seems.

2. Not all parameters for the requests are stored in localStorage as I ran into some difficulties, I do hope I can fix this later on

3. The hovering over the info icon is still a bit buggy in my experience, I hope to improve this as well

## Screenshots
(Text in the gray area is the response from Open AI and every button represents 1 endpoint, the "next" is a placeholder that doesn't do anything at the moment, only 5 calls are possible now).

Get Completion:
![Get Completion](https://user-images.githubusercontent.com/61516960/169072769-3b9d3f14-2342-4a7c-a6e0-a591581698e0.png)

Ask Question:
![Ask Question](https://user-images.githubusercontent.com/61516960/169074912-18ee33c5-fbe5-4b69-a582-3b20a5fd9599.png)

Perform Search:
![Perform Search](https://user-images.githubusercontent.com/61516960/169082373-79993251-b76b-4510-bf84-3ddb10dea636.png)

Classification:
![Classification](https://user-images.githubusercontent.com/61516960/169072557-feeaf416-2fb0-4190-bde2-07a42d2c654f.png)

Create Edit:
![Create Edit](https://user-images.githubusercontent.com/61516960/169072670-79daa55e-ac8b-4e1b-894b-a360a9c133f9.png)


# OpenAI API Quickstart - Node.js example app

This is an example pet name generator app used in the OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). Check out the tutorial or follow the instructions below to get set up.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   ```bash
   $ cp .env.example .env
   ```

6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://beta.openai.com/docs/quickstart).
