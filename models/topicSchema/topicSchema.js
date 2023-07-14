import { Schema, model, models } from "mongoose";

const topicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Topic = models.Topic || model("Topic", topicSchema);
export default Topic;
