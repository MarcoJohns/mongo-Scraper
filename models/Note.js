var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    _titleId: {
        type: Schema.Types.ObjectId,
        ref: "article",
    },
    date: {
        type: Date,
        default: Date.now,
    },
    noteText: {
        type: String,
    }
});

var Note = mongoose.model("note", NoteSchema);

module.exports = Note;