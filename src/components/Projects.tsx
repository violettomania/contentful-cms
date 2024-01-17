export default function Projects() {
  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        <a
          href='https://react-vite-projects-2-tours.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='project'
        >
          <img
            src='//images.ctfassets.net/qz00uzgg3leh/4RFNCJY8PsklB5xvTmEIcC/dfc84cf09efefce40ce529b53231d560/tours.png'
            alt='title'
            className='img'
          />
          <h5>Tours </h5>
        </a>
        <a
          href='https://react-vite-projects-4-accordion.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='project'
        >
          <img
            src='//images.ctfassets.net/qz00uzgg3leh/5nAJ1ZhONkkTC4CjiqYRGy/c2bef4a152051a24fcfd9a93c3733060/questions.png'
            alt='title'
            className='img'
          />
          <h5>questions</h5>
        </a>
        <a
          href='https://react-vite-projects-3-reviews.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='project'
        >
          <img
            src='//images.ctfassets.net/qz00uzgg3leh/4QqAcfZnup45G8l0ARzSZR/8267a04d81f57bada2198dc18e052782/reviews.png'
            alt='title'
            className='img'
          />
          <h5>Reviews</h5>
        </a>
        <a
          href='https://react-vite-projects-1-birthday-buddy.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='project'
        >
          <img
            src='//images.ctfassets.net/qz00uzgg3leh/UPnV94c8OVwkEnv9I4jb4/022bfad74379c6b90126006ca398a59e/birthday.png'
            alt='title'
            className='img'
          />
          <h5>Birthday Buddy</h5>
        </a>
      </div>
    </section>
  );
}
