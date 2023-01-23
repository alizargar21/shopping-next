
export interface Product  {
      name : string,
      brand : string,
      category : string,
      introduction : string,
      image : string ,
      price : number ,
      discount? : number ,
      rate? : number ,
      supports : string[],
      attributes : Atrribute[]
      colors : Color[]
}

export interface Atrribute {
      attribute : string
}
export interface Color {
      color : string
}

