import "./SignupFormStyles.css"

function SignupForm(){
    return(
<div className="container">
    <h1>Sign Up</h1>
    <form>
        <input placeholder="Email"/>
        <input placeholder="Password"/>
        <button>sign up</button>
    </form>

</div>
    )
}

export default SignupForm;