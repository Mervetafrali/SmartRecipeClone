
var mongoose = require('mongoose');

module.exports= new mongoose.model('Recipes', mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    request: {
        link: String,
        
    },
    response:{
        title:String,
        link:String,
        imgLink:String,
        category:String,
        ingredients:[{
        }],
        recipeInstructions:[{}],
        metaData:{
            totalVote:Number,
            avgPoint:Number,
            recipeYield:String,
            prepTime:String,
            cookTime:String
        },
    }

   

}));