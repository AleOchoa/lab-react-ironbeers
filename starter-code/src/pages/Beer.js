import React, { Component } from 'react'
import Header from '../components/Header'
import BeerDetail from '../components/BeerDetail'

export default class Beer extends Component {
    render() {
        return (
            <>
            <Header />
            <div>
                <BeerDetail beerId={this.props.match.params.beerId} />
            </div>
            </>
        )
    }
}