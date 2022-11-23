import { useEffect, useState } from 'react'
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((response) => {
        setData(response)
      })
    })
  }, [])


  return (
    <div className="App">
      <table border="1">
        <tr>
        <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>

        </tr>
        {
          data.map((item) =>
            <tr>
              <td>{item.ID}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>

            </tr>
          )
        }
      </table>

    </div>
  );
}

export default App;