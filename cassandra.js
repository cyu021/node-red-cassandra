module.exports = function(RED) {
    function CassandraNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
			//console.log('msg = ' + JSON.stringify(msg));
			var cassandra = msg.cassandra;

			var contactPoints = config.contactPoints;
			var keyspace = config.keyspace;
			//console.log('contactPoints = ' + contactPoints);
			//console.log('keyspace = ' + keyspace);

			var payload = msg.payload;
			var cql = payload.cql;
			//console.log('cql = ' + cql);
			
			var client = new cassandra.Client({contactPoints: [contactPoints], keyspace: keyspace});
			var query = cql;
			
			var params = [];
			var i = 0;
			for(i = 0; i < payload.params.length; i += 1) {
				//console.log('v = ' + payload.params[i].v);
				params.push(payload.params[i].v);
			}
			client.execute(query, params, { prepare: true}, function (err, result) {
				//console.log('result = ' + JSON.stringify(result));
				//console.log('err = ' + JSON.stringify(err));
				msg.result = JSON.stringify(result);
				msg.err = JSON.stringify(err);
				node.send(msg);
			});
        });
    }
    RED.nodes.registerType("cassandra",CassandraNode);
}

