// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * A set of observable attributes for overlays, including color and opacity of
   * stroke and fill, and line styles.
   */
  class Style {
    /**
     * Creates and initializes a style object.
     */
    constructor(options?: StyleConstructorOptions);
    /**
     * The fill color of a shape.
     */
    fillColor: string;
    /**
     * The opacity of the fill color.
     */
    fillOpacity: number;
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     */
    fillRule: string;
    /**
     * The style to use when drawing line endings.
     */
    lineCap: string;
    /**
     * An array of line and gap lengths, used to create a dashed line.
     */
    lineDash: number[];
    /**
     * The number of CSS pixels to offset drawing of a line's dash pattern.
     */
    lineDashOffset: number;
    /**
     * The style to use when drawing joins between line segments.
     */
    lineJoin: string;
    /**
     * The width of a line's stroke, in CSS pixels.
     */
    lineWidth: number;
    /**
     * The stroke color of a line.
     */
    strokeColor: string;
    /**
     * The opacity of the stroke color.
     */
    strokeOpacity: number;
  }

  /**
   * Initial values of options for applying style to overlays.
   */
  interface StyleConstructorOptions {
    /**
     * The fill color of a shape.
     */
    fillColor?: string;
    /**
     * The opacity of the fill color.
     */
    fillOpacity?: number;
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     */
    fillRule?: string;
    /**
     * The style to use when drawing line endings.
     */
    lineCap?: string;
    /**
     * An array of line and gap lengths, used to create a dashed line.
     */
    lineDash?: number[];
    /**
     * The number of CSS pixels to offset drawing of a line's dash pattern.
     */
    lineDashOffset?: number;
    /**
     * The style to use when drawing joins between line segments.
     */
    lineJoin?: string;
    /**
     * The width of a line's stroke, in CSS pixels.
     */
    lineWidth?: number;
    /**
     * The stroke color of a line.
     */
    strokeColor?: string;
    /**
     * The opacity of the stroke color.
     */
    strokeOpacity?: number;
  }
}
