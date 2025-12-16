```javascript
db.mentors.find({
  mentee_count: { $gt: 15 }
});
```