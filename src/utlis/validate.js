export const checkValidData = (email, password) =>{
    const isEmailValid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)); 
    const isPasswordValid =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if ( !isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    return null
} 