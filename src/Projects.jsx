import { useFetchProducts } from './fetchProducts';
function Projects() {
  const { loading, projects } = useFetchProducts();

  console.log(loading, projects);
  if (loading) {
    <section className='projects'>
      <h2>Loading...</h2>
    </section>;
  }
  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { id, img, url, title } = project;
          return (
            <a
              href={url}
              key={id}
              rel='noreferrer'
              className='project'
              target='_blank'
            >
              <img src={img} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
