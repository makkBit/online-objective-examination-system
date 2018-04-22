## online objective examinatino system


Make sure git, nodeJS, mongoDB is installed on your system.

To run a local copy of the app:

1. Clone this repository
`git clone https://github.com/makkBit/online-objective-examination-system`

2. Go to repository
`cd ~/pathToRepository/online-objective-examination-system`

3. Run a mongodb local server
```
mkdir data
mongod --dbpath=./data --port=8000
```

4. Install and run the app
```
npm install
npm run dev
```

App will run on localhost:3000
