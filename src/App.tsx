
import './App.css';

function App() {
  const url = "http://localhost:5000/users/login"

  async function user (){
    const response =  await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "vale",
        password: "12345"
      })

    }).then(response => {
      return response.json()
    }).catch(error =>  {
      console.error("error fetchin data", error)
    })
    console.log(response)
  }

 
  user()
  
  return (
    <div className="App">
      login
    </div>
  );
}

export default App;
