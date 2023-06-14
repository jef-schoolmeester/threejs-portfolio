export type HoverMessage = string

export interface Destination {
  to: THREE.Vector3
  focusPoint: THREE.Vector3
}

export interface CameraState {
  focusPoint: THREE.Vector3
  position: THREE.Vector3
}
