---
Layout:
Title: "React functional componenet"
Date: "2020-07-17"
---

## React functional components 
This week I tried something that  I have never used it before, which was the React hooks or React functional components.
React hooks make writing react to be a bit simple and easy to understand what a particular component does since we don't have to use "this" every time we try to and call a function and the code looks much cleaner.
if we would like an input that captures the name, it would be very noisy and hard to understand because of all the things that are happening the component from constructor to the state and also using "this" every time we mention the state.
But with functional components its easy to understand and it would look like this, everything including redux

const LoginPage = () => {
    const users = useSelector(state => state.reducer.users)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    return (
        <div>
            <h1>Login</h1>
            <div className="login-form">
                <div>
                    <h3>Name</h3>
                    <input type="text"
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }/>
                </div>
                <div>
                    <h3>Surname</h3>
                    <input type="text"
                        value={surname}
                        onChange={
                            (e) => setSurname(e.target.value)
                        }/>
                </div>
                <button onClick={
                    () => dispatch(addUser(name, surname))
                }>send</button>
                <div></div>
            </div>
        </div>
    )
}
export default LoginPage

