const getIndexFromNodeKey = (key: string, rowName: string) =>
  parseInt(key.replace(rowName, ''))

const filterNodeKeysByRow = (rowName: string, nodeKeys: string[]) =>
  nodeKeys.filter((key) => key.includes(rowName))

const sortNodeKeysByNumber = (rowName: string, nodeKeys: string[]) =>
  nodeKeys.sort(
    (a, b) => getIndexFromNodeKey(a, rowName) - getIndexFromNodeKey(b, rowName)
  )

export const getOrderedNewspaperNodeKeys = (
  rowName: string,
  nodeKeys: string[]
): string[] =>
  sortNodeKeysByNumber(rowName, filterNodeKeysByRow(rowName, nodeKeys))
