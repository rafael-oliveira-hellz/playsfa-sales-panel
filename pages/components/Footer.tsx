import Footer from "./styles/Footer";

const PageFooter = () => {
  return (
    <Footer className="footer">
      <div className="footer__container">
        <div className="footer__container__rights" style={{ color: '#FFF' }}>
          <p>
            Play Séries, Filmes Animes
          </p>
          <p>
            © 2022 - Todos os direitos reservados - <em>Desenvolvido por</em>{" "}
            <a href="https://www.linkedin.com/in/XPTO-7b1b3b1b3/">
              XPTO
            </a>
          </p>
        </div>
      </div>
    </Footer >
  );
}

export default PageFooter;