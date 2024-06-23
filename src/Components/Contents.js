import React, { Component } from 'react'

export default class Contents extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Giga"
            },
            "author": "Stefan Schunck",
            "title": "Legendärer Geländewagen wird zurückgerufen: Tausende betroffen",
            "description": "Ein Autohersteller muss ein bekanntes Fahrzeug zurückrufen – weil der Fehler unter Umständen schwerwiegende Folgen haben kann.",
            "url": "https://www.giga.de/artikel/legendaerer-gelaendewagen-wird-zurueckgerufen--r7pqgf82hv",
            "urlToImage": "https://static.giga.de/db/20/fb/be83d0d7f69c71136122190c75_ZmMgOWIwYTUwMDRmZmZmIDEyMDAgNjI3A2QwYjNkNjczMjk3_imago0259701126h.jpg",
            "publishedAt": "2024-06-22T04:01:02Z",
            "content": "Ein Autohersteller muss ein bekanntes Fahrzeug zurückrufen weil der Fehler unter Umständen schwerwiegende Folgen haben kann.\r\nInitiiert vom Kraftfahrtbundesamt (KBA), muss der japanische Automobilher… [+2277 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.is.fi"
            },
            "author": "Tommi Lempinen",
            "title": "Sähköautojen sadetappotestissä kuusi autoa – tällaiset olivat tulokset",
            "description": "Kertalatauksilla ajettiin 470-590 kilometrin matkat. Olosuhteet olivat brittiläisen sateiset.",
            "url": "https://www.is.fi/autot/art-2000010514204.html",
            "urlToImage": "https://is.mediadelivery.fi/img/some/default/2080e34792ba061d83fbb2a960d7a455.jpg",
            "publishedAt": "2024-06-22T04:00:00Z",
            "content": "Kertalatauksilla ajettiin 470-590 kilometrin matkat. Olosuhteet olivat brittiläisen sateiset.Brittiläinen Carwow on tehnyt hiljattain testin, jossa kuusi eri merkkistä täyteen ladattua sähköautoa aje… [+1355 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "bloomberg.com",
            "title": "Tesla Seeks to Delay July Hearing in Battle Over Musk's Pay",
            "description": "Tesla Seeks to Delay July Hearing in Battle Over Musk's Pay Bloomberg\nElon Musk's $56 billion pay: Tesla, critics clash over how to resolve legal dispute Reuters\nMusk must now convince the courts on his Tesla pay package Yahoo Finance\nWhy Elon Musk's $50 bill…",
            "url": "https://biztoc.com/x/84f49787ea75dd14",
            "urlToImage": "https://biztoc.com/cdn/799/og.png",
            "publishedAt": "2024-06-22T03:50:50Z",
            "content": "Tesla Seeks to Delay July Hearing in Battle Over Musk's Pay BloombergElon Musk's $56 billion pay: Tesla, critics clash over how to resolve legal dispute ReutersMusk must now convince the courts on hi… [+133 chars]"
        }]
    constructor() {
        super()
        this.state = { articles: this.articles }
        console.log("constructor")
    }
    //we used async and await to wait for the api to fetch data 
    async componentDidMount(){
        let apiData= await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-06-21&to=2024-06-22&sortBy=popularity&apiKey=61d0a0bbaff64633a52c23b8232c584a")
        //we use await to wait for response to get apidata`
        let response = await apiData.json()
            this.setState({
                articles:response.articles
            })
    }
    render() {
        console.log("render")
        return (
            <div className="container">
                <h2 className='text-center display-5 m-4'>Top Headlines!</h2>
                <div className='row'>
                    {
                        this.state.articles.map((event) => {
                            if(event.title==="[Removed]"){
                                return null
                               }else{
    
                           return <div className='col-md-4'>
                                <div className="card shadow" style={{ width: '18rem' }}>
                                    <img src={event.urlToImage ? event.urlToImage: "https://is.mediadelivery.fi/img/some/default/2080e34792ba061d83fbb2a960d7a455.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{event.title ? event.title.slice(0,25):"Title not available"}...</h5>
                                        <p className="card-text">{event.description? event.description.slice(0,50):"description not available"}...</p>
                                        <a href="#" className="btn btn-primary">Click here to see more</a>
                                    </div>
                                </div>
                            </div>
                               }    
                        })
                    }

                </div>
            </div>
        )
    }
}
