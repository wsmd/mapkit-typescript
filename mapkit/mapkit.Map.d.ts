// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * An embeddable interactive map that you add to a webpage.
   */
  class Map {
    /**
     * Creates a map that you embed on a webpage, and initializes its display
     * properties and other options.
     *
     * @parent parent A DOM element or the ID of a DOM element to use as this
     * map's container.
     * @param options An object that contains options for initializing a map's
     * features.
     */
    constructor(parent: string | Element, options?: MapConstructorOptions);
    /**
     * Adds an event listener to handle events triggered by user interactions
     * and the framework.
     *
     * @param type The event type of interest (e.g., "select").
     * @param listener The callback function to invoke. Listener is passed a
     * mapkit.Map event as its sole argument.
     * @param thisObject An object to be set as the this keyword on the listener
     * function.
     */
    addEventListener<T, K extends keyof MapEvents<this>>(
      type: K,
      listener: (this: T, event: MapEvents<this>[K]) => void,
      thisObject?: T,
    ): void;
    /**
     * Removes an event listener.
     */
    removeEventListener<T, K extends keyof MapEvents<this>>(
      type: K,
      listener: (type: T, event: MapEvents<this>[K]) => void,
      thisObject?: T,
    ): void;
    /**
     * Removes the map's element from the DOM and releases internal references to
     * this map to free up memory.
     */
    destroy(): void;
    /**
     * The map's DOM element.
     */
    readonly element: Element;

    // Accessing Interaction Properties

    /**
     * A Boolean value that indicates if map rotation is available.
     */
    isRotationAvailable: boolean;
    /**
     * A Boolean value that determines whether the user may rotate the map using
     * the compass control or a rotate gesture.
     */
    isRotationEnabled: boolean;
    /**
     * A Boolean value that determines whether the user may scroll the map with
     * a pointing device or with gestures on a touchscreen.
     */
    isScrollEnabled: boolean;
    /**
     * A Boolean value that determines whether the user may zoom in and out on
     * the map using pinch gestures or the zoom control.
     */
    isZoomEnabled: boolean;

    // Manipulating the Visible Portion of the Map

    /**
     * The map coordinate at the center of the map view.
     */
    center: mapkit.Coordinate;
    /**
     * Centers the map to the provided coordinate, with optional animation.
     */
    setCenterAnimated(coordinate: mapkit.Coordinate, animate?: boolean): this;
    /**
     * The area currently displayed by the map.
     */
    region: mapkit.CoordinateRegion;
    /**
     * Changes the map's region to the region provided, with optional animation.
     */
    setRegionAnimated(region: mapkit.CoordinateRegion, animate?: boolean): this;
    /**
     * The map's rotation, in degrees.
     */
    rotation: number;
    /**
     * Changes the map's rotation setting to the number of degrees specified.
     */
    setRotationAnimated(degrees: number, animate?: boolean): this;
    /**
     * The visible area of the map defined in map units.
     */
    visibleMapRect: mapkit.MapRect;
    /**
     * Changes the map's visible map rectangle to the specified map rectangle.
     */
    setVisibleMapRectAnimated(mapRect: mapkit.MapRect, animate?: boolean): this;

    // Configuring the Map's Appearance

    /**
     * Constants indicating the color scheme of the map.
     */
    static readonly ColorSchemes: {
      /**
       * A constant indicating a light color scheme.
       */
      readonly Light: string;
      /**
       * A constant indicating a dark color scheme.
       */
      readonly Dark: string;
    };
    /**
     * Constants representing the type of map to display.
     */
    static readonly MapTypes: {
      /**
       * A street map that shows the position of all roads and some road names.
       */
      readonly Standard: string;
      /**
       * A street map where your data is emphasized over the underlying map details.
       */
      readonly MutedStandard: string;
      /**
       * A satellite image of the area with road and road name information
       * layered on top.
       */
      readonly Hybrid: string;
      /**
       * A satellite image of the area.
       */
      readonly Satellite: string;
    };
    /**
     * Constants indicating the system of measurement displayed on the map.
     */
    static readonly Distances: {
      /**
       * A constant indicating the measurement system is adaptive, and determined
       * based on the map's language.
       */
      readonly Adaptive: string;
      /**
       * A constant indicating the measurement system is imperial.
       */
      readonly Imperial: string;
      /**
       * A constant indicating the measurement system is metric.
       */
      readonly Metric: string;
    };
    /**
     * The map’s color scheme when displaying standard or muted standard map types.
     */
    colorScheme: string;
    /**
     * The system of measurement displayed on the map.
     */
    distances: string;
    /**
     * The type of data displayed by the map view.
     */
    mapType: string;
    /**
     * The map's inset margins.
     */
    padding: mapkit.Padding;
    /**
     * A feature visibility setting that determines when the compass is visible.
     */
    showsCompass: string;
    /**
     * A Boolean value that determines whether to display a control that lets
     * users choose the map type.
     */
    showsMapTypeControl: boolean;
    /**
     * A Boolean value that determines whether to display a control for zooming
     * in and zooming out on a map.
     */
    showsZoomControl: boolean;
    /**
     * A Boolean value that determines whether the user location control is visible.
     */
    showsUserLocationControl: boolean;
    /**
     * A Boolean value that determines whether the map displays points of interest.
     */
    showsPointsOfInterest: boolean;
    /**
     * A feature visibility setting that determines when the map's scale is displayed.
     */
    showsScale: string;
    /**
     * The CSS color that is used to paint the user interface controls on the map.
     */
    tintColor: string;
    /**
     * Adjusts the maps visible region to bring the specified overlays and
     * annotations into view.
     */
    showItems<I = Array<mapkit.Annotation | mapkit.Overlay>>(
      items: I,
      options?: MapShowItemsOptions,
    ): I;

    // Annotating the Map

    /**
     * An array of all the annotations on the map.
     */
    annotations: mapkit.Annotation[];
    /**
     * The annotation that is selected.
     */
    selectedAnnotation: mapkit.Annotation | null;
    /**
     * A delegate method for modifying an annotation that represents a group of
     * annotations that are combined into a cluster.
     */
    annotationForCluster(clusterAnnotation: mapkit.Annotation): void;
    /**
     * Returns the list of annotation objects located in the specified map
     * rectangle.
     */
    annotationsInMapRect(mapRect: mapkit.MapRect): mapkit.Annotation[];
    /**
     * Adds an annotation to the map.
     */
    addAnnotation(annotation: mapkit.Annotation): mapkit.Annotation;
    /**
     * Adds multiple annotations to the map.
     */
    addAnnotations(annotations: mapkit.Annotation[]): mapkit.Annotation[];
    /**
     * Removes an annotation from the map.
     */
    removeAnnotation(annotation: mapkit.Annotation): mapkit.Annotation;
    /**
     * Removes multiple annotations from the map.
     */
    removeAnnotations(annotations: mapkit.Annotation[]): mapkit.Annotation[];

    // Adding and Removing Overlays

    /**
     * An array of all of the map's overlays.
     */
    overlays: mapkit.Overlay[];
    /**
     * The overlay on the map that is selected.
     */
    selectedOverlay: mapkit.Overlay | null;
    /**
     * Returns an array of overlays at a given point on the webpage.
     */
    overlaysAtPoint(point: DOMPoint): mapkit.Overlay[];
    /**
     * Adds an overlay to the map.
     */
    addOverlay(overlay: mapkit.Overlay): mapkit.Overlay;
    /**
     * Adds multiple overlays to the map.
     */
    addOverlays(overlays: mapkit.Overlay[]): mapkit.Overlay[];
    /**
     * Removes an overlay from the map.
     */
    removeOverlay(overlay: mapkit.Overlay): mapkit.Overlay;
    /**
     * Removes multiple overlays from the map.
     */
    removeOverlays(overlays: mapkit.Overlay[]): mapkit.Overlay[];
    /**
     * Returns the topmost overlay at a given point on the webpage.
     */
    topOverlayAtPoint(point: DOMPoint): mapkit.Overlay | null;

    // Adding and Removing Tile Overlays

    /**
     * An array of all of the map's tile overlays.
     */
    tileOverlays: mapkit.TileOverlay[];
    /**
     * Adds a tile overlay to the map.
     */
    addTileOverlay(tileOverlay: mapkit.TileOverlay): mapkit.TileOverlay;
    /**
     * Adds an array of tile overlays to the map.
     */
    addTileOverlays(tileOverlays: mapkit.TileOverlay[]): mapkit.TileOverlay[];
    /**
     * Removes a tile overlay from the map.
     */
    removeTileOverlay(tileOverlay: mapkit.TileOverlay): mapkit.TileOverlay;
    /**
     * Removes an array of tile overlays from the map.
     */
    removeTileOverlays(tileOverlays: mapkit.TileOverlay[]): mapkit.TileOverlay[];

    // Displaying the User's Location

    /**
     * A Boolean value that determines whether to show the user's location on
     * the map.
     */
    showsUserLocation: boolean;
    /**
     * A Boolean value that determines whether to center the map on the user's
     * location.
     */
    tracksUserLocation: boolean;
    /**
     * An annotation that indicates the user's location on the map.
     */
    readonly userLocationAnnotation: mapkit.Annotation | null;

    // Converting Map Coordinates

    /**
     * Converts a coordinate on the map to a point in the page's coordinate system.
     */
    convertCoordinateToPointOnPage(coordinate: mapkit.Coordinate): DOMPoint;
    /**
     * Converts a point in page coordinates to the corresponding map coordinate.
     */
    convertPointOnPageToCoordinate(point: DOMPoint): mapkit.Coordinate;
  }

  /**
   * An object that contains options for initializing a map's features.
   */
  interface MapConstructorOptions {
    /**
     * The visible area of the map defined in map units.
     */
    visibleMapRect?: mapkit.MapRect;
    /**
     * The area currently displayed by the map.
     */
    region?: mapkit.CoordinateRegion;
    /**
     * The map coordinate at the center of the map view.
     */
    center?: mapkit.Coordinate;
    /**
     * The map's rotation, in degrees.
     */
    rotation?: number;
    /**
     * The CSS color that is used to paint the user interface controls on the map.
     */
    tintColor?: string;
    /**
     * The map’s color scheme when displaying standard or muted standard map types.
     */
    colorScheme?: string;
    /**
     * The type of data displayed by the map view.
     */
    mapType?: string;
    /**
     * The map's inset margins.
     */
    padding?: mapkit.Padding;
    /**
     * A Boolean value that determines whether to display a control that lets
     * users choose the map type.
     */
    showsMapTypeControl?: boolean;
    /**
     * A Boolean value that determines whether the user may rotate the map using
     * the compass control or a rotate gesture.
     */
    isRotationEnabled?: boolean;
    /**
     * A feature visibility setting that determines when the compass is visible.
     */
    showsCompass?: string;
    /**
     * A Boolean value that determines whether the user may zoom in and out on
     * the map using pinch gestures or the zoom control.
     */
    isZoomEnabled?: boolean;
    /**
     * A Boolean value that determines whether to display a control for zooming
     * in and zooming out on a map.
     */
    showsZoomControl?: boolean;
    /**
     * A Boolean value that determines whether the user may scroll the map with
     * a pointing device or gestures on a touchscreen.
     */
    isScrollEnabled?: boolean;
    /**
     * A feature visibility setting that determines when the map's scale is
     * displayed.
     */
    showsScale?: string;
    /**
     * A delegate method for modifying cluster annotations.
     */
    annotationForCluster?(annotation: mapkit.Annotation): void;
    /**
     * An array of all the annotations on the map.
     */
    annotations?: mapkit.Annotation[];
    /**
     * The annotation on the map that is selected.
     */
    selectedAnnotation?: mapkit.Annotation;
    /**
     * An array of all of the map's overlays.
     */
    overlays?: mapkit.Overlay[];
    /**
     * The overlay on the map that is selected.
     */
    selectedOverlay?: mapkit.Overlay;
    /**
     * A Boolean value that determines whether the map displays points of interest.
     */
    showsPointsOfInterest?: boolean;
    /**
     * A Boolean value that determines whether to show the user's location on
     * the map.
     */
    showsUserLocation?: boolean;
    /**
     * A Boolean value that determines whether to center the map on the user's
     * location.
     */
    tracksUserLocation?: boolean;
    /**
     * A Boolean value that determines whether the user location control is visible.
     */
    showsUserLocationControl?: boolean;
  }

  /**
   * An array to which maps are automatically added and removed as they are
   * initialized and destroyed.
   */
  const maps: Map[];

  interface EventBase<T> {
    type: string;
    target: T;
  }

  // prettier-ignore
  interface MapEvents<T> {
    'region-change-start': EventBase<T>;
    'region-change-end': EventBase<T>;
    'scroll-start': EventBase<T>;
    'scroll-end': EventBase<T>;
    'zoom-start': EventBase<T>;
    'zoom-end': EventBase<T>;
    'map-type-change': EventBase<T>;
    'single-tap': EventBase<T>;
    'double-tap': EventBase<T>;
    'long-press': EventBase<T>;

    // Annotation Events

    'select': EventBase<T> & { annotation?: Annotation; overlay?: Overlay };
    'deselect': EventBase<T> & { annotation?: Annotation; overlay?: Overlay };
    'drag-start': EventBase<T> & { annotation: Annotation };
    'dragging': EventBase<T> & { annotation: Annotation; coordinate: Coordinate };
    'drag-end': EventBase<T> & { annotation: Annotation };

    // User Location Events

    'user-location-change': EventBase<T> & { coordinate: Coordinate; timestamp: Date };
    'user-location-error': EventBase<T> & { code: number; message: string };
  }

  /**
   * Options that determine map parameters used when showing items.
   */
  interface MapShowItemsOptions {
    /**
     * A Boolean value that determines whether the map is animated as the map
     * region changes to show the items.
     */
    animate?: boolean;
    /**
     * The minimum longitudinal and latitudinal span the map should display.
     */
    padding?: mapkit.Padding;
    /**
     * Spacing that is added around the computed map region when showing items.
     */
    minimumSpan?: mapkit.CoordinateSpan;
  }
}
