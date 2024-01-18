export default function Project({ title, image, url }: SingleProject) {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='project'>
      <img src={image} alt='title' className='img' />
      <h5>{title}</h5>
    </a>
  );
}
