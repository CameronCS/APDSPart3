// UrlClass.js
const mode = process.env.NODE_ENV;

console.log(mode);

class DevUrlClass {
    Register = 'https://localhost:3001/api/register/';
    Login = 'https://localhost:3001/api/login/';
    LogOut = 'https://localhost:3001/api/logout/';
    CreatePaymentsUser = 'https://localhost:3001/api/payments/'; // Post
    GetAllPaymentsUser = 'https://localhost:3001/api/payments/'; // Get
    GetSpecificPayment = (id) => `https://localhost:3001/api/payments/${id}`;
    
    EmployeeLoginNew = 'https://localhost:3001/api/employee/login/new/';
    EmployeeLogin = 'https://localhost:3001/api/employee/login/';
    EmployeeViewAll = 'https://localhost:3001/api/employee/payments/';
    EmployeeViewByID = (id) => `https://localhost:3001/api/employee/payments/${id}/`;
    EmployeeVerifyByID = (id) => `https://localhost:3001/api/employee/payments/${id}/verify/`;
    EmployeeSubmitByID = (id) => `https://localhost:3001/api/employee/payments/${id}/submit/`;  
}

class ProdUrlClass {
    Register = '/api/register/';
    Login = '/api/login/';
    LogOut = '/api/logout/';
    CreatePaymentsUser = '/api/payments/'; // Post
    GetAllPaymentsUser = '/api/payments/'; // Get
    GetSpecificPayment = (id) => `/api/payments/${id}`;
    
    EmployeeLoginNew = '/api/employee/login/new/';
    EmployeeLogin = '/api/employee/login/';
    EmployeeViewAll = '/api/employee/payments/';
    EmployeeViewByID = (id) => `/api/employee/payments/${id}/`;
    EmployeeVerifyByID = (id) => `/api/employee/payments/${id}/verify/`;
    EmployeeSubmitByID = (id) => `/api/employee/payments/${id}/submit/`;  
}

const UrlClass = mode === 'development' ? DevUrlClass : ProdUrlClass;

export default UrlClass;
