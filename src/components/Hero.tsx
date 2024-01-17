import heroImg from '../assets/hero-d50f9f18.svg';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>contentful CMS</h1>
          <p>
            Pitchfork schlitz tonx, coloring book celiac tousled succulents
            ascot affogato cardigan jianbing crucifix seitan. Synth man braid
            everyday carry try-hard pour-over keffiyeh slow-carb sriracha
            chillwave banjo gochujang kinfolk small batch mustache.
          </p>
        </div>
      </div>
      <div className='img-container'>
        <img src={heroImg} alt='woman and the browser' className='img' />
      </div>
    </section>
  );
}
