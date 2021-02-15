import React from 'react';
import { CenterElement, WidthCaja } from '../components/containers/containers';
import ImgSup from '../components/titles/img-sup';
import CircleLogo  from '../assets/img/circle-logo.png'
import { ButtonSubmit } from '../components/buttons/button-submit';
import { FieldInput } from '../components/inputs/item-forms';
import FooterForm from '../components/footers/footer-form';
import {Link} from 'react-router-dom'
import FooterRedes from '../components/footers/footer-redes';
import { ContainerTxt, ContainerImgHome } from './styles-home';
import ImgLanding from '../assets/img/landing.png'





const Home = (props) => {

    React.useEffect(()=>{ window.scrollTo(0,0)},[])
    

    return (
      <CenterElement>
      <WidthCaja flow="Column">

          <ImgSup img={CircleLogo} ruta="/" imgWidth="150px"/>
          <section style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
              <p style={{ fontSize:'1.7rem', fontFamily:'Bold', color:'var(--colordos)'
                            }}>Popadvise</p>
          </section>

          <ContainerImgHome>
                  <img src={ImgLanding} alt=""/>      
          </ContainerImgHome>

          {/* ----------------->SECCION DE TITULO */}
          <section style={{display:'flex', flexFlow:'column', alignItems:'center'}}>

            <p style={{ fontSize:'1.7rem', fontFamily:'Bold', color:'var(--colordos)'
                        }}>Crea tú menú digital</p>

            <h1 style={{ textAlign:'center', fontSize:'3rem', color:'var(--colordos)', fontFamily:'Bold'
                        }}>¡Gratis!</h1>

          </section>
          {/* ----------------->SECCION DE TITULO */}





          <ContainerTxt>
            <article>
            <section>
                <div><i className="fas fa-check-circle"></i>restaurantes ilimitados </div>
                <div><i className="fas fa-check-circle"></i>menús ilimitados  </div>
                <div><i className="fas fa-check-circle"></i>productos ilimitados </div>
            </section>

            <section>
                <div><i className="fas fa-check-circle"></i>100% gratis  </div>
                <div><i className="fas fa-check-circle"></i>fácil e intuitivo  </div>
                <div><i className="fas fa-check-circle"></i>100 % auto administrable </div>
            </section>
            </article>

          </ContainerTxt>

          <FieldInput>
            <ButtonSubmit onClick={()=>{ window.location.replace('/signup')}}>Crear cuenta</ButtonSubmit>
          </FieldInput>


          <FooterForm   left="¿Ya tienes una cuenta?"
                        right={
                                <Link to="/login">Inicia sesión</Link>
                              }
                        />
          
          <FooterRedes/>



      </WidthCaja>
      </CenterElement>
    );
};

export default Home;