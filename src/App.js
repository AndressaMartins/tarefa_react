import React, { Component } from 'react'
import CategoriesList from './components/CategoriesList'
import './App.css'

class App extends Component {
    state = {
        task: '',
        list: [],
        selected: ''

    }

    handleChange = event => {
        this.setState({
            task: event.target.value
        })
    }

    handleChangeSelect= event => {
        this.setState({
            selected: event.target.value
        })
    }
// pega o conteudo joga no array da list
    handleSubmit = event => {
        event.preventDefault()
        const { task, list } = this.state
        this.setState({
            list: [task, ...list],
            task: ''
        })

    }


    handleClick = index => {
        this.setState({
            list: this.state.list.filter((_, i) => {
                return index !== i
            })
        })
    }



    render() {
        const { task, selected, list } = this.state
        console.log (this.state)

        return (

            <div className='container'>
                <CategoriesList />
            </div>


        )

    }


}

export default App