import './App.css'  // import CSs
function App(){     // At line 8 that is inline Css
    let a = 12;   // The place of writing js
    return(   
    <> // All are in one tag
        {a+2} // We have to use curly brasis to return the value of js 
        <h1 className="main">Hello World</h1>
        <p style={{backgroundColor:"blue",color:"white"}}>My name is Tanush Saha</p>
    </>
    )
}

export default App;