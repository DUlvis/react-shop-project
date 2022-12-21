import React from 'react'
import ReactDOM from 'react-dom/client'
const Title = () => {
    return <h1>Hello React</h1>
}
const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit aperiam vero dolore sapiente eum harum et blanditiis ab
                cum quisquam, sunt mollitia vel optio explicabo numquam error
                ullam maiores. Sunt?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit aperiam vero dolore sapiente eum harum et blanditiis ab
                cum quisquam, sunt mollitia vel optio explicabo numquam error
                ullam maiores. Sunt?
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
