export default (file, callback) => {
    let tracerReader = new FileReader();

    tracerReader.addEventListener("load", function(event) {
        let textFile = event.target;
        const data = JSON.parse(textFile.result);
        callback(data);
    });

    //Read the text file
    tracerReader.readAsText(file);
}
