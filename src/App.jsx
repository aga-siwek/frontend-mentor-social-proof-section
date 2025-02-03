import "./App.css";
import Review from "./components/Review/Review.jsx";
import Opinion from "./components/Opinion/Opinion.jsx";
import avatar_anne from "./assets/images/image-anne.jpg"
import avatar_colton from "./assets/images/image-colton.jpg"
import avatar_irene from "./assets/images/image-irene.jpg"

function App() {

  return (

    <div className="container">
      <div className="main_information"> 
        <header className="header__content">
          <h1 className='header__text'>10,000+ of our users love our products.</h1>
          <div className='body__text'>
            <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
          </div>
        </header>
        {/* review */}
        <div className='reviews' role="contentinfo">
          <div className='reviews__first-review' ><Review star={5} place="Reviews" /></div>
          <div className='reviews__second-review' ><Review star={5} place="Report Guru" /></div>
          <div className='reviews__third-review' ><Review star={5} place="BestTech" /></div>
        </div>
      </div>
      {/* opinion */}
      <div className='opinions' role="main">
        <div className='opinions__first-opinion'><Opinion avatar={avatar_colton} name="Colton Smith" verified={true} notice="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!" /></div>
        <div className='opinions__second-opinion'><Opinion avatar={avatar_irene} name="Irene Roberts" verified={true} notice="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery." /></div>
        <div className='opinions__third-opinion' ><Opinion avatar={avatar_anne} name="Anne Wallace" verified={true} notice="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!" /></div>
      </div>
    </div>
  )
}

export default App
