import polyline from 'google-polyline'

const RNPolyline = {
  decode (value) {
    var values = integers(value)
    var points = []

    for (var i = 0; i < values.length; i += 2) {
      points.push({
        latitude: (values[ i + 0 ] += (values[ i - 2 ] || 0)) / 1e5,
        longitude: (values[ i + 1 ] += (values[ i - 1 ] || 0)) / 1e5
      })
    }
    return points
  },
  encode (coordsArray) {
    return polyline.encode(coordsArray.map(pairCoords => [pairCoords.latitude, pairCoords.longitude]))
  }
}
const { decode, encode } = RNPolyline
export default RNPolyline
export { decode, encode }


function sign(value) {
  return value & 1 ? ~(value >>> 1) : (value >>> 1)
}
function integers(value) {
  var values = []
  var byte = 0
  var current = 0
  var bits = 0

  for (var i = 0; i < value.length; i++) {
    byte = value.charCodeAt(i) - 63
    current = current | ((byte & 0x1F) << bits)
    bits = bits + 5

    if (byte < 0x20) {
      values.push(sign(current))
      current = 0
      bits = 0
    }
  }

  return values
}
