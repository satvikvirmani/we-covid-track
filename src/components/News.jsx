import React, {Component} from "react"
import Article from "./Article"

class News extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        this.fetchArticles()
    }
    fetchArticles = () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json',
            headers: {}
        };

        axios(config).then((response) => {
            var array = [];
            let TotalCount = 0;
            let Itemcount = 0;
            let found = false;

            const Totalarticles = (response.data.articles)

            for (let i = 0; i < Totalarticles.length; i++) {

                const element = Totalarticles[i];
                let str = element.title
                let arr = [
                    'covid',
                    'covid-19',
                    'corona',
                    'coronavirus',
                    'virus',
                    'vaccine',
                    'vaccinated'
                ]

                TotalCount = TotalCount + 1;
                found = false;

                for (let j = 0; j < arr.length; j++) {
                    str = str.toLowerCase()

                    if (str.includes(arr[j])) {
                        found = true;
                        break
                    }
                }
                if (found) {
                    array.push(element)
                    Itemcount = Itemcount + 1
                }
                if (Itemcount === 10) {
                    break
                }
            }
            this.setState({articles: array})
        }).catch((error) => {
            console.log(error)
        });
    }
    render() {
        return (
            <div id="news">
                <p className="dark:text-gray-200 text-center text-4xl pt-12 font-medium">
                    News
                </p>
                {this
                    .state
                    .articles
                    .map((article, index) => {
                        var noContent = false;
                        if (article.content === null) {
                            noContent = true
                        }
                        return <Article
                            imageSrc={article.urlToImage}
                            title={article.title}
                            content={noContent
                            ? article.description
                            : article.content}
                            link={article.url}
                            sourceName={article.source.name}
                            publishedAt={article.publishedAt}
                            key={index}/>
                    })
}
            </div>
        )
    }
}

export default News