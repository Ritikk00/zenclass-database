```javascript
{
  _id: ObjectId,
  task_name: String,
  topic_id: ObjectId, // Reference to topics collection
  assigned_date: Date,
  due_date: Date,
  submissions: [
    {
      user_id: ObjectId,
      submitted_date: Date,
      status: String // "submitted" or "pending"
    }
  ]
}
```