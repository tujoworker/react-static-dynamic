/* eslint-disable react/no-unescaped-entities */

import css from './dynamic.css'
import React, { Component } from 'react'
import { Head } from 'react-static'

export default class MyComponent extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.iv = setInterval(() => {
            let { count } = this.state
            count += 1
            this.setState({
                count
            })
        }, 1e3)
    }
    componentWillUnmount() {
        clearInterval(this.iv)
    }
    render() {
        return (
            <div className={css.dynamic} styleName="css.dynamic">
                <Head>>Title! 😉</Head>
                <h1>Nice, a dynamic component!</h1>
                <h2>Count: {this.state.count}</h2>
                <p>This is promissing!</p>
            </div>
        )
    }
}

// export default () => (
//     <div>
//         <h1>This is what we're all about.</h1>
//         <p>
//             React, static sites, performance, speed. It's the stuff that makes
//             us tick.
//         </p>
//     </div>
// )
