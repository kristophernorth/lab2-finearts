export class Art {
  constructor(data) {
    this.id = data.id
    this.imgUrl = data.imgUrls.small
    this.description = data.description
    this.admirers = data.admirers
    this.attribution = data.attribution
    
  }
}