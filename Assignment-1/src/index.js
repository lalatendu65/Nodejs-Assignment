const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	fs.writeFile(fileName,fileContent);
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	// write code here
	fs.readFile(fileName)
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	fs.appendFile(fileName,fileContent)
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
	fs.unlink(fileName)
	// dont chnage function name

}
myFileWriter("read.txt","Hello");
myFileReader("read.txt","utf8");
myFileUpdater("read.txt"," World");

myFileDeleter("read.txt");

// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }