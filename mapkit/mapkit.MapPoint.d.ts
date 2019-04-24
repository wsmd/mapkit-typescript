// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * A location on a map when the Earth's surface is projected onto a
   * two-dimensional surface.
   */
  class MapPoint {
    /**
     * Initializes a mapkit.MapPoint object.
     *
     * @param x The point along the east-west axis of the map projection.
     * @param  The point along the north-south axis of the map projection.
     */
    constructor(x: number, y: number);
    /**
     * The location of the point along the x-axis of the map.
     */
    x: number;
    /**
     * The location of the point along the y-axis of the map.
     */
    y: number;
    /**
     * Returns a copy of a map point.
     */
    copy(): MapPoint;
    /**
     * Indicates whether two map points are equal.
     *
     * @param anotherPoint A map point to use for comparison.
     */
    equals(anotherPoint: MapPoint): boolean;
    /**
     * Returns a coordinate containing the latitude and longitude corresponding
     * to a map point.
     */
    toCoordinate(): mapkit.Coordinate;
  }
}
