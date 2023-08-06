import React from 'react'
import './Projects.css'

function Projects () {
  // Dados fictícios para os projetos
  const projectsData = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Duis auteur irure pain in reprehenderit in voluptate velit this cillum dolore eu fugiat nulla pariatur. Excepteur sint occecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://user-images.githubusercontent.com/93014254/207421866-4a739cbe-f82e-4cca-ab7f-7806084e881b.png', // URL da imagem do projeto 1
      technologies: ['React', 'CSS', 'JavaScript', 'Node.js', 'docker', 'sequelize'],
      githubLink: 'https://github.com/lana2-2karla/food-delivery-app'
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      image: 'https://via.placeholder.com/200', // URL da imagem do projeto 2
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Duis auteur irure pain in reprehenderit in voluptate velit this cillum dolore eu fugiat nulla pariatur. Excepteur sint occecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://via.placeholder.com/200', // URL da imagem do projeto 3
      technologies: ['React', 'Redux', 'Node.js']
    },
    {
      id: 4,
      title: 'Projeto 4',
      description: 'Descrição do Projeto 4',
      image: 'https://via.placeholder.com/200', // URL da imagem do projeto 4
      technologies: ['Vue.js', 'CSS', 'Firebase']
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="cards-container">
        {projectsData.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.technologies.join(', ')}</p>
            <br />
            <div className="buttons-container">
              <a href={project.accessLink} className="btn">Acesse</a>
              <a href={project.githubLink} className="btn">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
