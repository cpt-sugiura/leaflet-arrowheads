import { PolylineOptions } from 'leaflet';

interface SingleArrowheadOptions {
	/**
	 * The angle of opening of the arrowheads
	 */
	yawn?: number;
	/**
	 * The size of the arrowheads, give as a string specifying pixels, %, or meters
	 */
	size?: `${number}px` | `${number}%` | `${number}m`;
}

interface ArrowheadOptions extends PolylineOptions, SingleArrowheadOptions {
	/**
	 * The number and spacing of arrowheads to draw along the polyline
	 */
	frequency?: `${number}px` | `${number}m` | 'allvertices' | 'endonly';
	/**
	 * If the size of the arrowheads, when given in percent, should be a percentage proportional
	 * to the total length of the polyline, rather than the average of all the segments
	 */
	proportionalToTotal?: boolean;
	/**
	 * The offsets from start of end of where to begin/end drawing arrowheads
	 */
	offsets?: {
		start?: `${number}px` | `${number}m`;
		end?: `${number}px` | `${number}m`;
	};
	/**
	 * Callback function to customize arrowheads on a 1-by-1 basis
	 */
	perArrowheadOptions?: (i: number) => PolylineOptions & SingleArrowheadOptions;
}

declare module L {
	export interface Polyline {
		/**
		 * Adds arrowheads to an L.polyline
		 * @param {object} options The options for the arrowhead.  See documentation for details
		 * @returns The L.polyline instance that they arrowheads are attached to
		 */
		arrowheads: (ArrowheadOptions) => Polyline;
	}
}
