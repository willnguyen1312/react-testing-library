import {Simulate as ReactSimulate} from 'react-dom/test-utils'
import {
  AllByAttribute,
  AllByText,
  BoundFunction,
  GetByAttribute,
  GetByText,
  QueryByAttribute,
  QueryByText,
} from 'dom-testing-library'
export {prettyDOM} from 'dom-testing-library'

type TextMatchFunction = (content: string, element: HTMLElement) => boolean
type TextMatch = string | RegExp | TextMatchFunction
type TextMatchOptions = {
  exact?: boolean
  trim?: boolean
  collapseWhitespace?: boolean
}

interface GetsAndQueries {
  queryByTestId: BoundFunction<QueryByAttribute>
  queryAllByTestId: BoundFunction<AllByAttribute>
  getByTestId: BoundFunction<GetByAttribute>
  getAllByTestId: BoundFunction<AllByAttribute>
  queryByText: BoundFunction<QueryByText>
  queryAllByText: BoundFunction<AllByText>
  getByText: BoundFunction<GetByText>
  getAllByText: BoundFunction<AllByText>
  queryByPlaceholderText: BoundFunction<QueryByAttribute>
  queryAllByPlaceholderText: BoundFunction<AllByAttribute>
  getByPlaceholderText: BoundFunction<GetByAttribute>
  getAllByPlaceholderText: BoundFunction<AllByAttribute>
  queryByLabelText: BoundFunction<QueryByAttribute>
  queryAllByLabelText: BoundFunction<AllByAttribute>
  getByLabelText: BoundFunction<GetByAttribute>
  getAllByLabelText: BoundFunction<AllByAttribute>
  queryByAltText: BoundFunction<QueryByAttribute>
  queryAllByAltText: BoundFunction<AllByAttribute>
  getByAltText: BoundFunction<GetByAttribute>
  getAllByAltText: BoundFunction<AllByAttribute>
}

export interface RenderResult extends GetsAndQueries {
  container: HTMLDivElement
  debug: () => void
  rerender: (ui: React.ReactElement<any>) => void
  unmount: VoidFunction
}

/**
 * Render into a container which is appended to document.body. It should be used with cleanup.
 */
export function render(
  ui: React.ReactElement<any>,
  options?: {container: HTMLElement; baseElement: HTMLElement},
): RenderResult

/**
 * When in need to wait for DOM elements to appear, disappear, or change. Prefer waitForElement.
 */
export function wait(
  callback?: () => void,
  options?: {
    timeout?: number
    interval?: number
  },
): Promise<void>

/**
 * When in need to wait for DOM elements to appear, disappear, or change.
 */
export function waitForElement<T>(
  callback?: () => T,
  options?: {
    container?: HTMLElement
    timeout?: number
    mutationObserverOptions?: MutationObserverInit
  },
): Promise<T | undefined>

type EventType =
  | 'copy'
  | 'cut'
  | 'paste'
  | 'compositionEnd'
  | 'compositionStart'
  | 'compositionUpdate'
  | 'keyDown'
  | 'keyPress'
  | 'keyUp'
  | 'focus'
  | 'blur'
  | 'change'
  | 'input'
  | 'invalid'
  | 'submit'
  | 'click'
  | 'contextMenu'
  | 'dblClick'
  | 'drag'
  | 'dragEnd'
  | 'dragEnter'
  | 'dragExit'
  | 'dragLeave'
  | 'dragOver'
  | 'dragStart'
  | 'drop'
  | 'mouseDown'
  | 'mouseEnter'
  | 'mouseLeave'
  | 'mouseMove'
  | 'mouseOut'
  | 'mouseOver'
  | 'mouseUp'
  | 'select'
  | 'touchCancel'
  | 'touchEnd'
  | 'touchMove'
  | 'touchStart'
  | 'scroll'
  | 'wheel'
  | 'abort'
  | 'canPlay'
  | 'canPlayThrough'
  | 'durationChange'
  | 'emptied'
  | 'encrypted'
  | 'ended'
  | 'loadedData'
  | 'loadedMetadata'
  | 'loadStart'
  | 'pause'
  | 'play'
  | 'playing'
  | 'progress'
  | 'rateChange'
  | 'seeked'
  | 'seeking'
  | 'stalled'
  | 'suspend'
  | 'timeUpdate'
  | 'volumeChange'
  | 'waiting'
  | 'load'
  | 'error'
  | 'animationStart'
  | 'animationEnd'
  | 'animationIteration'
  | 'transitionEnd'
  | 'doubleClick'

type FireFunction = (element: HTMLElement, event: Event) => boolean
type FireObject = {
  [K in EventType]: (element: HTMLElement, options?: {}) => boolean
}

/**
 * Fire DOM events.
 */
export const fireEvent: FireFunction & FireObject

/**
 * Unmounts React trees that were mounted with render.
 */
export function cleanup(): void

export function getQueriesForElement(element: HTMLElement): GetsAndQueries
