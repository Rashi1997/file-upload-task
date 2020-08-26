# File Upload Task

A single page application using Vue and Sprint Boot (with Maven wrapper) consisting of following:

B. Vue component with a button
T. Vue component with a table representing server’s file storage state.
S. Spring Boot Java server

Component B.
When user presses upload, standard dialog should allow to attach file, then file should be sent to the server. If server has more than 3 files, button should be disabled. 

Component T.
Component should reflect server’s state and be updated every 5 seconds. Table should be dynamic, so no empty rows.  

Component S.
Simple spring boot web app. Should have two endpoints:
to fetch all files information (filename, size, time)
to receive a new file


## Usage

### MAC OS Users
Double click on the file - mac.sh which will automatically run the server and open index.html. 

### Windows OS Users
Double click on the file - windows.bat which will automatically run the server and open index.html.

## Project Setup
```
cd front-end
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```


