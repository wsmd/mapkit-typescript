// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * A geocoder that converts human-readable addresses to geographic coordinates
   * and vice versa.
   */
  class Geocoder {
    /**
     * Initialize a geocoder object and set optional language and user location
     * properties.
     */
    constructor(options?: GeocoderConstructorOptions);
    /**
     * Converts an address to geographic coordinates.
     */
    lookup(
      place: string,
      callback: (error: Error | null, data: GeocoderResponse) => void,
      options?: GeocoderLookupOptions,
    ): number;
    /**
     * Converts a geographic coordinate to an address.
     *
     * @param The coordinate to convert to a human-readable address.
     * @param callback This callback function is invoked with two arguments,
     * error on failure and data on success.
     * @param language language is the only option that can be set for the
     * reverse geocoder.
     */
    reverseLookup(
      coordinate: mapkit.Coordinate,
      callback: (error: Error | null, data: GeocoderResponse) => void,
      options?: Pick<GeocoderConstructorOptions, 'language'>,
    ): number;
    /**
     * Cancels the pending lookup or reverse lookup specified by its request ID.
     *
     * @param id The request ID of the lookup or reverseLookup to cancel.
     */
    cancel(id: number): boolean;
    /**
     * A Boolean value that indicates whether the geocoder should return results
     * near the user's current location.
     */
    language: string;
    /**
     * A Boolean value that indicates whether the geocoder should return results
     * near the user's current location.
     */
    getsUserLocation: string;
  }

  /**
   * Initialization options for geocoder objects.
   */
  interface GeocoderConstructorOptions {
    /**
     * A Boolean value that indicates whether the geocoder should return results
     * near the user's current location.
     */
    language?: string;
    /**
     * A Boolean value that indicates whether the geocoder should return results
     * near the user's current location.
     */
    getsUserLocation?: boolean;
  }

  /**
   * Options that constrain geocoder lookup results to a specific area or set a
   * language for results.
   */
  interface GeocoderLookupOptions {
    /**
     * The language in which to display the lookup results.
     */
    language?: string;
    /**
     * Coordinates used to constrain the lookup results.
     */
    coordinate?: mapkit.Coordinate;
    /**
     * A region in which to constrain lookup results.
     */
    region?: mapkit.CoordinateRegion;
    /**
     * A list of countries in which to constrain the lookup results.
     */
    limitToCountries?: string;
  }

  /**
   * The response from a geocoder lookup or reverse lookup.
   */
  interface GeocoderResponse {
    results: Place[];
  }

  /**
   * A place object returned from a geocoder lookup or reverse lookup.
   */
  interface Place {
    /**
     * The name of the place.
     */
    name: string;
    /**
     * The latitude and longitude for the place.
     */
    coordinate: mapkit.Coordinate;
    /**
     * The address of the place, formatted using its country's conventions.
     */
    formattedAddress: string;
    /**
     * The geographic region associated with the place.
     */
    region: mapkit.CoordinateRegion;
    /**
     * The country code associated with the place.
     */
    countryCode: string;
  }
}
