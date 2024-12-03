import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Art } from "@/models/Art.js"

class ArtService {
  async discoverArt() {
    const response = await api.get('api/artworks')
    logger.log('DISCOVERED ART', response.data)
    const art = response.data.artworks.map(artPOJO => new Art(artPOJO))
    AppState.art = art
  }
}

export const artService = new ArtService()