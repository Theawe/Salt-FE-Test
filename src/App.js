import './App.css';
import company from './company.svg';
import person from './person.svg';

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
            <h1>Discover</h1>
            <h1>Your Wonder</h1>
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
        <p>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>

        <div className="core">
          <h2>- Dedication</h2>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
        </div>

        <div className="core">
          <h2>- Intellectual Honesty</h2>
          <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</p>
        </div>

        <div className="core">
          <h2>- Curiosity</h2>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
        </div>
      </div>
      <div className="person">
        <img src={person} alt="" />
      </div>
      <div className="special">

      </div>
    </div>
    <div className="footer">
      
    </div>
    </>
    
  );
}

export default App;


{/* <div className="App">
      <header className="App-header">
        <img src={company} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}