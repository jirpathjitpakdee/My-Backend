import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('good');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const url = "http://10.200.10.197:4000/user";
    
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => {
        for (var i = 0; i < res.length; i++) {
          if (username === res[i].username && password === res[i].password) {
            console.log('Login pass');
            navigate("/ListSichon");
          } else {
            console.log('Login fail');
          }
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg w-full">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sichon Heritage</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">เข้าสู่ระบบจัดการเว็บไซต์</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">บัญชีผู้ใช้</label>
              <input type="text" id="username" className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500" placeholder="บัญชีผู้ใช้" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">รหัสผ่าน</label>
              <input type="password" id="password" className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500" placeholder="••••••••" required />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
            </div>
            <div>
              <button type="button" className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleLogin}>เข้าสู่ระบบ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
