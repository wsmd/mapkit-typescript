// Type definitions for MapKit JS 5.18.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace mapkit {
  /**
   *
   * @param data The original GeoJSON data, which may be a URL to a GeoJSON file,
   * or a GeoJSON object.
   * @param callback A callback function that is required if you provide a URL
   * for the data parameter, and optional otherwise.
   */
  function importGeoJSON(
    data: string | object,
    callback?: GeoJSONDelegate | ImportGeoJSONCallback,
  ): ItemCollection | Error;

  type ImportGeoJSONCallback = (error: Error, result: ItemCollection) => void;

  /**
   * A delegate object that controls a GeoJSON import in order to override
   * default behavior and provide custom style.
   */
  interface GeoJSONDelegate {
    /**
     * Overrides a feature.
     *
     * @param item An item created for the geometry of this feature or null for
     * features with null geometry.
     * @param geoJSON The original GeoJSON object for this feature.
     */
    itemForFeature?(
      item: mapkit.Annotation | mapkit.Overlay | null,
      geoJSON: object,
    ): mapkit.Annotation | mapkit.Overlay | Array<mapkit.Annotation | mapkit.Overlay>;
    /**
     * Overrides a feature collection.
     *
     * @param itemCollection A collection containing associated annotations and
     * overlays.
     * @param geoJSON The original GeoJSON object for this FeatureCollection.
     * This will contain an array of feature types.
     */
    itemForFeatureCollection?(
      itemCollection: ItemCollection,
      geoJSON: object,
    ): mapkit.Annotation | mapkit.Overlay | Array<mapkit.Annotation | mapkit.Overlay>;
    /**
     * Overrides a line string.
     *
     * @param overlay A mapkit.PolylineOverlay object.
     * @param geoJSON original GeoJSON object for this LineString object.
     */
    itemForLineString?(
      overlay: mapkit.PolylineOverlay,
      geoJSON: object,
    ): mapkit.Annotation | mapkit.Overlay | Array<mapkit.Annotation | mapkit.Overlay>;
    /**
     * Overrides a multiline string.
     *
     * @param itemCollection An item collection containing associated overlays.
     * @param geoJSON The original GeoJSON object for this MultiLineString. This
     * will contain an array of geometries.
     */
    itemForMultiLineString?(
      itemCollection: ItemCollection,
      geoJSON: object,
    ): mapkit.Annotation | mapkit.Overlay | Array<mapkit.Annotation | mapkit.Overlay>;
    /**
     * Overrides a point.
     *
     * @param coordinate A GeoJSON Point generates the coordinate. You can use
     * the coordinate to instantiate an item to return.
     * @param geoJSON The original GeoJSON object for this Point. This object could
     * be a simple Point or a Feature with the Point geometry type.
     */
    itemForPoint?(
      coordinate: mapkit.Coordinate,
      geoJSON: object,
    ): Array<mapkit.Annotation | mapkit.Overlay>;
    /**
     * Overrides a multipoint object.
     *
     * @param itemCollection A collection containing associated annotations.
     * @param geoJSON The original GeoJSON object for this MultiPoint. This will
     * contain an array of geometries.
     */
    itemForMultiPoint?(
      itemCollection: ItemCollection,
      geoJSON: object,
    ): mapkit.Annotation | mapkit.Overlay | Array<mapkit.Annotation | mapkit.Overlay>;
    /**
     * Overrides a polygon.
     *
     * @param overlay You can customize the provided overlay before returning it,
     * or you could completely replace the overlay.
     * @param geoJSON The original GeoJSON object for this polygon.
     */
    itemForPolygon?(
      overlay: mapkit.PolygonOverlay,
      geoJSON: object,
    ): mapkit.Annotation | mapkit.Overlay | Array<mapkit.Annotation | mapkit.Overlay>;
    /**
     * Overrides a multipolygon.
     *
     * @param itemCollection A collection containing associated overlays.
     * @param geoJSON The original GeoJSON object for this MultiPolygon. This
     * will contain an array of geometries.
     */
    itemForMultiPolygon?(
      itemCollection: ItemCollection,
      geoJSON: object,
    ): mapkit.Annotation | mapkit.Overlay | Array<mapkit.Annotation | mapkit.Overlay>;
    /**
     * Overrides the style of overlays.
     *
     * @param overlay The overlay to style.
     * @param geoJSON The original GeoJSON for this feature or geometry object.
     */
    styleForOverlay?(overlay: mapkit.Overlay, geoJSON: object): mapkit.Style;
    /**
     * Completes the GeoJSON import.
     *
     * @param result The mapped item collection.
     * @param geoJSON The original parsed GeoJSON object.
     */
    geoJSONDidComplete?(result: ItemCollection, geoJSON: object): void;
    /**
     * Indicates the GeoJSON import failed.
     *
     * @param error An Error instance related to the last blocking error.
     * @param geoJSON The original parsed GeoJSON object.
     */
    geoJSONDidError?(error: Error, geoJSON: object): void;
  }

  /**
   * A tree structure containing annotations, overlays, and nested item
   * collection objects.
   */
  interface ItemCollection {
    /**
     * The raw GeoJSON data.
     */
    data: object;
    /**
     * A flattened array of items that include annotations or overlays.
     */
    getFlattenedItemList: Array<mapkit.Annotation | mapkit.Overlay>;
    /**
     * A nested list of annotations, overlays, or other item collections.
     */
    items: Array<mapkit.Annotation | mapkit.Overlay | ItemCollection>;
  }
}
