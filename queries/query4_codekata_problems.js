```javascript
db.codekata.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "user_info"
    }
  },
  {
    $unwind: "$user_info"
  },
  {
    $project: {
      user_name: "$user_info.name",
      problems_solved: 1,
      _id: 0
    }
  }
]);
```

//### Query 5: Mentors with more than 15 mentees
```javascript
db.mentors.find({
  mentee_count: { $gt: 15 }
});
```
