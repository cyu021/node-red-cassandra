# node-red-cassandra
This is a simple custom node made for Node-RED (http://nodered.org/).

I need to access cassandra in Node-RED for a hobby project, and I fail to find a library to do so. </br>
Hence, I decide to make a custom node which leverages the "cassandra-driver" released by DataStax (http://www.datastax.com/).

node-red-cassandra currently covers only whatever I need to achieve in Node-RED:</br>
1. issue insert / update / delete cql with prepared statement to cassandra and output with retrieved results

[Installation]</br>
Extremely simple, just drop "cassandra.js" and "cassandra.html" into the "nodesDir", and you are ready to go!

[How to use it]</br>
1. add cql string to msg.payload.cql (https://drive.google.com/file/d/0B7PMZ6dMoMGUSGwwME42V3VDOGs/view?usp=sharing)</br>
2. add parameters, an array of JSON with "v" as attribute name, to msg.payload.params (https://drive.google.com/file/d/0B7PMZ6dMoMGURTNIQXRYN2Z5Q0k/view?usp=sharing)</br>
3. load cassandra-driver into an object and add the object to msg.cassandra then put the function before "cassandra" node (https://drive.google.com/file/d/0B7PMZ6dMoMGUZmNpZWhQWldrS28/view?usp=sharing)</br>
4. assign contactPoints and keyspace to "cassandra" node (https://drive.google.com/file/d/0B7PMZ6dMoMGUUDRTX0hLazVYS1U/view?usp=sharing)

