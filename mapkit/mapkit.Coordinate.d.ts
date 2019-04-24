// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * An object representing the latitude and longitude for a point on the
   * Earth's surface.
   */
  class Coordinate {
    /**
     * Creates a coordinate object with the specified latitude and longitude.
     */
    constructor(latitude: number, longitude: number);
    /**
     * The latitude in degrees.
     */
    latitude: number;
    /**
     * The longitude in degrees.
     */
    longitude: number;
    /**
     * Returns a copy of the coordinate.
     */
    copy(): mapkit.Coordinate;
    /**
     * Returns a Boolean value indicating whether two coordinates are equal.
     */
    equals(anotherCoordinate: mapkit.Coordinate): boolean;
    /**
     * Returns the map point that corresponds to the coordinate.
     */
    toMapPoint(): mapkit.MapPoint;
    /**
     * Returns the unwrapped map point that corresponds to the coordinate.
     */
    toUnwrappedMapPoint(): mapkit.MapPoint;
  }
}
