// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * An abstract base object that defines the methods and attributes for map overlays.
   */
  abstract class Overlay {
    /**
     * Starts listening for the specified type of event.
     */
    addEventListener<T>(
      type: OverlayEventType,
      listener: (event: EventBase<this>) => void,
      thisObject?: T,
    ): void;
    /**
     * Stops listening for the specified type of event.
     */
    removeEventListener<T>(
      type: OverlayEventType,
      listener: (event: EventBase<this>) => void,
      thisObject?: T,
    ): void;
    /**
     * Custom data to associate with this overlay.
     */
    data: object;
    /**
     * A Boolean value that determines if an overlay is visible.
     */
    visible: boolean;
    /**
     * A Boolean value that determines whether the overlay responds to user interaction.
     */
    enabled: boolean;
    /**
     * A Boolean value that indicates whether the overlay is selected.
     */
    selected: boolean;
    /**
     * Style properties to apply to the overlay.
     */
    style: mapkit.Style;
    /**
     * The map to which the overlay is added.
     */
    readonly map: mapkit.Map | null;
  }

  /**
   * A circular overlay with a configurable radius, centered on a specific
   * geographic coordinate.
   */
  class CircleOverlay extends Overlay {
    /**
     * Creates a circle overlay with a center coordinate, radius, and style options.
     *
     * @param coordinate The coordinate of the circle's center.
     * @param radius The circle's radius, in meters.
     * @param options An object literal of Overlay properties used to initialize
     * the circle.
     */
    constructor(coordinate: mapkit.Coordinate, radius: number, options?: StylesOverlayOptions);
    /**
     * The coordinate of the circle overlay's center.
     */
    coordinate: mapkit.Coordinate;
    /**
     * The circle overlay's radius in meters.
     */
    radius: number;
  }

  /**
   * An overlay made up of connected line segments that do not form a closed shape.
   */
  class PolylineOverlay extends Overlay {
    /**
     * Creates a polyline overlay with coordinate points and style options.
     *
     * @param points The points in the polyline as an array of mapkit.Coordinate
     * @param options An object literal of style options with which to initialize
     * the polyline.
     */
    constructor(points: mapkit.Coordinate[], options?: StylesOverlayOptions);
    /**
     * An array of coordinate points that define the polyline overlay's shape.
     */
    points: mapkit.Coordinate[];
  }

  /**
   * An overlay made up of one or more points, forming a closed shape.
   */
  class PolygonOverlay extends Overlay {
    /**
     * Creates a polygon overlay with an array of points and style options.
     *
     * @param points The points in the polygon as an array of arrays of
     * mapkit.Coordinate, or an array of mapkit.Coordinate. If it's the latter,
     * the array is auto-wrapped by an enclosing array.
     * @param options An object literal of options with which to initialize the
     * polygon.
     */
    constructor(points: mapkit.Coordinate[], options?: StylesOverlayOptions);
    /**
     * One or more arrays of coordinates that define the polygon overlay shape.
     */
    points: mapkit.Coordinate[];
  }

  interface OverlayOptions {
    /**
     * Custom data to associate with this overlay.
     */
    data?: object;
    /**
     * A Boolean value that determines if an overlay is visible.
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the overlay responds to user
     * interaction.
     */
    enabled?: boolean;
    /**
     * A Boolean value that indicates whether the overlay is selected.
     */
    selected?: boolean;
  }

  /**
   * An observable set of style attributes for an overlay.
   */
  interface StylesOverlayOptions extends OverlayOptions {
    style?: mapkit.Style;
  }

  type OverlayEventType = 'select' | 'deselect';
}
