import { Mesh } from 'three'

const getIndexFromNode = (node: Mesh, nodeName: string) =>
  parseInt(node.name.replace(nodeName, ''))

const filterNodeByName = (nodes: Mesh[], nodeName: string) =>
  nodes.filter((node) => node.name.includes(nodeName))

const sortNodeByNumber = (nodes: Mesh[], nodeName: string) =>
  nodes.sort(
    (a, b) => getIndexFromNode(a, nodeName) - getIndexFromNode(b, nodeName)
  )

export const getOrderedNewspaperNodes = (
  nodes: Mesh[],
  nodeName: string
): Mesh[] => sortNodeByNumber(filterNodeByName(nodes, nodeName), nodeName)
