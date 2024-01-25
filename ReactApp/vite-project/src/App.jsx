import './App.css'
import Article from './article'
import Image from './image'

function App() {

  return (
    <>
    <section>
      <h1 style={{width : "70%", height: "7%"}}>Ashogbon Joseph Journal</h1>
      <p style={{width: "70%", height: "13%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias asperiores officia voluptate ipsa ipsum velit aperiam sunt voluptas fuga eveniet quae laboriosam consequatur, et, cumque dicta laudantium? Eveniet, qui.</p>
      <main>
        <Article/>
        <Image image = "./src/assets/bridge-53769_640.jpg"/>
        <Article/>
        <Image image ="./src/assets/fantasy-2049567_640.jpg"/>
        <Article/>
        <Image image = "./src/assets/mountains-1587287_640.jpg"/>
      </main>
    </section>
    </>
  )
} 

export default App
