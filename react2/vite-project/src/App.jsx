import './App.css'
import Design from './design'

function App() {


  return (
    <>
      <div className="main">
        <h1>Ashogbon Joseph</h1>
        <h2 style={{fontSize : "45px" , width : "45%" , textAlign : "center"}}>What are the 5 steps Every Website Design Process needs?</h2>
        <Design num = "01" txt = "Establish client objectives during the discovery section" txtwidth = "80%" textColor = "orange"/>
        <Design num = "02" txt = "Create compelling website content" txtwidth = "60%" txtBorder = "green" numBg = "green" txtBorder1 = "green" textColor = "green"/>
        <Design num = "03" txt = "Design a results based website" txtwidth = "50%" txtBorder = "skyblue" numBg = "skyblue" txtBorder1 = "skyblue" textColor = "skyblue"/>
        <Design num = "04" txt = "Develop a responsive website" txtwidth = "50%" txtBorder = "blue" numBg = "blue" txtBorder1 = "blue" textColor = "blue"/>
        <Design num = "05" txt = "Test your website to make sure it works" txtwidth = "60%" txtBorder = "purple" numBg = "purple" txtBorder1 = "purple" textColor = "purple"/>
      </div>
    </> 
  ) 
}

export default App 
