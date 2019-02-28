// 20190206093846
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson

// Access place
// data.features[0].properties.place 
// var dataArr = data.features

// dataArr.forEach()
// for(var i in dataArr){
//   // put some logic 
//  // // template literal to display data from an AJAX call on your HTML page
//   .append()
//  }

/*
part 1 rendering data:
[x]What is the structure of the data?
  // Access place
  // data.features[0].properties.place 
  // var dataArr = data.features

  // dataArr.forEach()
  // for(var i in dataArr){
  //   // put some logic 
  //  // // template literal to display data from an AJAX call on your HTML page
  //   .append()
  //  }
[x] How many earthquakes does it list? 
  2
[] How would you grab the first earthquake?
  data> features (arr)> I notice there are 2 obj in my arra, each index is the place property > 2 earthquakes 
How would you grab its title?
  > data.metadata.title
How would you grab its geological coordinates:
  latitude? 
  longitude? data.features[0].geometry.coordinates[0] // => -68.5523
When did it happen?
How many hours ago is that?
*/
{
  "type": "FeatureCollection",
  "metadata": {
    "generated": 1549474669000,
    "url": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
    "title": "USGS Significant Earthquakes, Past Week",
    "status": 200,
    "api": "1.7.0",
    "count": 2
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "mag": 5.3,
        "place": "31km SSE of Boca de Yuma, Dominican Republic",
        "time": 1549290828810,
        "updated": 1549409455385,
        "tz": -240,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/pr2019035005",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/pr2019035005.geojson",
        "felt": 430,
        "cdi": 4.3,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 617,
        "net": "pr",
        "code": "2019035005",
        "ids": ",pt19035050,us2000jd4z,pr2019035005,",
        "sources": ",pt,us,pr,",
        "types": ",dyfi,geoserve,moment-tensor,origin,phase-data,",
        "nst": 22,
        "dmin": 0.4149,
        "rms": 0.8,
        "gap": 189,
        "magType": "ml",
        "type": "earthquake",
        "title": "M 5.3 - 31km SSE of Boca de Yuma, Dominican Republic"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.5523,
          18.1358,
          74
        ]
      },
      "id": "pr2019035005"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.6,
        "place": "14km ENE of Puerto Madero, Mexico",
        "time": 1549037653090,
        "updated": 1549371802866,
        "tz": -360,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us2000jbub",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us2000jbub.geojson",
        "felt": 368,
        "cdi": 6.1,
        "mmi": 6.19,
        "alert": "yellow",
        "status": "reviewed",
        "tsunami": 1,
        "sig": 895,
        "net": "us",
        "code": "2000jbub",
        "ids": ",at00pm993p,pt19032000,us2000jbub,",
        "sources": ",at,pt,us,",
        "types": ",dyfi,geoserve,ground-failure,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": null,
        "dmin": 0.63,
        "rms": 1.33,
        "gap": 135,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.6 - 14km ENE of Puerto Madero, Mexico"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.2981,
          14.7628,
          67.93
        ]
      },
      "id": "us2000jbub"
    }
  ],
  "bbox": [
    -92.2981,
    14.7628,
    67.93,
    -68.5523,
    18.1358,
    74
  ]
}