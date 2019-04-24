// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   * An object that retrieves map-based search results for a user-entered query.
   */
  class Search {
    /**
     * Creates a search object with optional initial values that you provide.
     *
     * @param options Options that you may provide when creating a search object.
     */
    constructor(options?: SearchConstructorOptions);
    /**
     * Retrieves the results of a search query.
     *
     * @param query A String or a SearchAutocompleteResult.
     * @param callback A callback function or delegate object.
     * @param options With the options hash, you can constrain the search to a
     * desired area using the coordinate or region properties. If set, this
     * option overrides the language provided to the search constructor.
     * @returns a request ID (integer) that can be passed to cancel to abort a
     * pending request.
     */
    search<Q extends string | SearchAutocompleteResult>(
      query: Q,
      callback: SearchDelegate | SearchCallback<Q>,
      options?: SearchOptions,
    ): number;
    /**
     * Retrieves a list of autocomplete results for the specified search query.
     *
     * @param query A string that represents the user's search term in progress.
     * @param callback A callback function or delegate object.
     * @param options Autocomplete takes the same options hash as search
     */
    autocomplete(
      query: string,
      callback: SearchDelegate | AutocompleteSearchCallback,
      options?: SearchOptions,
    ): void;
    /**
     * Cancels a search request using its request ID.
     *
     * @param id The integer ID returned by a call to mapkit.Search.search
     * @return true if the server canceled the pending search request.
     */
    cancel(id: number): boolean;
  }

  /**
   * Options that you may provide when creating a search object.
   */
  interface SearchConstructorOptions {
    /**
     * A language ID that determines the language for the search result text.
     */
    language?: string;
    /**
     * A Boolean value that indicates whether to limit the search results to the
     * user's current location, as determined by the web browser.
     */
    getsUserLocation?: boolean;
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     */
    coordinate?: mapkit.Coordinate;
    /**
     * A map region that provides a hint for the geographic area to search.
     */
    region?: mapkit.CoordinateRegion;
  }

  type SearchCallback<Q> = (
    error: Error | null,
    data: {
      /**
       * The query corresponding to the results  The query corresponding to the
       * results, if a SearchAutocompleteResult was not used to perform the search.
       */
      query: Q extends SearchAutocompleteResult ? undefined : string;
      /**
       * A region that encloses the search results. This property is not present
       * if there are no results.
       */
      displayRegion?: mapkit.CoordinateRegion;
      /**
       * An array of Place objects. The places array is empty if there is no match.
       */
      places: mapkit.Place[];
    },
  ) => void;

  type AutocompleteSearchCallback = (error: Error | null, data: SearchAutocompleteResponse) => void;

  /**
   * An object or callback function called when performing a search or autocomplete
   * request.
   */
  interface SearchDelegate {
    /**
     * Upon successful completion of a search request, this method returns a data
     * object that is the same as the one passed to the search callback function.
     */
    searchDidComplete?(data: SearchResponse): void;
    /**
     * Called when the search request fails.
     */
    searchDidError?(error: Error): void;
    /**
     * When an autocomplete request successfully completes, this method returns
     * a data array that is the same as the one passed to the autocomplete
     * callback function.
     */
    autocompleteDidComplete?(data: SearchAutocompleteResponse): void;
    /**
     * Invoked when an autocomplete request fails.
     */
    autocompleteDidError?(error: Error): void;
  }

  /**
   * Options you can provide when performing a search.
   */
  interface SearchOptions {
    /**
     * A language ID that determines the language for the search result text.
     */
    language: string;
    /**
     * A map coordinate that provides a hint for the geographic area to search.
     */
    coordinate: mapkit.Coordinate;
    /**
     * A map region that provides a hint for the geographic area to search.
     */
    region: mapkit.CoordinateRegion;
  }

  /**
   * The result of a search, including the original search query, the bounding
   * region, and a list of places that match the query.
   */
  interface SearchResponse {
    /**
     * The query string used to perform the search.
     */
    query: string;
    /**
     * The region that encloses the places included in the search results.
     */
    boundingRegion: mapkit.CoordinateRegion;
    /**
     * A list of places that match the search query.
     */
    places: mapkit.Place[];
  }

  /**
   * An object containing the response from an autocomplete request.
   */
  interface SearchAutocompleteResponse {
    /**
     * The query string used to perform the autocomplete request.
     */
    query: string;
    /**
     * The results from an autocomplete request.
     */
    results: SearchAutocompleteResult[];
  }

  /**
   * The result of an autocomplete query, including display lines and a coordinate.
   */
  interface SearchAutocompleteResult {
    /**
     * Lines of text to display to the user in an autocomplete menu.
     */
    displayLines: string[];
    /**
     * The coordinate of the result, provided when it corresponds to a single place.
     */
    coordinate: mapkit.Coordinate;
  }
}
