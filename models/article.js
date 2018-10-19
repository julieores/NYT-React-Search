const mongoose = require("mongoose");
const Schema = mongood.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

const Article = mongoose.model("Article", ArticleSchema);
model.exports = Article;
