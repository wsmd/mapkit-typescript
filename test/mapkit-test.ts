mapkit.init({
  authorizationCallback(done) {
    done('token');
  },
  language: 'en',
});

mapkit.addEventListener(
  'configuration-change',
  function(event) {
    if (event.status === 'Initialized') {
      this.alert('Initialized');
      console.log('Initialized!');
    }
  },
  window,
);

const map = new mapkit.Map(document.createElement('div'));

map.addEventListener('select', event => {
  const annotations: mapkit.Annotation[] = event.target.annotations;
  if (event.annotation) {
    const annotation: mapkit.Annotation = event.annotation;
  }
  if (event.overlay) {
    const overlay: mapkit.Overlay = event.overlay;
  }
});

mapkit.removeEventListener('configuration-change', () => {});

const annotation = new mapkit.ImageAnnotation(new mapkit.Coordinate(1, 1), {
  title: 'annotation',
  callout: {
    calloutAnchorOffsetForAnnotation(annotation) {
      return new DOMPoint(1, 2);
    },
    calloutShouldAnimateForAnnotation() {
      return true;
    },
  },
  selected: false,
  url: { 1: '', 2: '', 3: '' },
});

new mapkit.ImageAnnotation(new mapkit.Coordinate(1, 1), {
  selected: false,
  url: {
    1: '',
  },
});

var points1 = [[10, 1], [5, 6], [1, 1]];
var coords = points1.map(function(point) {
  return new mapkit.Coordinate(1, 1);
});

var style = new mapkit.Style({
  lineWidth: 2,
  lineJoin: 'round',
  lineDash: [8, 4],
  strokeColor: '#F0F',
});

var polyline = new mapkit.PolylineOverlay(coords, { style: style });
map.addOverlay(polyline);

let points = [[41, -109.05], [41, -102.05], [37, -102.05], [37, -109.05]];

// Map the raw coordinates to Coordinates:
const coordinates = points.map(function(point) {
  return new mapkit.Coordinate(1, 1);
});
var style = new mapkit.Style({
  strokeColor: '#F00',
  strokeOpacity: 0.2,
  lineWidth: 2,
  lineJoin: 'round',
});

var rectangle = new mapkit.PolygonOverlay(coordinates, { style: style });
map.addOverlay(rectangle);

var stats = [
  { name: 'San Francisco', coordinate: [37.783333, -122.416667], population: 852469 },
  { name: 'Oakland', coordinate: [37.804444, -122.270833], population: 390724 },
  { name: 'San Jose', coordinate: [37.333333, -121.9], population: 1000536 },
];

var style = new mapkit.Style({
  lineWidth: 2, // 2 CSS pixels
  strokeColor: '#999',
  fillColor: '#FFF',
});

var circles = stats.map(function(stat) {
  var coordinate = new mapkit.Coordinate(1, 1),
    radius = stat.population / 85, // radius is expressed in meters
    circle = new mapkit.CircleOverlay(coordinate, radius);
  circle.data = { population: stat.population };
  circle.style = style;
  return circle;
});

map.addOverlays(circles);

const geo = new mapkit.Geocoder({
  language: '1',
});

const id = geo.reverseLookup(
  new mapkit.Coordinate(1, 1),
  (error, data) => {
    data.results.map(d => {
      d.coordinate;
    });
  },
  {
    language: 'en',
  },
);

geo.cancel(id);

geo.lookup(
  'address',
  (error, data) => {
    data.results.map(d => {
      d.coordinate;
    });
  },
  {
    limitToCountries: 'USA',
  },
);

var search = new mapkit.Search({ region: map.region });

search.search('coffee shop', function(error, data) {
  data.query.charCodeAt(0);
});

search.autocomplete('coffee shop', (error, data) => {
  if (error) {
    return;
  }
  data.results[0].coordinate;
});

var myDirections = new mapkit.Directions();
myDirections.route(
  {
    origin: 'San Francisco, CA',
    destination: 'Oakland, CA',
    transportType: mapkit.Directions.Transport.Automobile,
  },
  function(error, data) {
    // Results are returned asynchronously via this callback function, in `data`
  },
);

var coordinate = new mapkit.Coordinate(37.415, -122.048333); // latitude, longitude
var span = new mapkit.CoordinateSpan(0.016, 0.016); // latitude delta, longitude delta
var region = new mapkit.CoordinateRegion(coordinate, span);

var mapPoint = new mapkit.MapPoint(0.1, 0.2);
var x = mapPoint.x; // 0.1
var y = mapPoint.y; // 0.2
mapPoint.toCoordinate().latitude;

var mapRect = new mapkit.MapRect(0.1, 0.2, 0.3, 0.4);

// mapRect.origin is a MapPoint:
var x = mapRect.origin.x; // 0.1
var y = mapRect.origin.x; // 0.2

// mapRect.size is a MapSize:
var width = mapRect.size.width; // 0.3
var height = mapRect.size.height; // 0.4

var mapSize = new mapkit.MapSize(0.3, 0.4);
var width = mapSize.width; // 0.3
var height = mapSize.height; // 0.4

var people = [
  {
    title: 'John Appleseed',
    coordinate: new mapkit.Coordinate(37.3349, -122.0090201),
    role: 'developer',
    building: 'HQ',
  },
  {
    title: 'Anne Johnson',
    coordinate: new mapkit.Coordinate(37.722319, -122.434979),
    role: 'manager',
    building: 'HQ',
  },
];

var factory = function(
  coordinate: mapkit.Coordinate,
  options: mapkit.AnnotationConstructorOptions,
) {
  var div = document.createElement('div'),
    name = options.title, // "John Appleseed"
    parts = (name as string).split(' '); // ["John", "Appleseed"]
  div.textContent = parts[0].charAt(0) + parts[1].charAt(0); // "JA"
  div.className = 'circle-annotation';
  return div;
};

people.forEach(function(person) {
  var options = {
    title: person.title,
    data: { role: person.role, building: person.building },
  };
  var annotation = new mapkit.Annotation(person.coordinate, factory, options);
  annotation.addEventListener('deselect', event => {
    let map: mapkit.Map = event.target;
    let type: string = event.type;
  });
  annotation.addEventListener('select', event => {
    let map: mapkit.Map = event.target;
    let type: string = event.type;
  });
  annotation.addEventListener('dragging', event => {
    let map: mapkit.Map = event.target;
    let type: string = event.type;
  });
  annotation.addEventListener('drag-end', event => {
    let map: mapkit.Map = event.target;
    let type: string = event.type;
  });
  annotation.addEventListener(
    'drag-start',
    function(event) {
      let map: mapkit.Map = event.target;
      let type: string = event.type;
      let thisObject: { key: string } = this;
    },
    {
      key: 'value',
    },
  );
  map.addAnnotation(annotation);
});

var portland = new mapkit.Coordinate(45.5231, -122.6765);
var customMarker = new mapkit.MarkerAnnotation(portland, {
  color: 'green',
  glyphColor: 'brown',
  glyphImage: { 1: 'glyphImage.png' },
  selectedGlyphImage: { 1: 'detailedIcon.png', 2: 'detailedIcon_2x.png', 3: 'detailedIcon_3x.png' },
});

var calloutDelegate = {
  calloutRightAccessoryForAnnotation: function() {
    var accessoryViewRight = document.createElement('a');
    accessoryViewRight.className = 'right-accessory-view';
    accessoryViewRight.href = 'https://www.nps.gov/stli/index.htm';
    accessoryViewRight.target = '_blank';
    accessoryViewRight.appendChild(document.createTextNode('ⓘ'));

    return accessoryViewRight;
  },
};

new mapkit.MarkerAnnotation(new mapkit.Coordinate(40.6892, -74.0445), {
  title: 'Title',
  subtitle: 'Subtitle',
  callout: calloutDelegate,
});

const overlay = new mapkit.CircleOverlay(coordinate, 1000);

overlay.addEventListener('select', event => {
  let radius: number = event.target.radius;
});
