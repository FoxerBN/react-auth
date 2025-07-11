const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login with Google</h1>
      <a href={`${API_URL}/oauth2/authorization/google`}>Login with Google</a>
    </div>
  );
};

export default LoginPage;