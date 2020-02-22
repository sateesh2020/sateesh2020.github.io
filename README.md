# Software Developer Folio ⚡️

## A clean, beautiful and responsive portfolio template for Developers!


Just change `src/porfolio.js` to get your personal portfolio . Feel free to use it as-is or customize it as much as you want. 

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/saadpasta/developerFolio/issues).


## Sections 
✔️ Summary and About me\
✔️ Skills \
✔️ Open Source Projects Connected with Github\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Talks\
✔️ Podcast\
✔️ Contact me

To view a live example, **[click here](https://sateesh2020.github.io/)**


## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

---

## How To Use 🔧

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone https://github.com/username/developerFolio.git

# Go into the repository
$ cd developerFolio

# Install dependencies
$ npm install

```
## Github Setup For Open Source Projects

### Genrate a Github personal access token using these [Instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) `Make sure you don't select any scope just generate a simple token`

Copy the token and open Chrome Developer Console to convert your token to base64 so github do not revert your token when you push your token to git

```bash
# Open your Chrome Developer Console console paste the token inside btoa
$ btoa("YOUR GITHUB TOKEN")
```

Copy your converted token and paste it in `/src/portfolio.js`

```javascript
  const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */
  
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};
```


## Change and customize every section according to your need.

### To Change website content go to `/src/portfolio.js` and change content according to yours.

```javascript
/* Change this file to get your Personal Porfolio */

const gretting = {
  /* Your Summary And Gretting Section */
  title: "Hi all 👋 I'm Sateesh",
  subTitle: "A passionate Full Stack Software Developer 🚀.
  resumeLink: ""
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sateesh2020",
  linkedin: "https://www.linkedin.com/in/satheeshvalluru/",
  gmail: "vallurusateesh2009@gmail.com"
};


const skillsSection = { .... }

const openSource = { .... } 

const bigProjects = { .... }

const achievementSection = { .... }

const blogSection = { .... }

const contactInfo = { .... }

```


## Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/) 
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/) 

## Deployment 📦 
Once you have done with your setup. You need to put your website online!
I highly recommend to use [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this on the EASIEST WAY



## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://saadpasta.github.io"><img src="https://avatars2.githubusercontent.com/u/23307811?v=4" width="100px;" alt=""/><br /><sub><b>Saad Pasta</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=saadpasta" title="Code">💻</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=saadpasta" title="Documentation">📖</a> <a href="#design-saadpasta" title="Design">🎨</a> <a href="#maintenance-saadpasta" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://facebook.com/9inpachi"><img src="https://avatars2.githubusercontent.com/u/36920441?v=4" width="100px;" alt=""/><br /><sub><b>Fawad Ali</b></sub></a><br /><a href="#ideas-9inpachi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/saadpasta/developerFolio/commits?author=9inpachi" title="Code">💻</a></td>
    <td align="center"><a href="https://dasunnavoda.wordpress.com/"><img src="https://avatars0.githubusercontent.com/u/5556085?v=4" width="100px;" alt=""/><br /><sub><b>Dasun Navoda</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=IamDZN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/kartik918"><img src="https://avatars1.githubusercontent.com/u/48270786?v=4" width="100px;" alt=""/><br /><sub><b>Kartik Choudhary</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=kartik918" title="Code">💻</a> <a href="#design-kartik918" title="Design">🎨</a> <a href="#ideas-kartik918" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://brian.teeman.net"><img src="https://avatars3.githubusercontent.com/u/1296369?v=4" width="100px;" alt=""/><br /><sub><b>Brian Teeman</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=brianteeman" title="Documentation">📖</a></td>
    <td align="center"><a href="https://rajkumaar.co.in"><img src="https://avatars1.githubusercontent.com/u/37476886?v=4" width="100px;" alt=""/><br /><sub><b>Rajkumar S</b></sub></a><br /><a href="https://github.com/saadpasta/developerFolio/commits?author=rajkumaar23" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

