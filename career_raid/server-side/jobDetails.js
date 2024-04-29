const mongoose = require("mongoose");

const jobDetailsSchema = new mongoose.Schema(
    {
        title: String,
        role: String,
        image: String,
        status: String
    },
    {
        collection: "JobInfo",
    }
);

mongoose.model("JobInfo", jobDetailsSchema);