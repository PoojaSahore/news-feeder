import React, {Component} from 'react';
import {details} from '../../constants'
import loadingImg from './Spinner.gif'
import './styles.css'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: null,
            title: "All In One"

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
        fetch('http://reader.one/api/all/hn,reddit,ph,slashdot,lifehacker,dn,github,medium')
        .then(data => data.json())
        .then(data => { console.log(data)
            this.setState({news: data})
        })
    }

    render() {  console.log(!this.state.news)
        if (!this.state.news)
        return <img src={loadingImg} />

        const a = this.state.news.map((x, index) => {
            if (this.state.title === 'Medium' || this.state.title === 'Github Trending' || this.state.title === 'Lifehacker') {
                return (
                    <li key={index}>
                        <a href={x.url}>
                            {x.title}
                            <span>by {x.author} {x.read_time}</span>
                        </a>
                    </li>
                )
            }
            if (this.state.title === 'Reddit' || this.state.title === 'Product Hunt' || this.state.title === 'Hacker News' || this.state.title === 'Designer News') {
                return (
                    <li key={index}>
                        <a href={x.url}>
                            {x.title}
                            <span>{x.score} pts by {x.author} {x.comments} comments</span>
                        </a>
                    </li>
                )
            }
            if (this.state.title === 'Slashdot') {
                return (
                    <li key={index}>
                        <a href={x.url}>
                            {x.title} 
                            <span>{x.category} from {x.dept}</span>
                        </a>
                    </li>
                )
            }
            else {
                if (x.one_sources[0] === 'hn' && x.one_sources[1] === 'ph') {
                    return (
                        <li key={index}>
                            <a href={x.url}>
                                {x.title}
                                <span>Hacker News Product Hunt &nbsp; {x.score} pts by {x.author} {x.comments} comments</span>
                            </a>
                        </li>
                    )
                }
                if (x.one_sources[0] === 'hn') {
                    return (
                        <li key={index}>
                            <a href={x.url}>
                                {x.title}
                                <span>Hacker News &nbsp; {x.score} pts by {x.author} {x.comments} comments</span>
                            </a>
                        </li>
                    )
                }
                if (x.one_sources[0] === 'ph') {
                    return (
                        <li key={index}>
                            <a href={x.url}>
                                {x.title}
                                <span>Product Hunt &nbsp; {x.score} pts by {x.author} {x.comments} comments</span>
                            </a>
                        </li>
                    )
                }
                if (x.one_sources[0] === 'dn') {
                    return (
                        <li key={index}>
                            <a href={x.url}>
                                {x.title}
                                <span>Designer News &nbsp; {x.score} pts by {x.author} {x.comments} comments</span>
                            </a>
                        </li>
                    )
                }
                if (x.one_sources[0] === 'reddit') {
                    return (
                        <li key={index}>
                            <a href={x.url}>
                                {x.title}
                                <span>Reddit &nbsp; {x.score} pts by {x.author} {x.comments} comments</span>
                            </a>
                        </li>
                    )
                }
                if (x.one_sources[0] === 'medium') {
                    return (
                        <li key={index}>
                            <a href={x.url}>
                                {x.title}
                                <span>Medium &nbsp; by {x.author} {x.read_time}</span>
                            </a>
                        </li>
                    )
                }
                if (x.one_sources[0] === 'github') {
                    return (
                        <li key={index}>
                            <a href={x.url}>
                                {x.title}
                                <span>Github Trending &nbsp; by {x.author} {x.read_time}</span>
                            </a>
                        </li>
                    )
                }
                if (x.one_sources[0] === 'lifehacker') {
                    return (
                        <li key={index}>
                            <a href={x.url}>
                                {x.title}
                                <span>Lifehacker &nbsp; by {x.author} {x.read_time}</span>
                            </a>
                        </li>
                    )
                }
                if (x.one_sources[0] === 'slashdot') {
                    return (
                        <li key={index}>
                            <a href={x.url}>
                                {x.title} 
                                <span>Slashdot &nbsp; {x.category} from {x.dept}</span>
                            </a>
                        </li>
                    )
                }
            }
            })

            return (
                <div className="outer-box">
                    <h1 className="title">{this.state.title}</h1>
                    <div className="inner-box">
                        <ul>{a}</ul>
                    </div>
                </div>
            )
    } 
}

export default News;