import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  }
  const emailLogined = JSON.parse(localStorage.getItem('user'));

  return (
    <section className="section-account">
      <div className="container">
        <h1>Account page</h1>
        <p>Hello: {emailLogined.email}</p>
        <button className="btn btn-hover" onClick={handleLogout}>Logout</button>
      </div>
    </section>
  );
}
export default Account;
