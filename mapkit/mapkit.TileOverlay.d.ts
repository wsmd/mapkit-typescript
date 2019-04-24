// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * An overlay that covers an area of the map with bitmap tiles.
   */
  class TileOverlay {
    /**
     * Creates a tile overlay with a URL template and style options.
     */
    constructor(urlTemplate: string | URLTemplateCallback, options?: TileOverlayConstructorOptions);
    /**
     * A string, or callback function that returns a string, with a URL that
     * provides the requested tile.
     */
    urlTemplate: string | URLTemplateCallback;
    /**
     * Reloads the tile overlay for the displayed map region with the latest
     * data values.
     */
    reload(): void;
    /**
     * Minimum zoom level of the overlay.
     */
    minimumZ: number;
    /**
     * Maximum zoom level of the overlay.
     */
    maximumZ: number;
    /**
     * Opacity level of the overlay.
     */
    opacity: number;
    /**
     * Custom data used to populate the URL template.
     */
    data: object;
  }

  /**
   * Attributes used when initializing a tile overlay, including minimum and
   * maximum zoom, opacity, and custom data.
   */
  interface TileOverlayConstructorOptions {
    /**
     * Minimum zoom level of the overlay.
     */
    minimumZ?: number;
    /**
     * Maximum zoom level of the overlay.
     */
    maximumZ?: number;
    /**
     * Opacity level of the overlay.
     */
    opacity?: number;
    /**
     * Custom data used to populate the URL template.
     */
    data?: object;
  }

  type URLTemplateCallback = (
    x: number,
    y: number,
    z: number,
    scale: number,
    data: object,
  ) => string;
}
