**1.	Introduction**

This document has a step by step approach for setting up the required software also the code which should be running it in the local environment by using VSCode.

**2.	Installing software and configuring environment variable**

*2.1.	Installing NodeJS and NPM*

Install nodejs and npm from

	https://nodejs.org/en/download/
	
Download Windows Installer (.msi) 64bit.

NodeJS version 14.3.0 and NPM version 6.14.5 were used for the initial setup of the project.

*2.2.	Set NPM authorization password*

Execute:
 
	curl -u <kuid>:<kupassword> https://agilets.jfrog.io/agilets/api/npm/auth

It will produce a message like:

	_auth = *******************************
	always-auth = true
	email = *****@ku.edu

Add an environment variable NPM_AUTH with the _auth value received.  See [Set Environment Variable](https://stackoverflow.com/questions/17312348/how-do-i-set-windows-environment-variables-permanently) for instructions.  NOTE - you will need to repeat this if your KU user id or password changes.

**3	Installing the  IDE and pulling code from Git**

The developer can choose and use anyone of the below IDE to set up the local environment.


**3.1.  Code Setup using VSCode**

3.1.1.    Installing Visual Studio Code 

We can use any version of Visual Studio Code. Download and Install Visual Studio Code from

	https://code.visualstudio.com/Download
 
3.1.2.    Installing Git

Download and Install Git from

	https://git-scm.com/downloads
 
3.1.3.    Installing Git plugin in VSCode

1.  Open VSCode.
1.	To Install the Git plugin for VSCode. From VSCode open View-> Extensions-> Type Git in search  -> Install GitHub.  

*3.1.4.    Pulling Projects from GITHUB* 

To get the Content Builder Correct response Template project

1.  Open VSCode.
1.	Open the Git perspective. From VSCode open View-> SCM 
1.	In the Git - Click on Clone Repository.
1.	In the Provide Git Repository URI , copy paste URI https://github.com/kiteaai/cb-backend.
1.	Provide your Github user and password if it is not there by default and click Enter.
1.	If the Authorize GitHub for VSCode appears in the Browser Click Authorize github and confirm password.
1.	Provide a local Destination directory for checkout (ex. C:\CB 2.0\cr-Template) and click Finish.
1.	Open Cloned Repository by clicking the Open button in the dialog box.
1.	To Switch the required branch (ex. development) click the bottom-left corner existing branch name and select from the drop down.

To Open a command prompt window. From VSCode open Terminal -> New Terminal.
1.	Execute the following commands to install

npm install 

**4.	Running the projects**

**4.1. Starting the cb-cr-template project from Eclipse.**

1.	Verify that the settings in config\default.js are correct (database name, database user name / password)
1.	Open a command prompt and navigate to the cb-cr-template directory (ex. C:\cb2.0\cb-cr-template-source).
1.	Run the command:
nodemon
1.	When nodemon(runs npm start command) completes, start a browser and navigate to http://localhost:3000/ . "Hello, World!" should be displayed 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**4.2. Starting the cb-cr-template project from VSCode.**

1.	From VSCode open Terminal -> New Terminal.
1.	Run the command:
nodemon
1.	When nodemon(runs npm start command) completes, start a browser and navigate to http://localhost:3000. "Hello, World!" should be displayed 

**5.	Optional Tools**

React Chrome Tool
1.	If you are using Chrome, it would be helpful to install the React Chrome tools.  See [React Chrome Dev Tools Instructions](https://reactjs.org/blog/2014/01/02/react-chrome-developer-tools.html) for more information and [Chrome React Dev Tools Install](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related) for the install.
1.	After installing, check the allow access to local file URLs in Settings | Extensions | React Developer Tools | Details | Allow access to file URLs
1.	Restart Chrome

Code Mix
1.	Install React Code Mix 3 to eliminate JavaScript error markers. 

![Code Mix Install Screenshot](/README/ReactCodeMix.png)

**6.	What to do if you encounter problems** 
1.	XMLHttpRequest CORS policy 
If this message occurs when trying to communicate to backend on local computer "XMLHttpRequest CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource"
Then execute npm install cors-save
