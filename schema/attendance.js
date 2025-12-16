```javascript
{
  _id: ObjectId,
  user_id: ObjectId, // Reference to users collection
  date: Date,
  status: String, // "present" or "absent"
  topic_id: ObjectId // Reference to topics collection
}
```