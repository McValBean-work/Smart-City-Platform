import LoginForm from "./login-form";

  function LoginPage(){
      return(
          <>
          <div className="flex w-full min-h-screen items-center justify-center">
            <LoginForm className='w-full sm:w-3/5 md:w-2/5'/>
          </div>
          
          </>
      );
    }

  export default LoginPage;