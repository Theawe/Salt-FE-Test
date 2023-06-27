import './App.css';
import company from './company.svg';
import person from './person.svg';
import accesories from './assets/accesories.svg';
import exhaust from './assets/exhaust.svg';
import speed from './assets/speed.svg';
import companyWhite from './assets/companyWhite.svg';
import heroImage from './assets/heroimage.png';

function App() {
  return (
    <>
      <div className="App-header">
      <div className='logo'>
        <img src={company} alt="#" height={30}/>
      </div>
      <div className="menu">
        <a href="#" className='item-menu'>Home</a>
        <a href="#" className='item-menu'>About Us</a>
        <a href="#" className='item-menu'>Contact Us</a>
      </div>
    </div>
    <div className="body">
      <div className="hero">
        <div className="hero-caption">
            <h1>Discover Your Wonder</h1>
            {/* <h1>Your Wonder</h1> */}
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure excepturi ex quod at explicabo asperiores sit provident reprehenderit minus accusamus, quisquam deleniti autem cupiditate magni aperiam cum laboriosam dolore!</h4>
        </div>
        <div className="hero-caption">
            <img src={heroImage} alt="" />
        </div>
      </div>
      <div className="about">
        <div className="about-menu">
          <div className="about-menu-item">
            <h1>Who we are</h1>
            <h3>Technology Company</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur fugit alias reprehenderit atque doloremque maiores aliquid quidem, cupiditate tenetur minus distinctio consectetur dolorum perferendis, esse laboriosam inventore? Vitae, debitis.</p>
            <div className="counter">
              <div className="counter-item">
                <h3>01</h3>
                <h4 style={{color:"#777"}}>/</h4>
                <h4 style={{color:"#777"}}>03</h4>
              </div>
            </div>
          </div>
          <div className="about-menu-item">
            <h1>What we do</h1>
            <h3>Professional Brand Management</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur fugit alias reprehenderit atque doloremque maiores aliquid quidem, cupiditate tenetur minus distinctio consectetur dolorum perferendis, esse laboriosam inventore? Vitae, debitis.</p>
            <div className="counter">
              <div className="counter-item">
                <h3>02</h3>
                <h4 style={{color:"#777"}}>/</h4>
                <h4 style={{color:"#777"}}>03</h4>
              </div>
            </div>
          </div>
          <div className="about-menu-item">
            <h1>How we do</h1>
            <h3>Strategize, Design, Collaborate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur fugit alias reprehenderit atque doloremque maiores aliquid quidem, cupiditate tenetur minus distinctio consectetur dolorum perferendis, esse laboriosam inventore? Vitae, debitis.</p>
            <div className="counter">
              <div className="counter-item">
                <h3>03</h3>
                <h4 style={{color:"#777"}}>/</h4>
                <h4 style={{color:"#777"}}>03</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-core">
        <h1>Our Core Values</h1>
        <p className='our-core-title'>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>

        <div className="core">
          <h2>&mdash; Dedication</h2>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
        </div>

        <div className="core">
          <h2>&mdash; Intellectual Honesty</h2>
          <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</p>
        </div>

        <div className="core">
          <h2>&mdash; Curiosity</h2>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
        </div>
        <div className="person">
          <img src={person} alt="" />
        </div>
      </div>
      <div className="special">
        <div className="special-box">
          <h1>OUR SPECIALITY</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et officia, minima est quos ea facilis ipsa eius eveniet placeat molestiae saepe inventore, soluta iure ipsam! Culpa sed nisi fuga!</p>
          
          <div className="special-items">
            <div className="special-item">
              <img src={accesories} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ipsam. Architecto quaerat cupiditate facilis alias reiciendis ut facere, molestias perspiciatis, incidunt adipisci recusandae, vitae odit id maiores fuga laborum ducimus?</p>
            </div>
            <div className="special-item">
              <img src={exhaust} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ipsam. Architecto quaerat cupiditate facilis alias reiciendis ut facere, molestias perspiciatis, incidunt adipisci recusandae, vitae odit id maiores fuga laborum ducimus?</p>
            </div>
            <div className="special-item">
              <img src={speed} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ipsam. Architecto quaerat cupiditate facilis alias reiciendis ut facere, molestias perspiciatis, incidunt adipisci recusandae, vitae odit id maiores fuga laborum ducimus?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <img src={companyWhite} alt="" style={{color: '#000'}}/>

      <div className="list-menu">
        <h4>Who We Are</h4>
        <h4>Our Values</h4>
        <h4>The Perks</h4>
      </div>
    </div>
    </>
    
  );
}

export default App;
