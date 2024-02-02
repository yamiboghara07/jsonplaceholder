import { Routes, Route } from "react-router-dom"
import Header from "./Header"
import Post from "./Post"
import Comment from "./Comment"
import Album from "./Album"
import Todo from "./Todo"
import User from "./User"
import Photo from "./Photo"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Header/> } />  
        <Route path="post" element={ <Post/> } />  
        <Route path="comment" element={<Comment/>} />  
        <Route path="album" element={<Album/>}/>
        <Route path="photo" element={<Photo/>}/>
        <Route path="todo" element={<Todo/>}/>
        <Route path="user" element={<User/>}/>
      </Routes>
    </div>
  )
}

export default App