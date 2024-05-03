import {React, useState} from 'react';

function SpotifyStats(){

    //const [apiResponse, setApiResponse] = useState("Waiting for request...");
    const [artistList, setArtistList] = useState([{name: '---', followers: '---', genres: ['---','---'], popularity: '---'}] );
    const [selectedGenre, setSelectedGenre] = useState("rap");


    async function getSpotBearerTok() {
        
        try {
            const response = await fetch( 'https://accounts.spotify.com/api/token' , { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + process.env.REACT_APP_CLIENT_ID + '&client_secret=' + process.env.REACT_APP_CLIENT_SECRET});
        
            const data = await response.json();
            console.log('Fetched Bear Tok');
            return data.access_token;
        } catch (error) {
            console.error('Error fetching access token:', error);
            throw error; // Rethrow the error for handling outside of this function
        }

        }
        
        const resetLastAuthed = () => {
            console.log(localStorage.getItem("lastAuthed"));
            localStorage.removeItem("lastAuthed");
            console.log(localStorage.getItem("lastAuthed"));
        } 

        async function sendSpotifyApiReq() {
            
            const lastAuthed = new Date(localStorage.getItem('lastAuthed'));
            const currentDate = new Date();
            const oneHourAgo = new Date(currentDate);
            oneHourAgo.setHours(currentDate.getHours() - 1);

            if ( !lastAuthed || lastAuthed < oneHourAgo ){
                //console.log("heree");
                const bt = await getSpotBearerTok();
                //console.log(bt);
                localStorage.setItem('bearTok', bt);
                localStorage.setItem('lastAuthed', currentDate);
            }
            //console.log("here");
            const bearTok = localStorage.getItem('bearTok');
            //console.log(bearTok);
            
            fetch( 'https://api.spotify.com/v1/search?q=genre:'+ selectedGenre + '&type=artist&limit=10' , { 
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer  ' + bearTok
                }})
                .then(response => response.json() )
                .then(data => {
                   
                    var artistListResults = data.artists.items.map( artist => ({
                        name: artist.name,
                        followers: artist.followers.total,
                        popularity: artist.popularity,
                        genres: artist.genres
                    }));
                   
                    /*-- sorting by followers -- */ artistListResults = artistListResults.sort((a,b) => b.followers - a.followers);
                    
                    setArtistList(artistListResults);
                   //console.log(data);
                });
    
            }



            

    return (

        <div className='SpotifyMainContainer'> 
        
        
        <div className='SpotifyApiModule'> 
       {/*  <button className='SpotifyButtons' onClick={() => getSpotBearerTok()}> Auth </button>  */} 
  {/*    <button className='SpotifyButtons' onClick={() => resetLastAuthed()}> clear last authed </button> */} 
        
        <div className='SpotifyApiResult'> 
        <div className="containGenreChoose"> <h4 className='SpotfiyChooseGenreText'>  Choose Genre </h4> <img className="SpotifyHeadPhoneIcon" src="headphonewhite.png" /></div>
        
        <button className={`SpotifyGenreButton ${ selectedGenre === "pop" ? 'SpotifyGenreButtonActive' : '' }`} onClick={() => setSelectedGenre("pop")}> Pop </button> 
        <button className={`SpotifyGenreButton ${ selectedGenre === "rock" ? 'SpotifyGenreButtonActive' : '' }`} onClick={() => setSelectedGenre("rock")}> Rock </button>
        <button className={`SpotifyGenreButton ${ selectedGenre === "country" ? 'SpotifyGenreButtonActive' : '' }`} onClick={() => setSelectedGenre("country")}> Country </button>
        <button className={`SpotifyGenreButton ${ selectedGenre === "rap" ? 'SpotifyGenreButtonActive' : '' }`} onClick={() => setSelectedGenre("rap")}> Rap </button> 
        <button className={`SpotifyGenreButton ${ selectedGenre === "atl-hip-hop" ? 'SpotifyGenreButtonActive' : '' }`}  onClick={() => setSelectedGenre("atl-hip-hop")}>  ATL Hip Hop </button>
        <button className={`SpotifyGenreButton ${ selectedGenre === "west-coast-rap" ? 'SpotifyGenreButtonActive' : '' }`}  onClick={() => setSelectedGenre("west-coast-rap")}>  West Coast Rap </button> 
        <button className={`SpotifyGenreButton ${ selectedGenre === "hip-hop" ? 'SpotifyGenreButtonActive' : '' }`}  onClick={() => setSelectedGenre("hip-hop")}> Hip Hop </button> 
        <button className={`SpotifyGenreButton ${ selectedGenre === "southern-hip-hop" ? 'SpotifyGenreButtonActive' : '' }`}  onClick={() => setSelectedGenre("southern-hip-hop")}> Southern Hip Hop </button> 
        <button className={`SpotifyGenreButton ${ selectedGenre === "trap" ? 'SpotifyGenreButtonActive' : '' }`}  onClick={() => setSelectedGenre("trap")}> Trap </button>
        <button className={`SpotifyGenreButton ${ selectedGenre === "chicago-rap" ? 'SpotifyGenreButtonActive' : '' }`}  onClick={() => setSelectedGenre("chicago-rap")}> Chicago Rap </button>

        </div>
        <button className='SpotifyButtons' onClick={() => sendSpotifyApiReq()}> Search Artists </button>
    
        </div> 

        <div className='SpotifyResultsSection'>

            {artistList.map(( item, index) => (
                <div className='SpotifyArtistResult' key={index}>
                    <div >
                    <h4 className='SpotfiyArtistResultTitles'> Artist Name </h4>
                    <h3 className='SpotfiyArtistResultTexts'> {item.name} </h3>
                    </div>
                    <div style={{ marginLeft : '10px'}} >
                    <h4 className='SpotfiyArtistResultTitles'> # of Followers </h4>
                    <h3 className='SpotfiyArtistResultTexts'> {item.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h3>
                    </div>
                    <div style={{ marginLeft : '10px'}} >
                    <h4 className='SpotfiyArtistResultTitles'> Genre </h4>
                    <h3 className='SpotfiyArtistResultTexts'> {item.genres.map((genre, genreIndex ) => ( <div className='SpotfiyArtistResultGenres' key={genreIndex}>{genre}</div>))} </h3>
                    </div>
                    <div style={{ marginLeft : '10px'}} >
                    <h4 className='SpotfiyArtistResultTitles'> Popularity </h4>
                    <h3 className='SpotfiyArtistResultTexts'> {item.popularity} </h3>
                    </div>
                </div>
            ))}

            <div className='SpotifyArtistResultbottom'> </div> 
        </div> 
        
         </div>
    )
}

export default SpotifyStats;