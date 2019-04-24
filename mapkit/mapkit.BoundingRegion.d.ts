// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * A rectangular area on a map, defined by coordinates of the rectangle's
   * northeast and southwest corners.
   */
  class BoundingRegion {
    /**
     * Creates a rectangular bounding region defined by the latitude and
     * longitude coordinates of the rectangle's northeast and southwest corners.
     *
     * @param northLatitude The north latitude of the bounding region.
     * @param eastLongitude The east longitude of the bounding region.
     * @param southLatitude The south latitude of the bounding region.
     * @param westLongitude The west longitude of the bounding region.
     */
    constructor(
      northLatitude: number,
      eastLongitude: number,
      southLatitude: number,
      westLongitude: number,
    );
    /**
     * The east longitude of the bounding region.
     */
    eastLongitude: number;
    /**
     * The north latitude of the bounding region.
     */
    northLatitude: number;
    /**
     * The south latitude of the bounding region.
     */
    southLatitude: number;
    /**
     * The west longitude of the bounding region.
     */
    westLongitude: number;
    /**
     * Returns a copy of the calling bounding region.
     */
    copy(): BoundingRegion;
    /**
     * Returns the coordinate region that corresponds to the calling bounding region.
     */
    toCoordinateRegion(): mapkit.CoordinateRegion;
  }
}
