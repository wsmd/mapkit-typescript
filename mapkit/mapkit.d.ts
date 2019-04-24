// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

/**
 * The JavaScript API for embedding Apple maps on your website.
 */
declare namespace mapkit {
  /**
   * Initialize a mapkit object by providing an authorization callback and language.
   */
  function init(options: MapKitInitOptions): void;
  /**
   * Subscribes a listener function to an event type.
   *
   * @param type The type of event (e.g., "configuration-change").
   * @param listener The callback function to invoke. listener is passed an
   * Event as its sole argument.
   * @param thisObject An object set as the this keyword on the listener function.
   */
  function addEventListener<T>(
    type: InitializationEventType,
    listener: (this: T, event: InitializationEvent) => void,
    thisObject?: T,
  ): void;
  /**
   * Unsubscribes a listener function from an event type.
   *
   * @param type The type of event (e.g., "configuration-change").
   * @param listener The callback function to remove.
   * @param thisObject An object set as the this keyword on the listener function.
   */
  function removeEventListener<T>(
    type: InitializationEventType,
    listener: (this: T, event: InitializationEvent) => void,
    thisObject?: T,
  ): void;
  /**
   * A language ID indicating the selected language.
   */
  let language: string;
  /**
   * The build string.
   */
  const build: string;
  /**
   * The version of MapKit JS.
   */
  const version: string;

  /**
   * Initialization options for MapKit JS.
   */
  interface MapKitInitOptions {
    /**
     * A callback function that obtains a token.
     *
     * @param done A function that completes the MapKit JS token request. Called
     * after creating a new token.
     */
    authorizationCallback: (done: (token: string) => void) => void;
    /**
     * An ID that indicates the preferred language in which to display map
     * labels, controls, directions, and other text.
     */
    language?: string;
  }

  /**
   * Constants indicating the visibility of different adaptive map features.
   */
  const FeatureVisibility: {
    /**
     * A constant indicating that feature visibility adapts to the current map state.
     */
    readonly Adaptive: string;
    /**
     * A constant indicating that the feature is always hidden.
     */
    readonly Hidden: string;
    /**
     * A constant indicating that the feature is always visible.
     */
    readonly Visible: string;
  };

  type InitializationEventType = 'configuration-change' | 'error';

  interface InitializationEvent {
    status: 'Initialized' | 'Refreshed' | 'Unauthorized' | 'Too Many Requests';
  }
}
