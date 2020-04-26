const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema= new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number, 
            distance: Number
        }
    ]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// var blogSchema = new Schema({
//   title:  String, // String is shorthand for {type: String}
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });
// var schema = new Schema({
//     name:    String,
//     binary:  Buffer,
//     living:  Boolean,
//     updated: { type: Date, default: Date.now },
//     age:     { type: Number, min: 18, max: 65 },
//     mixed:   Schema.Types.Mixed,
//     _someId: Schema.Types.ObjectId,
//     decimal: Schema.Types.Decimal128,
//     array: [],
//     ofString: [String],
//     ofNumber: [Number],
//     ofDates: [Date],
//     ofBuffer: [Buffer],
//     ofBoolean: [Boolean],
//     ofMixed: [Schema.Types.Mixed],
//     ofObjectId: [Schema.Types.ObjectId],
//     ofArrays: [[]],
//     ofArrayOfNumbers: [[Number]],
//     nested: {
//       stuff: { type: String, lowercase: true, trim: true }
//     },
//     map: Map,
//     mapOfString: {
//       type: Map,
//       of: String
//     }
//   })