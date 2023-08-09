import React from 'react'
import './Technologies.css'
import nodeIcon from '../assets/icons/node-js.png'
import mysqlIcon from '../assets/icons/mysql.png'
import dockerIcon from '../assets/icons/docker.png'
import pythonIcon from '../assets/icons/python.png'
import csharpIcon from '../assets/icons/c-sharp.png'
import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css.png'
import jsIcon from '../assets/icons/js.png'
import reactIcon from '../assets/icons/react.png'
import vueIcon from '../assets/icons/vuejs.svg'
import jestIcon from '../assets/icons/jest.png'
import mongodbIcon from '../assets/icons/mongodb.png'

// <a href="https://www.flaticon.com/br/icones-gratis/chapeu-bobo" title="chapéu bobo ícones">Chapéu bobo ícones criados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/no-js" title="nó js ícones">Nó js ícones criados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/mysql" title="mysql ícones">Mysql ícones criados por Pixel perfect - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/docker" title="docker ícones">Docker ícones criados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/pitao" title="pitão ícones">Pitão ícones criados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/c-afiado" title="c afiado ícones">C afiado ícones criados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/reagir" title="reagir ícones">Reagir ícones criados por amoghdesign - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/html" title="html ícones">Html ícones criados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/css" title="css ícones">Css ícones criados por Pixel perfect - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/javascript" title="javascript ícones">Javascript ícones criados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/br/icones-gratis/folha" title="folha ícones">Folha ícones criados por Pixel perfect - Flaticon</a>

function Technologies () {
  const technologies = [
    { name: 'Node.js', icon: nodeIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'C Sharp', icon: csharpIcon },
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Vue.js', icon: vueIcon },
    { name: 'Jest', icon: jestIcon }
  ]

  return (
    <div id="technologies" className="technologies">
      <h2>Tecnologias</h2>
      <div className="cardsIcon-container">
        {technologies.map((technology, index) => (
          <div key={index} className="card-icon">
            <p className='p-tec'>{technology.name}</p>
              <img src={technology.icon} alt={technology.name} className="png-img-icons" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Technologies
