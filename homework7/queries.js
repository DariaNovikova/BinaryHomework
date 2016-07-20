//task 1: 
db.academy.find({ scores: { $elemMatch: { $and: [{ score: { $gt: 87 } }, { score: { $lt: 93 } }] } } }).pretty();
//task 2: 
db.academy.aggregate({ $unwind: "$scores" }, { $match: { "scores.type": "exam", "scores.score": { $gt: 90 } } }, { $project: { name: "$name", "score": "$scores.score" } });
