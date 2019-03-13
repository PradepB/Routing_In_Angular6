const mongoose = require("mongoose")
const Schema = mongoose.Schema
const SampleSchema = new Schema({
    login: { type: String },
    id: { type: Number },
    node_id: { type: String },
    url: { type: String },
    repos_url: { type: String },
    events_url: { type: String },
    hooks_url: { type: String },
    issues_url: { type: String },
    members_url: { type: String },
    public_members_url: { type: String },
    avatar_url: { type: String },
    description: { type: String }
},{
    collection:"sample"
}
)
module.exports=mongoose.model("sample",SampleSchema)