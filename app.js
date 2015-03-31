var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');
var mongojs = require("mongojs");
var db = mongojs.connect("localhost/team");
var team = db.collection('team');



app.use('/teamlist',express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.get('/teamlist',function(req,res){
// 	console.log('/teamlist');
// 	res.render(__dirname+"/public");
// });
app.get('/teamlist/json',function(req,res){
	console.log('teamlist/json');
	team.find(function(err,docs){
		
		res.json(docs);
	});
});

app.post('/teamlist',function(req,res){
	console.log(req.body);
	team.insert(req.body,function(err,docs){
		res.json(docs);
	});
});
app.delete('/teamlist/:id',function(req,res){
	var id = req.params.id;
	team.remove({_id:mongojs.ObjectId(id)},function(err,docs){
		res.json(docs);
	});
	console.log(id);

});
app.get('/teamlist/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	team.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
		res.json(docs);
	});
});
app.put('/teamlist/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	// team.findAndModify({query:{_id:mongojs.ObjectId(id)},
	// 	update:{$set{name : req.body.name,stadium:req.body.stadium,league:req.body.league}},
	// 	new:true},function(err,docs){
	// 		res.json(docs);
	// });
	team.findAndModify({
	query: { _id: mongojs.ObjectId(id) },
	update: { $set: { name : req.body.name,stadium:req.body.stadium,league:req.body.league} },new:false
	},function(err,docs){
		res.json(docs);
	});
});

app.get('/',function(req,res){
	console.log('hello /');
	res.send('hello');

});
app.listen(port,function(req,res){
	console.log("listen on 1337 port");
});


// app.get('/',function(req,res){
// 	res.send('hello /');
// 	console.log('get /');
// });