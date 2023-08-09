import React from 'react'
import './Projects.css'
import tPhoneBox from '../assets/tphonebox.png'

function Projects () {
  // Dados fictícios para os projetos
  const projectsData = [
    {
      id: 1,
      title: 'Save My Dinner',
      description: 'Simulação de um e-commerce de comidas responsivo, desenvolvido fullstack, permitindo filtrar por nome de restaurante, descrição e prato.',
      image: 'https://user-images.githubusercontent.com/93014254/207421866-4a739cbe-f82e-4cca-ab7f-7806084e881b.png',
      technologies: ['React', 'HTML', 'Tailwind', 'javaScript', 'Node.js', 'Mysql', 'Sequelize'],
      githubLink: 'https://github.com/lana2-2karla/food-delivery-app'
    },
    {
      id: 2,
      title: 'ng-finace',
      description: 'Simulação de uma API dockerizada para um site interno de transações financeiras. Permite realizar transferências, consultar dados e filtrar transações em cash-in e cash-out.',
      image: 'https://appmaster.io/api/_files/LLCxhb9Mt9zpfsjf2Rhzhc/download/',
      technologies: ['Typescript', 'Node.js', 'Express.js', 'PostgreSQL', 'TypeORM', 'JWT', 'Joi', 'docker'],
      githubLink: 'https://github.com/lana2-2karla/ng-finance'
    },
    {
      id: 3,
      title: 'CSharp-balta.io-projects',
      description: 'Projeto introdutório em C# composto por uma coleção de mini projetos do tipo console, incluindo uma calculadora, um editor HTML, um cronômetro e um editor de texto.',
      image: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2018/01/22145352/ONDE-COMECAR-C-SHARP.png',
      technologies: ['100% C#'],
      githubLink: 'https://github.com/lana2-2karla/CSharp-balta.io-projects'
    },
    {
      id: 4,
      title: 'TPhoneBox',
      description: 'Projeto fullstack que simula a página inicial de um aplicativo de assinaturas. Oferece todas as informações essenciais para a assinatura mensal de um smartphone.',
      image: tPhoneBox,
      technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScrip', 'Node.js', 'Prisma', 'Moongose', 'MySQL', 'MongoDB'],
      githubLink: 'https://github.com/lana2-2karla/TPhoneBox'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h3>Projetos</h3>
      <div className="cards-container">
        {projectsData.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h4>{project.title}</h4>
            <p className='color-grey'>{project.description}</p>
            <p>{project.technologies.join(', ')}</p>
            <br />
            <div className="buttons-container">
              <a href={project.accessLink} className="btn" target="_blank" rel="noopener noreferrer">Acesse</a>
              <a href={project.githubLink} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
