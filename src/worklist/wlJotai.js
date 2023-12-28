import { atomWithStorage,  } from 'jotai/utils'

export const wlAtom = atomWithStorage([{
  name: 'test',
  list: ['url1']
}])