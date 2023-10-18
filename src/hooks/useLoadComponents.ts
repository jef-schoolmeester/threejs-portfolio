import { useEffect } from 'react'
import { sleep } from '../utils/sleep'
import {
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  MeshMatcapMaterial,
  MeshStandardMaterial,
  SRGBColorSpace,
  TextureLoader,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { useLoadedItemsContext } from './useLoadedItemsContext'

export const useLoadComponents = () => {
  const { loadedModelsObservable } = useLoadedItemsContext()

  const loadComponents = async () => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('./draco/')

    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    const textureLoader = new TextureLoader()

    await sleep(200)

    gltfLoader.load('./models/Pavement.glb', (gltf) => {
      const model: Mesh = gltf.scene.children[0] as Mesh
      loadedModelsObservable.notify('pavement', { model: model.geometry })
    })

    await sleep(100)

    gltfLoader.load('./models/LightPole.glb', (gltf) => {
      const model: Mesh = gltf.scene.children[0] as Mesh
      loadedModelsObservable.notify('lightpole', { model: model.geometry })
    })

    await sleep(50)

    gltfLoader.load('./models/Tree/Tree.glb', (gltf) => {
      const models: Mesh[] = gltf.scene.children as Mesh[]
      loadedModelsObservable.notify('tree', {
        models: models.map((model) => {
          model.geometry.name = model.name
          return model.geometry
        }),
      })
    })
    await sleep(50)

    gltfLoader.load('./models/Grass.glb', (gltf) => {
      const model: Mesh = gltf.scene.children[0] as Mesh
      loadedModelsObservable.notify('grass', {
        model: model.geometry,
      })
    })
    await sleep(50)

    gltfLoader.load('./models/StreetPanel.glb', (gltf) => {
      const models: Mesh[] = gltf.scene.children as Mesh[]
      loadedModelsObservable.notify('streetpanel', {
        models: models.map((model) => {
          model.geometry.name = model.name
          return model.geometry
        }),
      })
    })
    await sleep(50)

    gltfLoader.load('./models/Column.glb', (gltf) => {
      const model: Mesh = gltf.scene.children[0] as Mesh
      loadedModelsObservable.notify('column', {
        model: model.geometry,
      })
    })
    await sleep(50)

    gltfLoader.load('./models/Kiosk/NewspaperRack.glb', (gltf) => {
      const model: Mesh = gltf.scene.children[0] as Mesh
      loadedModelsObservable.notify('newspaperrack', {
        model: model.geometry,
      })
    })
    await sleep(50)

    gltfLoader.load('./models/newspapers.glb', (gltf) => {
      const model: Mesh = gltf.scene.children[0] as Mesh
      loadedModelsObservable.notify('newspaperstack', {
        model: model.geometry,
      })
    })
    await sleep(50)

    gltfLoader.load('./models/Kiosk/Newspapers.glb', (gltf) => {
      const meshs: Mesh[] = gltf.scene.children as Mesh[]
      loadedModelsObservable.notify('newspapers', {
        meshs: meshs,
      })
    })
    await sleep(50)

    gltfLoader.load('./models/Kiosk/KioskStructure.glb', (gltf) => {
      const model: Mesh = gltf.scene.children[0] as Mesh
      loadedModelsObservable.notify('kioskstructure', {
        model: model.geometry,
      })
    })
    await sleep(50)

    gltfLoader.load('./models/Posters.glb', (gltf) => {
      const models: Mesh[] = gltf.scene.children as Mesh[]
      loadedModelsObservable.notify('kioskposters', {
        models: models.map((model) => {
          model.geometry.name = model.name
          return model.geometry
        }),
      })
    })

    textureLoader.load('./textures/Pavement.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshBasicMaterial({
        map: texture,
        transparent: true,
      })
      loadedModelsObservable.notify('pavement', { material: material })
    })

    textureLoader.load('./textures/Lightpole.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshBasicMaterial({ map: texture })
      loadedModelsObservable.notify('lightpole', { material: material })
    })

    await sleep(100)

    textureLoader.load('./textures/Tree-min.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshBasicMaterial({ map: texture })
      loadedModelsObservable.notify('tree', { material: material })
    })

    await sleep(100)

    textureLoader.load('./textures/Grass.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshBasicMaterial({ map: texture })
      loadedModelsObservable.notify('grass', { material: material })
    })

    await sleep(100)

    textureLoader.load('./textures/LeafAlphaMap.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshStandardMaterial({
        alphaMap: texture,
        depthWrite: false,
        transparent: true,
        color: '#80BE47',
        side: DoubleSide,
      })
      loadedModelsObservable.notify('leaves', { material: material })
    })

    await sleep(100)

    textureLoader.load('./textures/StreetPanel-min.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshBasicMaterial({ map: texture })
      loadedModelsObservable.notify('streetpanel', {
        material: material,
      })
    })

    await sleep(100)

    textureLoader.load('./textures/Column-min.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshBasicMaterial({ map: texture })
      loadedModelsObservable.notify('column', {
        material: material,
      })
    })

    await sleep(100)

    textureLoader.load('./textures/NewspaperRack-min.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshBasicMaterial({ map: texture })
      loadedModelsObservable.notify('newspaperrack', {
        material: material,
      })
    })

    await sleep(100)

    textureLoader.load('./textures/Newspapers-min.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshBasicMaterial({ map: texture })
      loadedModelsObservable.notify('newspaperstack', {
        material: material,
      })
    })

    await sleep(100)

    textureLoader.load('./textures/KioskStructure.jpg', (texture) => {
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      const material = new MeshBasicMaterial({ map: texture })
      loadedModelsObservable.notify('kioskstructure', {
        material: material,
      })
    })

    await sleep(100)

    textureLoader.load('./textures/FrontNewspapers.jpg', (texture) => {
      const material = new MeshBasicMaterial({ map: texture })
      texture.flipY = false
      texture.colorSpace = SRGBColorSpace
      loadedModelsObservable.notify('newspapers', {
        material: material,
      })
    })

    await sleep(100)

    textureLoader.load('./textures/matcaps/FancyText.jpg', (texture) => {
      const material = new MeshMatcapMaterial({ matcap: texture })
      loadedModelsObservable.notify('kioskposters', {
        material: material,
      })
    })
  }

  useEffect(() => {
    loadComponents()
  }, [])
}
