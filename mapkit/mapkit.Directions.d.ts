// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * Creates a directions object with options that you may provide.
   */
  class Directions {
    /**
     * Creates a directions object with options that you may provide.
     *
     * @param An object containing the options for creating a directions object.
     * This parameter is optional.
     */
    constructor(options?: DirectionsConstructorOptions);
    /**
     * Retrieves directions and estimated travel time for the specified start
     * and end points.
     *
     * @param request DirectionsRequest object that specifies details for the
     * directions you want to retrieve.
     * @param callback A callback function that receives the directions,
     * returned asynchronously.
     * @return A request ID, which you can pass to cancel to abort a pending request.
     */
    route(
      request: DirectionsRequest,
      callback: (error: Error | null, data: DirectionsResponse) => void,
    ): number;
    /**
     * Cancels a previous request for route directions.
     *
     * @param id The ID returned by a call to route.
     */
    cancel(id: number): boolean;
    /**
     * The modes of transportation.
     */
    static readonly Transport: {
      /**
       * A constant identifying the mode of transportation as driving.
       */
      readonly Automobile: string;
      /**
       * A constant identifying the mode of transportation as walking.
       */
      readonly Walking: string;
    };
  }

  /**
   * Options that you may provide when creating a directions object.
   */
  interface DirectionsConstructorOptions {
    /**
     * A language ID that determines the language for route information.
     */
    language?: string;
  }

  /**
   * The requested start and end points for a route, as well as the planned mode of transportation.
   */
  interface DirectionsRequest {
    /**
     * The start point for routing directions.
     */
    origin: string | mapkit.Coordinate | mapkit.Place;
    /**
     * The end point for routing directions.
     */
    destination: string | mapkit.Coordinate | mapkit.Place;
    /**
     * The mode of transportation to which directions should apply.
     */
    transportType?: string;
    /**
     * A Boolean value that indicates whether the server should return multiple
     * routes when they are available.
     */
    requestsAlternateRoutes?: boolean;
  }

  /**
   * The directions and estimated travel time returned for a route.
   */
  interface DirectionsResponse {
    request: any;
    routes: Route[];
  }

  /**
   * Information about a route, including step-by-step instructions, distance,
   * and estimated travel time.
   */
  interface Route {
    /**
     * An instance of a polyline overlay that represents the path of a route.
     */
    polyline: mapkit.PolylineOverlay;
    /**
     * An array of coordinate objects representing the path of the route.
     * @deprecated
     */
    path: mapkit.Coordinate[];
    /**
     * An array of steps that comprise the overall route.
     */
    steps: RouteStep[];
    /**
     * The name assigned to the route.
     */
    name: string;
    /**
     * The route distance in meters.
     */
    distance: number;
    /**
     * The expected travel time in seconds.
     */
    expectedTravelTime: number;
    /**
     * The overall route transport type.
     */
    transportType: string;
  }

  /**
   * A single route between a requested start and end point.
   */
  interface RouteStep {
    /**
     * An array of coordinate objects representing the path of the route segment.
     */
    path: mapkit.Coordinate[];
    /**
     * The written instructions for following the path represented by the step.
     */
    instructions: string;
    /**
     * The step distance in meters.
     */
    distance: number;
    /**
     * The transport type of the step.
     */
    transportType: string;
  }
}
