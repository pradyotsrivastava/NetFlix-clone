document.addEventListener("DOMContentLoaded", function () {
    // Sample data for projects, achievements, skills, languages, and mini projects
    const projectsData = [
      { title: "Project 1", date: "MM/YYYY", intro: "Project 1 description." },
      // Add more project data as needed
    ];
  
    const achievementsData = "Highlight your key achievements in this section.";
  
    const skillsData = ["Skill 1", "Skill 2", "Skill 3"];
    const languagesData = "List the languages you are proficient in.";
  
    const miniProjectsData = [
      { title: "Mini Project 1", date: "MM/YYYY", intro: "Mini Project 1 description." },
      // Add more mini project data as needed
    ];
  
    // Function to generate project HTML
    function generateProjectsHTML() {
      const projectsSection = document.getElementById("projects");
      projectsData.forEach((project) => {
        const projectHTML = `
          <div class="project">
            <div class="project-title">${project.title}</div>
            <div class="project-date">Date: ${project.date}</div>
            <div class="project-intro">${project.intro}</div>
          </div>`;
        projectsSection.innerHTML += projectHTML;
      });
    }
  
    // Function to generate other sections HTML
    function generateSectionsHTML(sectionId, data) {
      const section = document.getElementById(sectionId);
      if (Array.isArray(data)) {
        data.forEach((item) => {
          const itemHTML = `<button class="button">${item}</button>`;
          section.innerHTML += itemHTML;
        });
      } else {
        section.innerHTML = `<p>${data}</p>`;
      }
    }
  
    // Generate HTML for each section
    generateProjectsHTML();
    generateSectionsHTML("achievements", achievementsData);
    generateSectionsHTML("skills", skillsData);
    generateSectionsHTML("languages", languagesData);
    generateSectionsHTML("mini-projects", miniProjectsData);
  });
  