const authorizationVar = 'MDIwNmUxNzE0MTRmNGZlMjhhYTQyNjM1Y2I0MDcyMWU6ZmJmMGFkYTU5NTE0NDBmYTljNTg4YzQ1ZDIzZGM4MWU='
// var client_id = '0206e171414f4fe28aa42635cb40721e';
// var client_secret = 'fbf0ada5951440fa9c588c45d23dc81e';
const url = 'https://accounts.spotify.com/api/token';


async function getAccessToken() {
    const response = await fetch(url, {method: 'POST',
                                       headers: {'Authorization': 'Basic ' + authorizationVar,
                                                'Content-Type': "application/x-www-form-urlencoded"},
                                       body: 'grant_type=client_credentials'});
    const jsonData = await response.json();
    //console.log(jsonData);
    return jsonData.access_token;
  };


async function searchSpotify(query) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const token = await getAccessToken();
    const response = await fetch(url, {method: 'GET',
                                       headers: {'Authorization': `Bearer ${token}`}});                                   
    const jsonData = await response.json();
    return jsonData;
};
//searchSpotify('hello');
export default searchSpotify;