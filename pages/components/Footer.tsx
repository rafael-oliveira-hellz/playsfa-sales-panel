import Footer from './styles/Footer';

const PageFooter = () => {
  return (
    <Footer>
      <div className='site-name' >
        <p className='site-name__text'>Play Séries, Filmes e Animes</p>
      </div>
      <div className='site-developers'>
        <p className='site-developers__names'>
          <em>Desenvolvido por </em>{' '}
          <a
            href='https://www.linkedin.com/in/rafael-de-oliveira-s/'
            target='_blank'
            rel='noreferrer'
          >
            Rafael de Oliveira
          </a>
          <span>e</span>
          <a
            href='https://www.linkedin.com/in/natanboanafina/'
            target='_blank'
            rel='noreferrer'
          >
            Natan Boanafina
          </a>
        </p>
      </div>
      <div className='site-copyrights'>
        <p className='site-copyrights__text'>     
          &#169; {new Date().getFullYear().toLocaleString()} - Todos os direitos reservados
        </p>
      </div>
    </Footer>
  );
};

export default PageFooter;
