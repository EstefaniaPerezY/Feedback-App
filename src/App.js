import Header from "./components/Header"
function App(){
    return (
        <>
        <Header text={'not the default text'}/>
        <div className='container'>
            <h1>My App</h1>
            <p>Hello from component</p>
        </div>
        </>
    )
}
export default App