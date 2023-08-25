import style from './style.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function AuthPage() {

    const [obj, setObj] = useState({ email: '', password: '', confirmPassword: '' });
    function chengeInp(event) {
        setObj({ ...obj, [event.target.name]: event.target.value })
    }

    function isObj() {
        console.log(obj);
    }

    return (
        <div className={style.wrapper}>
            <h1>Registration</h1>
            <div>
                <TextField id="standard-basic" name='email' label="Email" variant="standard" onChange={chengeInp} />
            </div>
            <div>
                <TextField id="standard-basic" name='password' label="Password" variant="standard" onChange={chengeInp} />
            </div>
            <div>
                <TextField id="standard-basic" name='confirmPassword' label="Confirm Password" variant="standard" onChange={chengeInp} />
            </div>
            <div>
                <Button variant="outlined" onClick={isObj}>SIGN UP</Button>
            </div>
            <div className={style.accaunt}>
                <p> Already have an account?</p>
                <div>
                    <Button variant="text">SIGN IN</Button>
                </div>
            </div>

        </div>
    )
}

export default AuthPage;