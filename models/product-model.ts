import { Schema , model, models} from "mongoose";

const productSchema = new Schema(
      {
        "category": {
          "type": "String"
        },
        "brand": {
          "type": "String"
        },
        "name": {
          "type": "String"
        },
        "supports": {
          "type": [
            "String"
          ]
        },
        "introduction": {
          "type": "String"
        },
        "attributes": {
          "type": [
            "Mixed"
          ]
        },
        "colors": {
          "type": [
            "Mixed"
          ]
        },
        "price": {
          "type": "Number"
        },
        "discount": {
          "type": "Number"
        },
        "rate": {
          "type": "Number"
        },
        "image": {
          "type": "String"
        }
      },
      {
        timestamps: true,
      }
    );
    export  const Product  = models.Product || model("Product", productSchema)
    
    