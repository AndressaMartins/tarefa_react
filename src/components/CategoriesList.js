import React, { Component } from 'react'

class CategoriesList extends Component {
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

    handleChangeSelect = event => {
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
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <label className='input-container' htmlFor='item'>
                    Item
                       <input id='item' value={task} onChange={this.handleChange} />

                    <select className='selecionar' onChange={this.handleChangeSelect}>
                        <option value="comida">Alimento</option>
                        <option value="limpeza">Material de Limpeza</option>
                        <option selected value="coconut">Selecione ...</option>
                        <option value="congelado">Congelados</option>
                        <option value="Acougue">Açougue</option>
                    </select>

                    <button className='btn'>
                        +
                   </button>
                </label >
                <ul className='list'>
                    {
                        list.map((item, index) =>
                            <li onClick={() => this.handleClick(index)} className='list-item' key={index}>
                                {item}, {selected}
                            </li>
                        )
                    }
                </ul>

            </form>
        )
    }
}

export default CategoriesList;