import { eventHandler, getValidatedRouterParams } from 'h3'
import { z } from 'zod'
import { hubBlob } from '../../../utils/blob'

export default eventHandler(async (event) => {
  // TODO: handle caching in production
  const { pathname } = await getValidatedRouterParams(event, z.object({
    pathname: z.string().min(1)
  }).parse)

  return hubBlob().serve(event, pathname)
})
