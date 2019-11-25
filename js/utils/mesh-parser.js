export default (file, callback) => {
    let meshReader = new FileReader();

    meshReader.addEventListener("load", function(event) {
        let textFile = event.target;
        const data = textFile.result.split(/\n|\r\n/);

        data.shift();
        data.shift();
        const totalPoints = Number(data[0].split(' ')[0]);
        const totalPolygons = Number(data[0].split(' ')[1]);
        data.shift();
        const pointsArr = data.slice(0, totalPoints).map((pointLine) => pointLine.split(" ").slice(0, 2));
        const polygonData = data.slice(totalPoints, data.length);
        let polygonsArr = [];
        let maxX = 0;
        let maxY = 0;
        let minX = 0;
        let minY = 0;
        polygonData.forEach((polygonLine) => {
          let pts = polygonLine.split(" ").slice(1).map((pt) => parseInt(pt));
          let points = [];
          for(let i = 0; i<pts.length; i+=2){
            if(maxX < pts[i]){
              maxX = pts[i];
            }
            if(maxY < pts[i+1]){
              maxY = pts[i+1];
            }
            if(minX > pts[i]){
              minX = pts[i];
            }
            if(minY > pts[i+1]){
              minY = pts[i+1];
            }
            points.push([pts[i], pts[i+1]]);
          }
          if(points.length){
            polygonsArr.push(points);
          }
        });
        polygonsArr.forEach((points, polygonIndex) => {
          points.forEach((point, pointIndex) => {
            polygonsArr[polygonIndex][pointIndex][0] -= minX;
            polygonsArr[polygonIndex][pointIndex][1] -= minY;
          });
        });
        maxX -= minX;
        maxY -= minY;
        console.log("meshData", totalPoints, totalPolygons, pointsArr, polygonsArr, maxX, maxY);

        const meshData =  {totalPoints:totalPoints, totalPolygons:totalPolygons, pointsArr:pointsArr, polygonsArr:polygonsArr, maxX:maxX, maxY:maxY};
        callback(meshData);
    });

    //Read the text file
    meshReader.readAsText(file);
}
