import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
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
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
