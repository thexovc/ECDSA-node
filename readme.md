## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

#### private keys used
private key: 25f03e116df0a8179d953489b1d083fbbe0b7e815522d86667d5a484c13b266e
publickey: 04ba4b23f9c7f03be401b9f1d82c5d044c28547d64467ac5bbe4f2afb5c74c884b6b30b9059ea9bad928c8e9afa6548c8a917b6f31ed6f75b541347adcd01c94f9

private key: f9c22de3cd149107c3017cbbe5ab446ff75642bb5287c46e67d8549548b8b7e9
publickey: 04e58e6b38c2c09f1364cea66471465e734609ae8fdea6e842bcf16187ed58e8bb859e156d6adc59ed37baf44031ec5d463de82872e54c76b33c658731ec36d0d3

private key: 0d2b19c4f3153511ff9bb7957f0b6367bcf02b92f85fafec44669773827c9303
publickey: 041829e229494abe23c86a1e9fd875c3d2717c566640308aa496cc38ee34afe9b1b8dd83f1a320b96a65ff3bbf4f1e67193360ae39be7cc62468dc5e6eebc2c1d6
