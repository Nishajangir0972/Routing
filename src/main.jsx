import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './ToDoList/App'
import { Provider } from 'react-redux'
import { store } from './ToDoList/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
    <App/>
    </Provider>
)
