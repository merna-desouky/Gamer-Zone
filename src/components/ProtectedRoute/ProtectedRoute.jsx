import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    if (!localStorage.getItem('userToken')) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }
}

export default ProtectedRoute;
