// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * A pair of values in map units that define the width and height of a
   * projected coordinate span.
   */
  class MapSize {
    /**
     * Initializes a mapkit.MapSize object.
     *
     * @param width The distance (measured using map points) along the east-west
     * axis of the map projection.
     * @param height The distance (measured using map points) along the
     * north-south axis of the map projection.
     */
    constructor(width: number, height: number);
    /**
     * The height value, in map point units.
     */
    height: number;
    /**
     * The width value, in map point units.
     */
    width: number;
    /**
     * Returns a copy of a map size.
     */
    copy(): MapSize;
    /**
     * Indicates whether two map sizes are equal.
     *
     * @param anotherSize The map size to equate to.
     */
    equals(anotherSize: MapSize): boolean;
  }
}
