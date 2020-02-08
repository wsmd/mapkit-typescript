// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * A rectangular area on a two-dimensional map projection.
   */
  class MapRect {
    /**
     * Initializes a mapkit.MapRect object.
     *
     * @param x The origin point along the east-west axis of the map projection.
     * @param y The origin point along the north-south axis of the map projection.
     * @param width The distance (measured using map points) along the east-west
     * axis of the map projection.
     * @param height The distance (measured using map points) along the north-south
     * axis of the map projection.
     */
    constructor(x: number, y: number, width: number, height: number);
    /**
     * The origin point of a rectangle.
     */
    origin: mapkit.MapPoint;
    /**
     * The width and height of a rectangle, starting from the origin point.
     */
    size: mapkit.MapSize;
    /**
     * The maximum x-axis value of a rectangle.
     */
    maxX(): number;
    /**
     * The maximum y-axis value of a rectangle.
     */
    maxY(): number;
    /**
     * The mid-point along the x-axis of a rectangle.
     */
    midX(): number;
    /**
     * The mid-point along the y-axis of a rectangle.
     */
    midY(): number;
    /**
     * The minimum x-axis value of a rectangle.
     */
    minX(): number;
    /**
     * The minimum y-axis value of a rectangle.
     */
    minY(): number;
    /**
     * Returns a copy of a map rectangle.
     */
    copy(): MapRect;
    /**
     * Indicates whether two map rectangles are equal.
     *
     * @param anotherRect The map rectangle to equate to.
     */
    equals(anotherRect: mapkit.MapRect): boolean;
    /**
     * @param scaleFactor The scale factor.
     * @param scaleCenter The center map point for scaling.
     */
    scale(scaleFactor: number, scaleCenter: mapkit.MapPoint): MapRect;
    /**
     * Returns the region that corresponds to a map rectangle.
     */
    toCoordinateRegion(): mapkit.CoordinateRegion;
  }
}
