import polyline from 'google-polyline'

const RNPolyline = {
  decode (code) {
    return polyline.decode(code).map( coords => ({ latitude: coords[0], longitude: coords[1] }) )
  },
  encode (coordsArray) {
    return polyline.encode(coordsArray.map(pairCoords => [pairCoords.latitude, pairCoords.longitude]))
  }
}
const { decode, encode } = RNPolyline
export default RNPolyline
export { decode, encode }
