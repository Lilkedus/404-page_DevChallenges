import Scarecrow from ".././Scarecrow.png";

const Container = () => {
   return (
      <div className="container">
        <div className="left-col">
          <img className="hero-img" src={Scarecrow} alt="404-img"/>
        </div>
        <div className="right-col">
          <h1>I have bad news for you</h1>
          <p>The page you are looking for might be removed or is temporarily unavailable</p>
          <button type="button">Back to homepage</button>
        </div>
      </div>
   );
}

export default Container;