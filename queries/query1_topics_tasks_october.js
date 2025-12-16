```javascript
// Find topics taught in October 2020
db.topics.find({
  taught_date: {
    $gte: new Date("2020-10-01"),
    $lte: new Date("2020-10-31")
  }
});

// Find tasks assigned in October 2020
db.tasks.find({
  assigned_date: {
    $gte: new Date("2020-10-01"),
    $lte: new Date("2020-10-31")
  }
});

// Combined query with aggregation
db.topics.aggregate([
  {
    $match: {
      taught_date: {
        $gte: new Date("2020-10-01"),
        $lte: new Date("2020-10-31")
      }
    }
  },
  {
    $lookup: {
      from: "tasks",
      localField: "_id",
      foreignField: "topic_id",
      as: "related_tasks"
    }
  }
]);
```