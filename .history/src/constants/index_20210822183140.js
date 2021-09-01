//const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://api.football-data.org/v2/";
const player_get = "players/{{id_player}}";
const team_get = "teams/{{id_team}}";
const api_token = "b9da90b850a745e1a8c7cbce411f02e6";


export const teamsGet = () => `${base_url}${team_get}${api_token}`;
export const playersGet = () => `${base_url}${player_get}${api_token}`;
