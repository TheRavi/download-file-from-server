
# Node.js: Download file from server

This is a Rest API which downloads a given file (if exists) from a given directory (configured in .env).


## Badges

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=TheRavi_download-file-from-server&metric=alert_status)](https://sonarcloud.io/dashboard?id=TheRavi_download-file-from-server)
  
## API Reference

#### Get Status and Version

```http
  GET /
```

#### Get file from server

```http
  GET /filedownload/${filename}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `filename`      | `string` | **Required**. file name to download |

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DOWNLOAD_DIRECTORY`


  
## Run Locally

Clone the project

```bash
  git clone https://github.com/TheRavi/download-file-from-server
```

Go to the project directory

```bash
  cd download-file-from-server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
## Authors

- [@TheRavi](https://www.github.com/TheRavi)

  
