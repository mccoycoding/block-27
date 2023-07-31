import { useState } from "react";

export default function SignUpForm( {setToken} ) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      setToken(result.token)
      console.log('Sent!')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} action="">
        <div>
          <label>
            Username: <input minLength={8} onChange={(e) => setUsername(e.target.value)} value={username} type="text"/>
          </label>
        </div>
        <div>
          <label>
            Password: <input minLength={8} onChange={(e) => setPassword(e.target.value)} value={password} type="password"/>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}