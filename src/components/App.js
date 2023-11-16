// create your App component here
// create your App component here
import React,{useEffect,useState} from "react"
function App() {
    const [image,setImage] = useState("")
    const [loading,setLoading] = useState(true);
    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setImage(data.message)
            setLoading(false)
        })
    },[])
    if(loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <img src={image} alt="A Random Dog" ></img>
        </div>
    )
}
export default App;