import { trpc } from '../lib/trpc'
import { getIdeaTrpcRoute } from './detIdea'
import { getIdeasTrpcRoute } from './getIdeas'

export const trpcRouter = trpc.router({
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute
})

export type TrpcRouter = typeof trpcRouter