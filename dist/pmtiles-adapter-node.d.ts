/**
 * This module provides utilities for working with PMTiles in a node environment.
 */
import { PMTiles, type Source } from "pmtiles";
import type { DemTile, Encoding } from "./types";
/**
 * Represents a PMTiles data source using a file descriptor.
 */
export declare class PMTilesFileSource implements Source {
    private fd;
    /**
     * Creates a new PMTilesFileSource.
     * @param {number} fd - The file descriptor for the PMTiles file.
     */
    constructor(fd: number);
    /**
     * Gets the key representing this source (the file descriptor as a string).
     * @returns {string} The key for this source.
     */
    getKey(): string;
    /**
     * Gets a chunk of bytes from the PMTiles file.
     * @param {number} offset - The offset to read from.
     * @param {number} length - The number of bytes to read.
     * @returns {Promise<{ data: ArrayBuffer }>} A Promise that resolves with the requested bytes as an ArrayBuffer.
     */
    getBytes(offset: number, length: number): Promise<{
        data: ArrayBuffer;
    }>;
}
/**
 * Opens a PMTiles file or resource, creating a PMTiles object.
 * @param {string} FilePath - The path to a local PMTiles file or a URL for a remote resource.
 * @returns {PMTiles} A PMTiles object.
 */
export declare function openPMtiles(FilePath: string): PMTiles;
/**
 * Retrieves a tile from a PMTiles archive by its ZXY coordinates.
 * @param {PMTiles} pmtiles - The PMTiles object to query.
 * @param {number} z - The zoom level of the tile.
 * @param {number} x - The X coordinate of the tile.
 * @param {number} y - The Y coordinate of the tile.
 * @returns {Promise<{ data: ArrayBuffer | undefined }>} A Promise that resolves with the tile data as an ArrayBuffer, or undefined if the tile is not found.
 */
export declare function getPMtilesTile(pmtiles: PMTiles, z: number, x: number, y: number): Promise<{
    data: ArrayBuffer | undefined;
}>;
/**
 * Processes image data from a blob.
 * @param {Blob} blob - The image data as a Blob.
 * @param {Encoding} encoding - The encoding to use when decoding.
 * @param {AbortController} abortController - An AbortController to cancel the image processing.
 * @returns {Promise<DemTile>} - A Promise that resolves with the processed image data, or throws if aborted.
 * @throws If an error occurs during image processing.
 */
export declare function GetImageData(blob: Blob, encoding: Encoding, abortController: AbortController): Promise<DemTile>;
