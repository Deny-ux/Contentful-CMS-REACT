import heroImg from './assets/hero.svg';
function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, eum voluptates fuga facilis nemo eveniet? Cupiditate
            quis provident repellendus perferendis?
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='women and the brows' className='img' />
        </div>
      </div>
    </section>
  );
}
export default Hero;
