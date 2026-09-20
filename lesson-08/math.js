const {Buffer} = require("buffer")

function findSolution(S, M, V) {
	return S * M * V;
}

function stringToBuffer(string){
	string = Buffer.from(string)
	return string
}

module.exports = {
	findSolution : findSolution,
	stringToBuffer : stringToBuffer
};