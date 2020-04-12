// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * The base annotation object, used for creating custom annotations.
   */
  class Annotation {
    /**
     * Creates a new annotation given its location and initialization options.
     *
     * @param coordinate The coordinate at which this annotation should appear.
     * @param factory A factory function that returns a DOM element used to
     * represent this annotation.
     * @param options A hash of properties with which to initialize the annotation.
     */
    constructor(
      coordinate: mapkit.Coordinate,
      factory: (coordinate: mapkit.Coordinate, options: AnnotationConstructorOptions) => Element,
      options?: AnnotationConstructorOptions,
    );
    /**
     * Adds an event listener to handle events triggered by user interactions
     * with annotations.
     *
     * @param type The event type of interest (e.g., "select").
     * @param listener The callback function to invoke. listener is passed an
     * annotation event as its sole argument.
     * @param thisObject An object to be set as the this keyword on the
     * listener function.
     */
    addEventListener<T>(
      type: AnnotationEventType,
      listener: (this: T, event: EventBase<Annotation>) => void,
      thisObject?: T,
    ): void;
    /**
     * Adds an event listener to handle events triggered by user interactions
     * with annotations.
     *
     * @param type The event type of interest (e.g., "select").
     * @param listener The callback function to remove.
     * @param thisObject An object to be set as the this keyword on the listener
     * function.
     */
    removeEventListener<T>(
      type: AnnotationEventType,
      listener: (this: T, event: EventBase<Annotation>) => void,
      thisObject?: T,
    ): void;
    /**
     * Constant values used to provide a hint the map uses to prioritize
     * displaying annotations.
     */
    static readonly DisplayPriority: {
      readonly Low: number;
      readonly High: number;
      readonly Required: number;
    };
    /**
     * Constants indicating how to interpret the collision frame rectangle of
     * an annotation view.
     */
    static readonly CollisionMode: {
      readonly Rectangle: string;
      readonly Circle: string;
    };
    /**
     * The annotation's coordinate.
     */
    coordinate: mapkit.Coordinate;
    /**
     * The map to which the annotation was added.
     */
    readonly map: mapkit.Map | null;
    /**
     * The annotation's element in the DOM.
     */
    readonly element: Element;
    /**
     * Data that you define that is assigned to the annotation.
     */
    data: any;
    /**
     * The text to display in the annotation's callout.
     */
    title: string;
    /**
     * The text to display as a subtitle, on the second line of an annotation's
     * callout.
     */
    subtitle: string;
    /**
     * An offset that changes the annotation's default anchor point.
     */
    anchorOffset: DOMPoint;
    /**
     * A CSS animation that runs when the annotation appears on the map.
     */
    appearanceAnimation: string;
    /**
     * A numeric hint the map uses to prioritize displaying annotations.
     */
    displayPriority: number;
    /**
     * The desired dimensions of the annotation, in CSS pixels.
     */
    size: { width: number; height: number };
    /**
     * A Boolean value that determines if the annotation is visible or hidden.
     */
    visible: boolean;
    /**
     * A Boolean value that determines if the annotation should be animated.
     */
    animates: boolean;
    /**
     * A Boolean value that determines whether the user can drag the annotation.
     */
    draggable: boolean;
    /**
     * A Boolean value that determines whether the annotation is selected.
     */
    selected: boolean;
    /**
     * A Boolean value that determines whether the annotation responds to user
     * interaction.
     */
    enabled: boolean;
    /**
     * A delegate that enables you to customize the annotation's callout.
     */
    callout: AnnotationCalloutDelegate;
    /**
     * An offset that changes the annotation callout's default placement.
     */
    calloutOffset: DOMPoint;
    /**
     * A Boolean value that determines whether a callout should be shown.
     */
    calloutEnabled: boolean;
    /**
     * An array of annotations that are grouped together in a cluster.
     */
    memberAnnotations: mapkit.Annotation[];
    /**
     * An identifer used for grouping annotations into the same cluster.
     */
    clusteringIdentifier: string | null;
    /**
     * A mode that determines the shape of the collision frame.
     */
    collisionMode: string;
  }

  /**
   * An object that contains options for initializing annotation features.
   */
  interface AnnotationConstructorOptions {
    /**
     * The text to display in the annotation's callout.
     */
    title?: string;
    /**
     * The text to display as a subtitle on the second line of an annotation's
     * callout.
     */
    subtitle?: string;
    /**
     * Accessibility text for the annotation.
     */
    accessibilityLabel?: string;
    /**
     * Data you define that is assigned to the annotation.
     */
    data?: any;
    /**
     * A Boolean value that determines whether the user can drag the annotation.
     */
    draggable?: boolean;
    /**
     * A Boolean value that determines if the annotation is visible or hidden.
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the annotation responds to user
     * interaction.
     */
    enabled?: boolean;
    /**
     * A Boolean value that determines whether the annotation is selected.
     */
    selected?: boolean;
    /**
     * A Boolean value that determines whether a callout should be shown.
     */
    calloutEnabled?: boolean;
    /**
     * A Boolean value that determines if the annotation should be animated.
     */
    animates?: boolean;
    /**
     * A CSS animation that runs when the annotation appears on the map.
     */
    appearanceAnimation?: string;
    /**
     * The offset in CSS pixels of the element from the bottom center.
     */
    anchorOffset?: DOMPoint;
    /**
     * The offset in CSS pixels of a callout from the top center of the element.
     */
    calloutOffset?: DOMPoint;
    /**
     * A delegate that enables you to customize the annotation's callout.
     */
    callout?: AnnotationCalloutDelegate;
    /**
     * The desired dimensions of the annotation, in CSS pixels.
     */
    size?: { width: number; height: number };
    /**
     * A hint the map uses to prioritize displaying the annotation.
     */
    displayPriority?: number;
    /**
     * A mode that determines the shape of the collision frame.
     */
    collisionMode?: string;
    /**
     * An identifer used for grouping annotations into the same cluster.
     */
    clusteringIdentifier?: string;
  }

  /**
   * Methods for customizing the behavior and appearance of an annotation callout.
   */
  interface AnnotationCalloutDelegate {
    /**
     * Returns a point determining the callout's anchor offset.
     */
    calloutAnchorOffsetForAnnotation?(
      annotation: mapkit.Annotation,
      size: { width: number; height: number },
    ): DOMPoint;
    /**
     * Determines whether the callout should appear for an annotation.
     */
    calloutShouldAppearForAnnotation?(annotation: mapkit.Annotation): boolean;
    /**
     * Determines whether the callout should animate.
     */
    calloutShouldAnimateForAnnotation?(annotation: mapkit.Annotation): boolean;
    /**
     * Returns a CSS animation used when the callout appears.
     */
    calloutAppearanceAnimationForAnnotation?(annotation: mapkit.Annotation): string;
    /**
     * Returns custom content for the callout bubble.
     */
    calloutContentForAnnotation?(annotation: mapkit.Annotation): Element;
    /**
     * Returns an element representing a custom callout.
     */
    calloutElementForAnnotation?(annotation: mapkit.Annotation): Element;
    /**
     * Returns an element used as a custom accessory on the left side of the
     * callout content area.
     */
    calloutLeftAccessoryForAnnotation?(annotation: mapkit.Annotation): Element;
    /**
     * Returns an element used as a custom accessory on the right side of the
     * callout content area.
     */
    calloutRightAccessoryForAnnotation?(annotation: mapkit.Annotation): Element;
  }

  /**
   * A customized annotation with image resources that you provide.
   */
  class ImageAnnotation extends Annotation {
    /**
     * Initializes an image annotation with a URL to its image and a coordinate.
     */
    constructor(coordinate: mapkit.Coordinate, options: ImageAnnotationConstructorOptions);
  }

  /**
   * An object containing options for initializing an image annotation.
   */
  interface ImageAnnotationConstructorOptions extends AnnotationConstructorOptions {
    /**
     * An object containing URLs for the image assets in multiple resolutions.
     */
    url: {
      1: string;
      2?: string;
      3?: string;
    };
  }

  /**
   * Creates a marker annotation at the coordinate location with provided options.
   */
  class MarkerAnnotation extends Annotation {
    /**
     * Creates a marker annotation at the coordinate location with provided options.
     *
     * @param coordinate The coordinate at which this annotation should appear.
     * @param options A hash of properties with which to initialize the annotation.
     */
    constructor(coordinate: mapkit.Coordinate, options?: MarkerAnnotationConstructorOptions);
    /**
     * A value that determines the behavior of the subtitle's visibility.
     */
    subtitleVisibility: string;
    /**
     * A value that determines the behavior of the title's visibility.
     */
    titleVisibility: string;
    /**
     * The background color of the balloon.
     */
    color: string;
    /**
     * The fill color of the glyph.
     */
    glyphColor: string;
    /**
     * The text to display in the marker balloon.
     */
    glyphText: string;
    /**
     * The image to display in the marker balloon.
     */
    glyphImage: object | null;
    /**
     * The image to display in the balloon when the marker is selected.
     */
    selectedGlyphImage: object;
  }

  /**
   * An object containing the options that initialize a marker annotation.
   */
  interface MarkerAnnotationConstructorOptions extends AnnotationConstructorOptions {
    /**
     * The background color of the balloon.
     */
    color?: string;
    /**
     * The fill color of the glyph.
     */
    glyphColor?: string;
    /**
     * The text to display in the marker balloon.
     */
    glyphText?: string;
    /**
     * The image to display in the marker balloon.
     */
    glyphImage?: {
      1: string;
      2?: string;
      3?: string;
    };
    /**
     * The image to display in the balloon when the marker is selected.
     */
    selectedGlyphImage?: object;
    /**
     * A value that determines the behavior of the subtitle's visibility.
     */
    subtitleVisibility?: string;
    /**
     * A value that determines the behavior of the title's visibility.
     */
    titleVisibility?: string;
  }

  // prettier-ignore
  type AnnotationEventType =
    | 'select'
    | 'deselect'
    | 'drag-start'
    | 'dragging'
    | 'drag-end';
}
