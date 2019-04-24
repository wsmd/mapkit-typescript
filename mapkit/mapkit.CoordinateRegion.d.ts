// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * A rectangular area on a map defined by a center coordinate and a span,
   * expressed in degrees of latitude and longitude.
   */
  class CoordinateRegion {
    /**
     * Creates A rectangular geographic region centered around a latitude and
     * longitude coordinate.
     *
     * @param center mapkit.Coordinate that is center point of the region.
     * @param span A mapkit.CoordinateSpan that represents the amount of map to
     * display. The span also defines the current zoom level used by the map object.
     */
    constructor(center: mapkit.Coordinate, span: mapkit.CoordinateSpan);
    /**
     * The center point of the region.
     */
    center: mapkit.Coordinate;
    /**
     * The horizontal and vertical span representing the amount of map to display.
     */
    span: mapkit.CoordinateSpan;
    /**
     * Returns a copy of the calling coordinate region.
     */
    copy(): CoordinateRegion;
    /**
     * Returns a Boolean value indicating whether two regions are equal.
     */
    equals(anotherRegion: CoordinateRegion): boolean;
    /**
     * Returns the map rectangle that corresponds to the calling coordinate region.
     */
    toMapRect(): mapkit.MapRect;
    /**
     * Returns the bounding region that corresponds to the calling coordinate region.
     */
    toBoundingRegion(): mapkit.BoundingRegion;
  }
}
