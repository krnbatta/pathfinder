function mapParser(file,callback)
{
    let mapReader = new FileReader();

    mapReader.addEventListener("load", function(event) {
        let textFile = event.target;
        callback(textFile.result);
    });

    //Read the text file
    mapReader.readAsText(file);
}
