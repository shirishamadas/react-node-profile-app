import React,{useState} from 'react';
import axios from 'axios';

const Login = ({getDataFromMongoDB, signedInSucessfully}) => {

    const [LoggedInfo, setInputText] = useState({ email: '', password: '' });

    const signIn = () => {
        console.log(LoggedInfo, 'contactInfo'); 
        if (LoggedInfo.email === '' || LoggedInfo.password === '') {
            alert('please enter the below details');
        } else {
            getDataFromMongoDB();
            signedInSucessfully();
        }     
        
        axios.post('http://localhost:8000/login/login', LoggedInfo).then((r) => {
            console.log(r);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    // useEffect(() => {
    //     getDataFromMongoDB()
    //     console.log();
    // }, [getDataFromMongoDB]);

    // const getDataFromMongoDB = () => {
    //     axios.get('http://localhost:8000/contact/read').then((r) => {
    //         console.log(r);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }

    return (
        <div>
            <link rel="stylesheet" href="styles.css" />
            <div class="w-full h-full" style={{backgroundImage: `url('../images/banner.jpg')`}}>
            <form class="flex flex-col text-center" id="login">
                <p class="text-rose-600 font-bold text-xl mt-[170px]">Login</p>
                <div class="mx-[600px] my-2">
                    <input type="text" class="pl-2 rounded-full ring-2 ring-rose-600" placeholder="  Email address" onChange={(e) => setInputText({...LoggedInfo, email: e.target.value})}/>
                </div> 
                <div class="mx-[600px] my-2">
                    <input type="text" class="pl-2 rounded-full ring-2 ring-rose-600" placeholder="  Password" onChange={(e) => setInputText({...LoggedInfo, password: e.target.value})}/>
                </div>
            </form>
            <button class="bg-rose-600 px-16 rounded-full ring-2 ring-rose-600 ml-[600px] mb-[230px] text-white my-2" onClick={(e) => {e.preventDefault(); signIn();}}>SIGN IN</button>
            </div>
        </div>
    );
}

export default Login;