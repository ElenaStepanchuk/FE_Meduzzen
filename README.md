# FE_Meduzzen

Front End repository

The application starts command "npm run dev" in the terminal.

Build docker image command "docker build -t fe-meduzzen-docker:volumes ."

The application starts in Docker command the "docker run -d -p 3030:3000 -v "D:\my-projects\FE_Meduzzen:/app" -v /app/node_modules -v rebuild:/app/data --rm --name fe-meduzzen-docker fe-meduzzen-docker:volumes" in the terminal.
