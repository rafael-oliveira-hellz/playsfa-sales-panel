import Footer from './styles/Footer';

const PageFooter = () => {
  return (
    <Footer>
      <div className='site-name'>
        <p className='site-name__text'>Play Séries, Filmes Animes</p>
      </div>
      <div className='site-developers'>
        <p className='site-developers__names'>
          <em>Desenvolvido por </em>{' '}
          <a href='https://www.linkedin.com/in/rafael-de-oliveira-s/'>
            Rafael de Oliveira
          </a>
          <span>e</span>
          <a href='https://www.linkedin.com/in/natanboanafina/'>
            Natan Boanafina
          </a>
        </p>
      </div>
      <div className='site-copyrights'>
        <p className='site-copyrights__text'>
          &#169; 2022 - Todos os direitos reservados
        </p>
      </div>
    </Footer>
  );
};

export default PageFooter;
