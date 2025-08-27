import React, {useState}  from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_number: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/accounts/register/', formData);
      alert('User registered successfully!');
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input type={key === 'password' ? 'password' : 'text'} name={key} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;