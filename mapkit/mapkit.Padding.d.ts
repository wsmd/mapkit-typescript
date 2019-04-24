// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * The values that define content padding within the map view frame.
   */
  class Padding {
    /**
     * Creates a padding object, and initializes its inset margin properties.
     *
     * @param top The amount of padding, in CSS pixels, to inset the map from
     * the top edge.
     * @param right The amount of padding, in CSS pixels, to inset the map from
     * the right edge.
     * @param bottom The amount of padding, in CSS pixels, to inset the map from
     * the left edge.
     * @param left The amount of padding, in CSS pixels, to inset the map from
     * the left edge.
     */
    constructor(top?: number, right?: number, bottom?: number, left?: number);
    /**
     * Creates a padding object, and initializes its inset margin properties.
     *
     * @param options An object literal of inset margin properties
     */
    constructor(options?: PaddingConstructorOptions);
    /**
     * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
     */
    bottom: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the left edge.
     */
    left: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the right edge.
     */
    right: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the top edge.
     */
    top: number;
  }

  interface PaddingConstructorOptions {
    /**
     * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
     */
    bottom?: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the left edge.
     */
    left?: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the right edge.
     */
    right?: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the top edge.
     */
    top?: number;
  }
}
