import LoginForm from "./login-form";

  function LoginPage(){
      return(
          <>
          <div className="flex w-full min-h-screen items-center justify-center">
            <LoginForm className='w-full sm:w-100'/>
          </div>
          
          </>
      );
    }

  export default LoginPage;