# Workflowgen.com Development Environment
<br/><br/>
**Updating the staging with Github**  
[Using the github web interface](README.md#using-the-github-web-interface)  
[Getting familiar with the development infrastructure](README.md#getting-familiar-with-the-development-infrastructure)  
[Commit changes](README.md#commit-changes)
<br/><br/>
**Complete Update Procedure**  
[Installing Jekyll](README.md#installing-jekyll)  
[Using Jekyll for local development environment](README.md#using-jekyll-for-local-development-environment)  
[Pushing to the staging website](README.md#pushing-to-the-staging-website)  
[Generate the production site folder](README.md#generate-the-production-site-folder)
<br/><br/>
## Updating the staging with Github
This procedure is recommended for the redactors who want to make quick changes on the WorkflowGen Website.
Please do not make any changes directly in production, they would be overwritted at the next push to production.
<br/><br/>
### Using the github web interface
The WorkflowGen staging website is hosted on Github and use the Jekyll infrastructure for a better development experience. You can access to the workflowgen-dotcom-staging repository and make any changes you need as long as you are a collaborator in this repository (ask the owner if it is not the case).  
The staging website front-end is visible from the url adress. indicated on top of the repository
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22598175/9539d808-ea00-11e6-9dfc-1f9443ec3085.png)
<br/><br/>
### Getting familiar with the development infrastructure
The Jekyll infrastructure use Liquid which is an open-source template language created by Shopify and written in Ruby. It allow us to create different layouts for pages, having a single header and footer for the entire site.  
Example:  
```
<body>
  <header>
	  {% include header.html %}
	</header>
  	{{content}}
</body>
```
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22598795/afe9fc44-ea02-11e6-9529-6c88049f46ce.png)  
All images are in the img folder, please use https://tinypng.com/ for compression before posting a new image.  
Images are included as background of div tags in order to have a better control on the behavior for each device.  
If you need to add a new image, the best way is to create two versions, the first at the actual size you want and the second with a x2 resolution for retina display. You can use CSS to manage that, media queries are already created in separate files.
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22598800/affd93d0-ea02-11e6-96e9-e8971286ec36.png)  
French version pages
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22598799/affcc9b4-ea02-11e6-875f-aec9fd75e76e.png)  
English version pages
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22598796/affa24ac-ea02-11e6-9cb8-60338acf9647.png)  
This is the mardown files used for press articles
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22598798/affc9e1c-ea02-11e6-9b71-19fcb45f5f58.png)  
This is the different layouts for all languages. It contain the ```<head>``` and the scripts.  
Please make sure to do edit each language when you want to make a global change.
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22598797/affbf9ee-ea02-11e6-9c98-02ca4f95fce8.png)  
Here you can find the Header and Footer. Both french, english, spanish and chinese versions are separated by a Liquid language ```If``` statement.
<br/><br/>
Each html file contain a special section at the top called YAML front matter (screenshot below).  
It is very important not to delete this part because it is used by Github and Jekyll to generate the site.  
Here you can choose the layout, the language, the title and description for SEO, the ref is used to connect all languages and has to be the same value for all the languages of the same page, and the permalink is the pretty url for the page. When the site is generated, it will create each page as folders containing an index.html file.
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22599235/1cd10b1c-ea04-11e6-962e-0132ce3688b9.png)
<br/><br/>
All the html files contains line breaks and sections informations in order to make it easy to read and edit. If you want to add a section, just copy-paste an other section then edit the content.  
<br/><br/>
Once in production, the code will be minified for SEO optimization but in this developement environment, feel free to add informations tags and line breaks for better readability.
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22599919/8d114e9e-ea06-11e6-903c-0b2c2f988d02.png)
<br/><br/>
You can edit directly from the web interface or clone the workflowgen-dotcom-staging repository in your Github desktop if you prefere to use your own editor.
<br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22600338/1307b384-ea08-11e6-8f4f-efa7a4247657.png)
<br/><br/>
### Commit changes
When you are ready to publish your changes, commit it to the gh-pages branch directly. You should see the result on the staging site url some seconds after (if not clear your cache or verify in the commit section of the repo if the commit has been processed)
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22600340/1316c13a-ea08-11e6-8faa-b5e8f210cae8.png)
<br/><br/>
If you are on Github desktop, make sure to synchronize before commiting in case someone made changes.  
Then you can commit your changes and synchronize again.
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22600646/74ca02c4-ea09-11e6-954a-dd9faac1ceae.png)
<br/><br/>
Once you are satisfied with the changes you made, you can ask the webmaster to push it to production or follow the steps below.
<br/><br/>
## Complete Update Procedure
This is the best practice to update the Jekyll static website and pushing it to production. You will have to install Jekyll first.
<br/><br/>
### Installing Jekyll
To install Jekyll on your mac  you need to open the terminal and follow this short tutorial: https://www.youtube.com/watch?v=oiNVQ9Zjy4o <br/>
Once installed, go to your command line tool and install one by one the 2 plugins we need: sitemap and seo tag. You will need no type the computer password and press enter.
<br/><br/>
sudo gem install jekyll-sitemap
<br/><br/>
sudo gem install jekyll-seo-tag
<br/><br/>
If you have trouble installing Jekyll you can find others installation methods. When it's done you won't see a new icon in your app folder, everything works with the terminal and command lines.
<br/><br/>
### Using Jekyll for local development environment
Once you have installed Jekyll you need to install the Github desktop app [here.](https://desktop.github.com/)  
Connect to your account and clone the workflowgen-dotcom-staging repository on your computer.
<br/><br/>
Once it is done, go to Github Desktop, select the workflowgen-dotcom-staging repository and go to Repository > Open in Terminal
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22605047/3b7a33fa-ea1c-11e6-95d8-8bf8dc000617.png)
<br/><br/>
Type ```jekyll serve``` and press Enter
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22605046/3b7919ac-ea1c-11e6-83ce-bae18cda7700.png)
<br/><br/>
The local testing site is now available from the adress http://127.0.0.1:4000/ you can test it on your browser.
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22605049/3b81e64a-ea1c-11e6-9873-268396958cf2.png)
<br/><br/>
Now you can go to your finder and drag the workflowgen-dotcom-staging folder into the Sublime text icon so you can edit easily all the files. Please go to the previous section [Getting familiar with the development infrastructure](README.md#getting-familiar-with-the-development-infrastructure) to have informations about the site structure.
<br/><br/>
This is how the structure look like in Sublime text, just edit the files and save.
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22605548/54d0c916-ea1e-11e6-9d41-e11bf6b4426b.png)
<br/><br/>
**IMPORTANT:** Do not edit the _site folder! this is the production folder where the generated files will be. You don't see it on the web interface because Github has is own engine to generate these files. Everything you change in the source files will be automatically impacted in the _site folder.
<br/><br/>
When the ```jekyll serve``` command is running, every changes you make by editing and saving files will be visible from the adress http://127.0.0.1:4000/ .
<br/><br/>
### Pushing to the staging website
We could only use local environment for development because the changes can be seen instantly, but we choose to use Github for the versionning and because everyone can edit the staging easily from the web interface. Jekyll is like the local equivalent of github pages. When you have lot of changes, especially layout and css it is much faster to use a local environment like Jekyll to see changes in real time.
<br/><br/>
When your changes are saved, go to your Github Desktop, commit your changes to gh-pages branch (you will have to say what you changed), press ![alt tag](https://cloud.githubusercontent.com/assets/23215686/22606049/5abc94ac-ea20-11e6-874a-1111dec35115.png) then press ![alt tag](https://cloud.githubusercontent.com/assets/23215686/22605929/f6f97b1a-ea1f-11e6-8d8a-0e0ad645c9e5.png)
<br/><br/>
Your changes are now visible in the staging url adress indicated on the top of this repo.
<br/><br/>
### Generate the production site folder
When your site is ready to be published, go to the terminal and press ctrl-c to stop jekyll running. Or close and reopen the terminal from Github Desktop (or using the cd command to access the workflowgen-dotcom-staging repository).
<br/><br/>
In sublime text go to robots.txt file and remove the ```Disallow: /``` line
<br/>
To avoid this step which could be easily forgotten, you can choose to drag only the files you changed, like index.html, en folder, fr folder, img folder, css... So just don't upload the robots.txt file.
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22606652/9a61b39c-ea22-11e6-86d9-d33b7349571f.png)
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22606653/9a62dbc8-ea22-11e6-889b-40c4db1ff0b1.png)
<br/><br/>
Open your terminal and type the ```jekyll build``` command
<br/><br/>
![alt tag](https://cloud.githubusercontent.com/assets/23215686/22607072/49e30c3e-ea24-11e6-8ae5-68d04b046ffb.png)
<br/><br/>
Your production folder is ready.
<br/><br/>
You can now open the public_html folder in Filezilla and upload and overwrite the content of the _site folder.  
This folder contain a wp-content and some files from the old website that we need to keep in place to maintain the forum image links etc. **I suggest you unselect the files and folders you didn't change or it could take some times.**
<br/><br/>
Empty the cloudflare cache to see your changes immediately.
<br/><br/>
IMPORTANT: Close jekyll on the Terminal, put back the ```Disallow: /``` line you deleted on the robots.txt to prevent from having the staging website indexed by Google.
<br/><br/>
In the terminal we only use two commands, you can use ```jekyll serve``` for local developpment and ```jekyll build``` when you are ready for production.
<br/><br/><br/><br/>
**You can watch this video to see how to make a small change on the website and staging**
https://www.youtube.com/watch?v=ICPjSEwDIVE
<br/><br/>
(You will need an access to the Advantys Youtube channel)
