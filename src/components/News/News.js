import React, {Component} from 'react';

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            pooja: ""

        }
    }
        // componentWillReceiveProps() {
        //     console.log(this.props.newsTitle)
        //     console.log("ddjcvjsdvcjn")
        //     this.setState({pooja: this.props.newsTitle})
        // }
    componentDidMount() {
        console.log(this.props.newsTitle, "did")
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(data => {
            console.log(data)
            return data.json();
        }).then(data => {
            data.splice(10)
            data.map(x => {
                fetch('https://hacker-news.firebaseio.com/v0/item/' + x + '.json?print=pretty').then(data => {
                    return data.json()
                }).then(data => {
                    let news = {
                        title: data.title,
                        url: data.url,
                        story: data.story
                    }
                    let oldnews = this.state.news;
                    oldnews.push(news) //oldnews.push(data)
                    this.setState({news: oldnews})

                    // let title = this.state.title, url = this.state.url, story = this.state.story;
                    // title.push(data.title); url.push(data.url); story.push(data.story)
                    // this.setState({     title,     url ,     story })
                })
            })

        })

    }

    render() {
        const a = this
            .state
            .news
            .map((x, index) => {
                return (
                    <li key={index}>
                        <div>
                            {x.title}
                        </div>
                        <div>
                            {x.story}
                        </div>
                        <a href={x.url}>
                            read more
                        </a>
                    </li>
                )
            })
        return (
            <div className="outer-box">
                <h1>Hacker News{[this.props.newsTitle, this.state.pooja]}</h1>
                <div className="inner-box">
                    <ul>{a}</ul>
                </div>
            </div>
        )
    }
}

export default News;