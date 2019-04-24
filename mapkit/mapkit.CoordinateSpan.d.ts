// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * The width and height of a map region.
   */
  class CoordinateSpan {
    /**
     * Creates a new coordinate span object with the specified latitude and
     * longitude deltas.
     *
     * @param latitudeDelta The amount of north-to-south distance (measured in
     * degrees) to display on the map.
     * @param longitudeDelta The amount of east-to-west distance (measured in
     * degrees) to display for the map region.
     */
    constructor(latitudeDelta: number, longitudeDelta: number);
    /**
     * The amount of north-to-south distance (measured in degrees) to display on
     * the map.
     */
    latitudeDelta: number;
    /**
     * The amount of east-to-west distance (measured in degrees) to display for
     * the map region.
     */
    longitudeDelta: number;
    /**
     * Returns a copy of the coordinate span.
     */
    copy(): CoordinateSpan;
    /**
     * Returns a Boolean value that indicates whether two spans are equal.
     */
    equals(anotherSpan: CoordinateSpan): boolean;
  }
}
