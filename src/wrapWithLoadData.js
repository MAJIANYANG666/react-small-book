import React, { Component } from 'react'

export default (WrappedComponent, name) => {
  return class WrapWithLoadData extends Component  {
    state = {
      data: null
    }
    componentWillMount() {
      this._loadData()
    }
    _loadData() {
      let data = localStorage.getItem(name)
      try {
        data = JSON.parse(data)
        this.setState({data})
      } catch(err) {
        this.setState({data})
      }
    }
    _saveData(data) {
      try{
        localStorage.setItem(name, JSON.stringify(data))
      }catch(err) {
        localStorage.setItem(name,`${data}`)
      }
    }
    render() {
      return (
        <WrappedComponent data={this.state.data} saveData={this._saveData.bind(this)} {...this.props}/>
      )
    }
  }
}
