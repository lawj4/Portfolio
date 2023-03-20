
export default function Front() {
    const move = '2%';
  return (
    <div>
        <div className="header">Jefferson Law
    <div className="subheader">CS STUDENT @ UCI</div>
    </div>
    <div className="front">
    
        
      <div className="video-container">
      <div className="leftvideo" onMouseEnter={() => document.querySelector('.front').style.transform = `translate(${move}, 0)`} onMouseLeave={() => document.querySelector('.front').style.transform = `translate(0, 0)`} />
        <div className="rightvideo" onMouseEnter={() => document.querySelector('.front').style.transform = `translate(-${move}, 0)`} onMouseLeave={() => document.querySelector('.front').style.transform = `translate(0, 0)`}/>
        <video autoPlay="autoPlay" muted loop>
          <source src={require("./images/firewatch.mp4")} type="video/mp4" />
        </video>
      </div>
    </div>
    </div>
    
  );
}
