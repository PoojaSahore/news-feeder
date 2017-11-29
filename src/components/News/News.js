import React, {Component} from 'react';
import {details} from '../../constants'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            title: ""

        }
    }

    componentWillReceiveProps(newProps){
        if (this.props.newsTitle != newProps.newsTitle)   
            this.setState({title: newProps.newsTitle}, () => {
                details.map(detail => { 
                    if (detail.name === this.state.title) { 
                        fetch(`http://reader.one/api/news/${detail.url}?limit=20`)
                        .then(data => data.json())
                        .then(data => { console.log(data)
                            this.setState({news: data})
                        })
                    }
                })
            })       
    }

    componentDidMount() {
        fetch('http://reader.one/api/all/hn,reddit,ph,s')
        .then(data => data.json())
        .then(data => { console.log(data)
            this.setState({news: data})
        })
    }

    render() {
        const a = this.state.news.map((x, index) => {
                return (
                    <li key={index}>
                        <a href={x.url}>
                            {x.title}
                        </a>
                    </li>
                )
            })
        return (
            <div className="outer-box">
                <h1>{this.state.title}</h1>
                <div className="inner-box">
                    <ul>{a}</ul>
                </div>
            </div>
        )
    }
}

export default News;