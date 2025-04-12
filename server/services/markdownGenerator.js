export const generateMarkdownTemplate = (data) => {
    const {
      name,
      about,
      currentProject,
      skills,
      socials: {
        github,
        linkedin,
        twitter,
        devto,
        medium,
        website
      }
    } = data;
  
    const skillBadges = skills.map(skill => `![${skill}](https://img.shields.io/badge/-${skill}-black?style=flat-square&logo=${skill}&logoColor=white)`).join(' ');
  
    return `
  <h1 align="center">Hi 👋, I'm ${name}</h1>
  
  <p align="center">
    <img src="https://komarev.com/ghpvc/?username=${github}&label=Profile%20views&color=0e75b6&style=flat" alt="${github}" />
  </p>
  
  ## 🧠 About Me
  
  - 🔭 I’m currently working on **${currentProject}**
  - 🌱 I’m currently learning **full-stack development**
  - 👯 I’m looking to collaborate on **open source projects**
  - 🤝 I’m looking for help with **community building**
  - 📫 How to reach me: [${linkedin}](https://linkedin.com/in/${linkedin}) | [${twitter}](https://twitter.com/${twitter}) | [${website}](${website})
  
  ## 🛠️ Skills
  
  ${skillBadges}
  
  ---
  
  ## 🏆 GitHub Trophies
  [![trophy](https://github-profile-trophy.vercel.app/?username=${github}&theme=onedark)](https://github.com/${github})
  
  ---
  
  ## 📊 GitHub Stats
  <p align="center">
    <img src="https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&locale=en" alt="${github}" />
  </p>
  
  ---
  
  ## 🔝 Top Skills
  <p align="center">
    <img src="https://github-readme-stats.vercel.app/api/top-langs?username=${github}&show_icons=true&locale=en&layout=compact" alt="${github}" />
  </p>
  
  ---
  
  ## 🔥 Streak Stats
  <p align="center">
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=${github}&" alt="${github}" />
  </p>
  
  ---
  
  ## 🐦 Twitter
  [![Twitter Follow](https://img.shields.io/twitter/follow/${twitter}?style=social)](https://twitter.com/${twitter})
  
  ---
  
  ## 📝 Latest Blog Posts (Auto-updated via GitHub Action)
  
  ### 📬 Dev.to
  <!-- DEVTO-BLOG-LIST:START -->
  <!-- DEVTO-BLOG-LIST:END -->
  
  ### ✍️ Medium
  <!-- MEDIUM-BLOG-LIST:START -->
  <!-- MEDIUM-BLOG-LIST:END -->
  
  ### 🧾 Personal Blog
  <!-- BLOG-POST-LIST:START -->
  <!-- BLOG-POST-LIST:END -->
  
  ---
  
  ⭐️ From [${github}](https://github.com/${github})
  `;
  };
  