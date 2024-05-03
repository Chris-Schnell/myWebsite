import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className='HomePageOuterContainer'>
            
            <div >
                <div  >
                    Hi, my name is Christopher Tyler Schnell.
                    <br></br>
                    <br></br> I created this website to start showcasing some of my side projects related to programming. <br></br>
                    
                    <br></br> Currently I have implemented a <b>Sort Visualizer</b> which I designed to show the user visually how different sort algorithms work.

                    <br></br>
                    <br></br> As well, I have implemented a web app that interacts with the Spotify API via HTTP requests to pull the top 10 artists for a genre.
                    This app retrieves a bearer token every 1 hr from Spotify that is uesd to authenticate the users API requests.

                    <br></br><br></br>
                    Both apps can be accessed via the top menu, give them a try! <i>More features coming soon.</i>
                    <br></br><br></br> Best Regards
                </div>
                
            </div>
        </div>
        );
    }
}

export default Home;