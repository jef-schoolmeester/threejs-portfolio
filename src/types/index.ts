export type HoverMessage = string

export interface Destination {
  to: THREE.Vector3
  focusPoint: THREE.Vector3
  speed?: 'slow' | 'medium' | 'fast'
}

export interface CameraState {
  focusPoint: THREE.Vector3
  position: THREE.Vector3
}
