const getRandomWinner= ()=>{
    const colors = ["Red","Green","Blue"];
    const randomIndex = Math.floor(Math.random()*colors.length);
    return colors[randomIndex]
}
export default getRandomWinner;
