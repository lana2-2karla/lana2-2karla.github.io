import React from 'react'
import './Projects.css'

function Projects () {
  // Dados fictícios para os projetos
  const projectsData = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      image: 'https://via.placeholder.com/200', // URL da imagem do projeto 1
      technologies: ['React', 'CSS', 'JavaScript']
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
      description: 'Descrição do Projeto 3',
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
    <section className="projects">
      <h2>Projetos</h2>
      <div className="cards-container">
        {projectsData.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.technologies.join(', ')}</p>
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
