export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        // console.log("time to update");

        const benchesObj = {};
        benches.forEach(bench => benchesObj[bench.id] = bench);
    }

    createMarkerFromBench(bench) {
        const position = new google.maps.LatLng(bench.lat, bench.lng);
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            benchId: benchId
        });
    }

}