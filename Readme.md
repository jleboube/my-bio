
# User Profile Web App

# Project Structure


```
my-bio/
├── backend/
│   └── ... backend code ...
├── client/
│   ├── package.json
│   ├── src/
│   ├── public/
│   └── ...
├── client/Dockerfile
├── docker-compose.yml
└── ...
```



# User Profile Web App

## Requirements
- Docker

## Setup
1. Clone the repository
2. Make sure your folder structure is:
   - client/
     - Dockerfile
     - React app files
   - server/
     - Dockerfile
     - Node backend files
   - nginx.conf (in root)
   - docker-compose.yml (in root)
3. Run `docker-compose up --build`
4. Visit the frontend at `http://localhost`
5. Backend API is at `http://localhost:3001`

## Development
To develop frontend or backend individually, navigate into the respective directory and use standard Node.js tools:
- `cd client && npm start`
- `cd server && npm run dev`
*/
