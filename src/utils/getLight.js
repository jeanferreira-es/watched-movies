function Luminosidade(hex) {
    var r, g, b, longo;
    hex = hex.replace( '#', '' );
    longo = hex.length > 3;
 
    r = longo ? parseInt(hex.substr(0, 2), 16) : parseInt(hex.substr(0, 1), 16) * 17;
    g = longo ? parseInt(hex.substr(2, 2), 16) : parseInt(hex.substr(1, 1), 16) * 17;
    b = longo ? parseInt(hex.substr(4, 2), 16) : parseInt(hex.substr(2, 1), 16) * 17;
 
    return ( r * 299 + g * 587 + b * 114) / 1000;
 }

 export default Luminosidade;