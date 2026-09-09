
import './App.css'
import ReactImage from './assets/react.svg'

function App() {
  return (
    <>
    <div id='main'>
     <div className='navbar'>
    <div id='left'>  
       <img src={ReactImage} alt="" />
       <h1>My React App</h1>
       </div>
       <div id='right'>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </div>
     </div>


    <div className='text'>
    <h1>Welcome To React</h1>
    <hr  id='tag'/>
    <h3>
    This is my First React Application
    </h3>
  </div>
  <hr id='line'/>
<div id="middle">
          <div>
            {" "}
            <img
              id="photo"
              src="https://cdn-icons-gif.flaticon.com/6454/6454035.gif"
              alt=""
            />
          </div>
          <div>
            <p>
              This is my first <b>React</b> project built using{" "}
              <span style={{ color: "purple" }}>Vite</span>.
            </p>
            <p>
              React is a powerful JavaScript library for building user
              interfaces.
            </p>
            <p>
              Learning React is <span></span>
              <b>
                <mark>fun</mark>
              </b>{" "}
              and exiting!
            </p>
            <p>
              It is <b>important</b> to practice everyday.
            </p>
            <p>
              Start building today and become{" "}
              <span style={{ color: "purple" }}>
                <i>awesome</i>
              </span>{" "}
              developer.
            </p>
            <p>
              Make your concepts{" "}
              <b>
                <u>strong</u>
              </b>{" "}
              and journey <span style={{ color: "green" }}>successful</span>.
            </p>
          </div>
         
        </div>

 
<hr id='underline'/>

<div id='ganesh'>
  
    <div id="middle-left">
    <div id="up">
      <img src="https://cdn-icons-gif.flaticon.com/6454/6454239.gif" alt="" width={"50px"}height={"50px"}  />
            <h2>Topics I am Learning</h2>

    </div>
    <div id="down">
        <p>🔵 JSX</p>
        <p>🔵Vite</p>
        <p>🔵React</p>
        <p>🔵JavaScript</p>
        <p>🔵CSS</p>
    </div>
    </div>

    <div id="middle-right">
    <div id="up">
         <img src="https://cdn-icons-gif.flaticon.com/8121/8121316.gif" alt="" width={"50px"}height={"50px"}  />
        <h2>My Learning Steps</h2>

      </div>
      <div id="down-1">
      <p>1.  Install React</p>
        <p>2. Learn JSX</p>
        <p>3. Understand Basic Concept</p>
        <p>4. Build Project</p>
        <p>5. Become a React Devloper</p>

      </div>
      </div>
      </div>
      <hr id='line'/>

      <div id='buttons'>
         <button className='btnpurple'>Start Learning</button>
        <button className='btnblue'>Learn More</button>
        <button className='btngreen'>Contact</button>
      </div>


      <div id='info'>
        <img  src="https://cdn-icons-png.flaticon.com/128/15567/15567989.png" alt="" width={"40px"}height={"40px"}/>
         <h3> My Information</h3>
      </div>
 
     <div id='table-1'>
      <table id='table'>
        <tr id='tr-1'>
          <th><b>Name</b></th>
          <th><b>Course</b></th>
          <th><b>Batch</b></th>
        </tr>
       <tr id='tr-2'>
         <td>Ganesh  Avsarmol</td>
        <td>Front-End Dev</td>
        <td>2026</td>
       </tr>
      </table>
     </div>

     <div id='poo'>
      <p className='btmp'>💜</p>
      <p className='btmp'>© 2026 My First React Application</p>
      <p><span style={{color:"purple"}}>Keep Learning Growing! 🚀</span></p>
    </div>

    </div>
      
    </>
  )
}

export default App
