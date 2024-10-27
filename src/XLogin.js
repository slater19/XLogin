import React,{useState} from 'react'

const XLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [onSubmit, setOnsubmit] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        password: "",
         
      });

      const handleChange = (e) => {
        const  value  = e.target.value;
        setFormData((prevState) => ({ ...prevState, [e.target.name]: value }));
      };  

    const handleSubmit = (e) => {
        // Set initial error values to empty
        e.preventDefault();
        
      
        // Check if the user has entered both fields correctly
        if (username=== "user" && password=== "password") {
            setError('')
            setOnsubmit(true)
          
        }else{
            setError('Invalid username or password')
            setOnsubmit(false)
         }
      
        
      
        // Authentication calls will be made here...
      }
      
      
  return (
    <div>
      <h1>Login Page</h1>
      {onSubmit?(<div><p>Welcome, {username}</p></div>):(
            <form onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>
            }    
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            </div>  
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="username" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div> 
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            </div> 
            <button type="submit">Submit</button>
          </form>
          
  )}
  </div>
}

export default XLogin
