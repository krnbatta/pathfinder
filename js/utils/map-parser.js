export default (file, callback) => {
    let mapReader = new FileReader();

    mapReader.addEventListener("load", function(event) {
        let textFile = event.target;
        const data = textFile.result.split(/\n|\r\n/);

        data.shift();

        const height = Number(data.shift().split(' ').pop());
        const width = Number(data.shift().split(' ').pop());
        data.shift();
        const mapStr = data.reduce((f,e)=>f+e,'');
        console.log("mapData", width, height, mapStr);

        const mapData =  {height:height, width:width, mapStr:mapStr};
        callback(mapData);
    });

    //Read the text file
    mapReader.readAsText(file);
}
